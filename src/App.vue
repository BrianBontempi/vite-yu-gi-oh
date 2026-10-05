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
        fetchPokemons() {
            store.isLoading = true;
            store.hasError = false;

            axios.get(store.endpoint, { params: { per: 50 } })
                .then(res => {
                    store.pokemons = res.data.docs;
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
