<script>
import myFilter from "./myFilter.vue"

export default {
    name: "myMain",
    components: {
        myFilter,
    }
}
</script>


<template>
    <main>
        <div class="container">
            <myFilter></myFilter>
        </div>
    </main>
</template>


<style scoped lang="scss">
main {
    background-color: orange;
}
</style>