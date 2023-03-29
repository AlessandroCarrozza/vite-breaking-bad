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
    </div>
</template>


<style scoped lang="scss">
.card {
    max-width: calc(100% / 5);

    img {
        width: 100%;
    }
}
</style>