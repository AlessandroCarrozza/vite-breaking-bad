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
    created() {
        axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=30&offset=0")
            .then(response => {
                this.store.cardsList = response.data
                console.log(this.store.cardsList);
            })
    }
}

</script>


<template>
    <myHeader></myHeader>

    <main>
        <div class="container">
            <myFilter></myFilter>
            <myCardsList></myCardsList>
        </div>
    </main>
</template>


<style lang="scss">
@use "./styles/general.scss"
</style>
