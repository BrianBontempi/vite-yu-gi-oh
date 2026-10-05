<script>
export default {
    name: 'AppLoader'
}
</script>

<template>
    <div class="loader d-flex flex-column justify-content-center align-items-center">
        <div class="pokeball"></div>
        <p class="mt-3 text-uppercase fw-bold">Loading...</p>
    </div>
</template>

<style lang="scss" scoped>
.loader {
    min-height: 300px;
    color: white;
}

.pokeball {
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 6px solid #333333;
    background: linear-gradient(to bottom, #e62117 0 46%, #333333 46% 54%, #FFFFFF 54% 100%);
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
