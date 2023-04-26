<template>
  <h1>Play Chess</h1>

  <Board />
</template>

<script lang="js">
  import Board from '../components/Board.vue'

  export default {
    name: 'PlayView',
    components: { Board },
  }
</script>
