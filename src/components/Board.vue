<script setup>

</script>

<template>
  <div>
    Chess Board

    <Square class="light" pos="h1" state="♖"/>
  </div>
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
    name: 'Board',
    components: { Square },
    data() {
        return {
          start: '',
          end: '',
          position: { 
            "a8": "♖", "b8": "♘", "c8": "♗", "d8": "♕", "e8": "♔", "f8": "♗", "g8": "♘", "h8": "♖",
            "a7": "♙", "b7": "♙", "c7": "♙", "d7": "♙", "e7": "♙", "f7": "♙", "g7": "♙", "h7": "♙",
            "a6": "", "b6": "", "c6": "",  "d6": "", "e6": "", "f6": "", "g6": "", "h6": "",
            "a5": "", "b5": "", "c5": "", "d5": "", "e5": "", "f5": "", "g5": "", "h5": "",
            "a4": "", "b4": "", "c4": "", "d4": "", "e4": "", "f4": "", "g4": "", "h4": "",
            "a3": "", "b3": "", "c3": "", "d3": "", "e3": "", "f3": "", "g3": "", "h3": "",
            "a2": "♙", "b2": "♙", "c2": "♙", "d2": "♙", "e2": "♙", "f2": "♙", "g2": "♙", "h2": "♙",
            "a1": "♖", "b1": "♘", "c1": "♗", "d1": "♕", "e1": "♔", "f1": "♗", "g1": "♘", "h1": "♖",
          },
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
