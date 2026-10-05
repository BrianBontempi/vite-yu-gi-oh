<script>
import PokemonList from './pokemons/PokemonList.vue';

export default {
    name: 'AppMain',
    components: { PokemonList }
}
</script>

<template>
    <main>
        <div class="container">
            <div class="pokedex-screen">
                <PokemonList />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    padding: 70px 0 150px;
}

.pokedex-screen {
    background-color: #333333;
    border-radius: 20px;
    padding: 30px;
}
</style>
