<script>
export default {
    name: 'PokemonCard',
    props: {
        pokemon: Object
    },
    computed: {
        types() {
            const { type1, type2 } = this.pokemon;
            return [type1, type2].filter(type => type);
        }
    }
}
</script>

<template>
    <div class="pokemon-card h-100 text-center p-3">
        <figure class="mb-2">
            <img :src="pokemon.imageUrl" :alt="pokemon.name" class="img-fluid">
        </figure>
        <div class="number">#{{ pokemon.number }}</div>
        <h3 class="h5 fw-bold text-uppercase">{{ pokemon.name }}</h3>
        <div class="types">{{ types.join(' / ') }}</div>
    </div>
</template>

<style lang="scss" scoped>
.pokemon-card {
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 4px solid #333333;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }

    figure {
        background-color: #f2f2f2;
        border-radius: 50%;
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .number {
        color: #888888;
        font-size: 14px;
    }

    .types {
        font-size: 14px;
    }
}
</style>
