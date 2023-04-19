<template>
    <button :id="pos" :class="'square ' + color + '-square ' + state?.color + '-piece'">{{ state?.figure }}</button>
</template>
 
<script lang="js">
export default {
    name: "Square",
    props: {
        state: Object,
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

.light-square { background: #8a2323; }
.dark-square { background: #150cb0; }

.white-piece {color: #fff;}
.black-piece {color: #000;}

</style>