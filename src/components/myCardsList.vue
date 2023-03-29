<script>

import myCard from "./myCard.vue"

import { store } from "../store.js"

export default {
    name: "myCardsList",
    data() {
        return {
            store
        }
    },
    components: {
        myCard,
    }
}
</script>


<template>
    <div class="cards-list">
        <myCard v-for="card in store.cardsList"></myCard>
    </div>
</template>


<style scoped lang="scss">
.cards-list {
    width: 100%;
    background-color: white;
}
</style>