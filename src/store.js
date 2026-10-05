import { reactive } from 'vue';

const endpoint = 'https://pokeapi.co/api/v2/pokemon';

export const store = reactive({
    endpoint,
    pokemons: [],
    isLoading: false,
    hasError: false
});
