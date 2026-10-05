<script>
import { store } from '../../store';
import PokemonCard from './PokemonCard.vue';

export default {
    name: 'PokemonList',
    components: { PokemonCard },
    data: () => ({
        store
    })
}
</script>

<template>
    <div v-if="store.hasError" class="alert alert-danger text-center">
        Impossibile caricare i Pokémon, riprova più tardi.
    </div>
    <div v-else class="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
        <div v-for="pokemon in store.pokemons" :key="pokemon._id" class="col">
            <PokemonCard :pokemon="pokemon" />
        </div>
    </div>
</template>
