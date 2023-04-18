<template>
    <button :id="pos" :class="'square ' + color">{{ state }}</button>
</template>
 
<script lang="js">
export default {
    name: "Square",
    props: {
        state: String,
        pos: String,
        color: String,
    },
    mounted() {
    }
}
</script>

<style scoped>
.square {
    width: 1.5em;
    height: 1.5em;
    border: 1px solid #000;
    text-align: center;
    font-weight: bold;
    font-size: 32px;
    line-height: 0;
    display: table-cell;
    vertical-align:middle;
}

.light { background: #eee; }
.dark { background: #aaa; }
</style>