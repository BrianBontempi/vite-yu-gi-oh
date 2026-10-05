<script>
import axios from 'axios';
import { store } from './store';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
export default {
    name: 'Yugioh',
    components: { AppHeader, AppMain, AppFooter },
    methods: {
        // dai dati di PokéAPI tengo solo quello che serve alla card
        formatPokemon(data) {
            const [type1, type2] = data.types.map(({ type }) => type.name);
            return {
                id: data.id,
                number: String(data.id).padStart(3, '0'),
                name: data.name,
                imageUrl: data.sprites.other?.['official-artwork']?.front_default || data.sprites.front_default,
                type1,
                type2
            };
        },
        fetchPokemons() {
            store.isLoading = true;
            store.hasError = false;

            // la lista restituisce solo nome e url, i dettagli vanno chiesti per ogni Pokémon
            axios.get(store.endpoint, { params: { limit: 50 } })
                .then(res => Promise.all(res.data.results.map(({ url }) => axios.get(url))))
                .then(responses => {
                    store.pokemons = responses.map(({ data }) => this.formatPokemon(data));
                })
                .catch(err => {
                    console.error(err);
                    store.hasError = true;
                })
                .then(() => {
                    store.isLoading = false;
                });
        }
    },
    created() {
        this.fetchPokemons();
    }
}
</script>

<template>
    <AppHeader />
    <AppMain />
    <AppFooter />
</template>

<style lang="scss">
@use './assets/scss/style.scss';
</style>
