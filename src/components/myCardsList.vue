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
        <myCard v-for="(card, index) in store.cardsList.data" :key="index" :image="card.card_images[0].image_url"
            :name="card.name" :archetype="card.archetype">
        </myCard>
    </div>
</template>


<style scoped lang="scss">
.cards-list {
    width: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 3rem;
}
</style>