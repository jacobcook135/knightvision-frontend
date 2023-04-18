<template>
  <div class="board">
    <div>
      <Square color="light" pos="a8" :state="position['a8']"/>
      <Square color="dark" pos="b8" :state="position['b8']"/>
      <Square color="light" pos="c8" :state="position['c8']"/>
      <Square color="dark" pos="d8" :state="position['d8']"/>
      <Square color="light" pos="e8" :state="position['e8']"/>
      <Square color="dark" pos="f8" :state="position['f8']"/>
      <Square color="light" pos="g8" :state="position['g8']"/>
      <Square color="dark" pos="h8" :state="position['h8']"/>
    </div>

    <div>
      <Square color="dark" pos="a7" :state="position['a7']"/>
      <Square color="light" pos="b7" :state="position['b7']"/>
      <Square color="dark" pos="c7" :state="position['c7']"/>
      <Square color="light" pos="d7" :state="position['d7']"/>
      <Square color="dark" pos="e7" :state="position['e7']"/>
      <Square color="light" pos="f7" :state="position['f7']"/>
      <Square color="dark" pos="g7" :state="position['g7']"/>
      <Square color="light" pos="h7" :state="position['h7']"/>
    </div>

    <div>
      <Square color="light" pos="a6" :state="position['a6']"/>
      <Square color="dark" pos="b6" :state="position['b6']"/>
      <Square color="light" pos="c6" :state="position['c6']"/>
      <Square color="dark" pos="d6" :state="position['d6']"/>
      <Square color="light" pos="e6" :state="position['e6']"/>
      <Square color="dark" pos="f6" :state="position['f6']"/>
      <Square color="light" pos="g6" :state="position['g6']"/>
      <Square color="dark" pos="h6" :state="position['h6']"/>
    </div>

    <div>
      <Square color="dark" pos="a5" :state="position['a5']"/>
      <Square color="light" pos="b5" :state="position['b5']"/>
      <Square color="dark" pos="c5" :state="position['c5']"/>
      <Square color="light" pos="d5" :state="position['d5']"/>
      <Square color="dark" pos="e5" :state="position['e5']"/>
      <Square color="light" pos="f5" :state="position['f5']"/>
      <Square color="dark" pos="g5" :state="position['g5']"/>
      <Square color="light" pos="h5" :state="position['h5']"/>
    </div>

    <div>
      <Square color="light" pos="a4" :state="position['a4']"/>
      <Square color="dark" pos="b4" :state="position['b4']"/>
      <Square color="light" pos="c4" :state="position['c4']"/>
      <Square color="dark" pos="d4" :state="position['d4']"/>
      <Square color="light" pos="e4" :state="position['e4']"/>
      <Square color="dark" pos="f4" :state="position['f4']"/>
      <Square color="light" pos="g4" :state="position['g4']"/>
      <Square color="dark" pos="h4" :state="position['h4']"/>
    </div>

    <div>
      <Square color="dark" pos="a3" :state="position['a3']"/>
      <Square color="light" pos="b3" :state="position['b3']"/>
      <Square color="dark" pos="c3" :state="position['c3']"/>
      <Square color="light" pos="d3" :state="position['d3']"/>
      <Square color="dark" pos="e3" :state="position['e3']"/>
      <Square color="light" pos="f3" :state="position['f3']"/>
      <Square color="dark" pos="g3" :state="position['g3']"/>
      <Square color="light" pos="h3" :state="position['h3']"/>
    </div>

    <div>
      <Square color="light" pos="a2" :state="position['a2']"/>
      <Square color="dark" pos="b2" :state="position['b2']"/>
      <Square color="light" pos="c2" :state="position['c2']"/>
      <Square color="dark" pos="d2" :state="position['d2']"/>
      <Square color="light" pos="e2" :state="position['e2']"/>
      <Square color="dark" pos="f2" :state="position['f2']"/>
      <Square color="light" pos="g2" :state="position['g2']"/>
      <Square color="dark" pos="h2" :state="position['h2']"/>
    </div>

    <div>
      <Square color="dark" pos="a1" :state="position['a1']"/>
      <Square color="light" pos="b1" :state="position['b1']"/>
      <Square color="dark" pos="c1" :state="position['c1']"/>
      <Square color="light" pos="d1" :state="position['d1']"/>
      <Square color="dark" pos="e1" :state="position['e1']"/>
      <Square color="light" pos="f1" :state="position['f1']"/>
      <Square color="dark" pos="g1" :state="position['g1']"/>
      <Square color="light" pos="h1" :state="position['h1']"/>
    </div>
  </div>
</template>

<style>
  .board { border-spacing: 0; border-collapse: collapse; }
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
