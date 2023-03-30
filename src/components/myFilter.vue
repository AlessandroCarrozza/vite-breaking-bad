<script>

import { store } from "../store.js"

export default {
    name: "myFilter",
    data() {
        return {
            store,
        }
    },
}
</script>


<template>
    <select name="filter" id="filter" v-model="store.userChoice" @change="$emit('filteredCards')">
        <option value="All Cards">All Cards</option>
        <option v-for="archetype in store.archetypeList" :value="archetype">{{ archetype }}
        </option>
    </select>
</template>


<style scoped lang="scss">
select {
    width: 140px;
    height: 35px;
    margin: 1rem 0;
    border: 1px solid lightgrey;
    padding-left: 5px;
}
</style>