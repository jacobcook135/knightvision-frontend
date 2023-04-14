<template>
  <h1>Play Chess</h1>

  <Square class="dark" :squareValue="squareValue[0]" pos="h2" @click="storeClick('h2')">♙</Square>
  <Square class="dark" :squareValue="squareValue[0]" pos="h3" @click="storeClick('h3')">♙</Square>
  <Square class="dark" :squareValue="squareValue[0]" pos="h4" @click="storeClick('h4')">♙</Square>
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
  import Square from '../components/Square.vue'

  export default {
      components: { Square },
      data() {
          return {
            start: '',
            end: '',
            squareValue: Array(9).fill(null),
          }
      },
      methods: {
          storeClick(pos) {
            if (this.start == '') {
                this.start = pos;
            } else {
                this.end = pos;
                this.movePiece(this.start, this.end);
            }
          },
          movePiece(start, end) {
            this.$refs[end].textContent = this.$refs[start].textContent;
            this.$refs[start].textContent = '';

            this.start = '';
            this.end = '';
          }
      },
  }
</script>
