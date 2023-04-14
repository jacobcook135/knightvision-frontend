<template>
    <button class="square">{{ squareValue }}</button>
</template>
 
<script lang="js">
export default {
    name: "Square",
    props: {
        squareValue: String,
        pos: String,
    },
    mounted() {
        // console.log("from child component squareValue", this.squareValue);
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