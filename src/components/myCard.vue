<script>

export default {
    name: "myCard",
    props: {
        image: String,
        name: String,
        archetype: String,
    }
}
</script>


<template>
    <div class="card">
        <img :src="image" :alt="name">
        <h3>{{ name }}</h3>
        <h4>{{ archetype }}</h4>
    </div>
</template>


<style scoped lang="scss">
.card {
    max-width: calc(100% / 5 - 1rem);
    text-align: center;
    background-color: orange;
    margin: 0.5rem;
    padding-bottom: 1rem;

    img {
        width: 100%;
    }

    h3 {
        padding: 1rem;
        color: white;
    }
}
</style>