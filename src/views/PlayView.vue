<template>
  <h1>Play Chess</h1>

  <Board />
</template>

<style>
  .chess-board { border-spacing: 0; border-collapse: collapse; }
  .chess-board th { padding: .5em; }
  .chess-board th + th { border-bottom: 1px solid #000; }
  .chess-board th:first-child,
  .chess-board td:last-child { border-right: 1px solid #000; }
  .chess-board tr:last-child td { border-bottom: 1px solid; }
  .chess-board th:empty { border: none; }
  .chess-board td { width: 1.5em; height: 1.5em; text-align: center; font-size: 32px; line-height: 0;}
  .chess-board .light { background: #eee; }
  .chess-board .dark { background: #aaa; }
</style>

<script lang="js">
  import Board from '../components/Board.vue'

  export default {
    name: 'PlayView',
    components: { Board },
  }
</script>
