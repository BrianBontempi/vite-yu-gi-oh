<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header class="d-flex justify-content-center align-items-center shadow-lg">
        <h1 class="text-uppercase fw-bold">pokedex</h1>
        <div class="circle"></div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #e62117;
    padding: 35px;
    color: white;
    font-size: 32px;
    border-bottom: 10px solid #333333;
    position: relative;

    .circle {
        height: 55px;
        width: 55px;
        border-radius: 50%;
        background-color: #FFFFFF;
        border: 10px solid #333333;
        position: absolute;
        bottom: -30px;
        left: 48.2%;
    }
}
</style> 