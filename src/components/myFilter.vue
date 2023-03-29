<script>
export default {
    name: "myFilter",
}
</script>


<template>
    <select name="filter" id="filter">
        <option value="alien">Alien</option>
    </select>
</template>


<style scoped lang="scss">
select {
    width: 140px;
    height: 30px;
    margin: 1rem 0;
    border: 1px solid lightgrey;
    padding-left: 5px;
}
</style>