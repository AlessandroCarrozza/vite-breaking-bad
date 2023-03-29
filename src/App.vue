<script>
import myHeader from "./components/myHeader.vue"
import myMain from "./components/myMain.vue"

export default {
    components: {
        myHeader,
        myMain
    }
}

</script>


<template>
    <myHeader></myHeader>

    <myMain></myMain>
</template>


<style lang="scss">
@use "./styles/general.scss"
</style>
