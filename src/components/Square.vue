<template>
    <button id="{{ pos }}" class="square">{{ state }}</button>
</template>
 
<script lang="js">
export default {
    name: "Square",
    props: {
        state: String,
        pos: String,
    },
    mounted() {
    }
}
</script>

<style scoped>
.square {
    background-color: #fff;
    width: 40px;
    height: 40px;
    border: 1px solid #61dafb;
    text-align: center;
    font-weight: bold;
    line-height: 40px;
}
</style>