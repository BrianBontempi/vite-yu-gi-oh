import { reactive } from 'vue';

const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';

export const store = reactive({
    endpoint,
    pokemons: [],
    isLoading: false,
    hasError: false
});
