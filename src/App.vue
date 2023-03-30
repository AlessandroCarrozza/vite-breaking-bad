<script>
import myHeader from "./components/myHeader.vue";
import myFilter from "./components/myFilter.vue";
import myCardsList from "./components/myCardsList.vue";
import axios from "axios";
import { store } from "./store.js"

export default {
    components: {
        myHeader,
        myFilter,
        myCardsList
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        getCards() {

            axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=200&offset=0")
                .then(response => {
                    this.store.cardsList = response.data;
                    console.log(response);
                })


        },
        generateFilteredCards() {

            console.log(this.store.userChoice);

            let urlCards = "https://db.ygoprodeck.com/api/v7/cardinfo.php?";

            if (this.store.userChoice != "All Cards") {
                urlCards += `archetype=${this.store.userChoice}`;
            } else {
                urlCards += `num=70&offset=0`;
            }

            axios.get(urlCards)
                .then(response => {
                    this.store.cardsList = response.data;
                    console.log(response)
                })
        }
    },
    created() {
        this.getCards();
    }
}

</script>


<template>
    <myHeader></myHeader>

    <main>
        <div class="container">
            <myFilter @filteredCards="generateFilteredCards"></myFilter>
            <myCardsList></myCardsList>
        </div>
    </main>
</template>


<style lang="scss">
@use "./styles/general.scss"
</style>
