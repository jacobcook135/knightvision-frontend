<template>
  <div class="board">
    <div>
      <Square color="light" pos="a8" :state="position['a8']" :legalMoves="legalMoves" @click="storeClick('a8')"/>
      <Square color="dark" pos="b8" :state="position['b8']" :legalMoves="legalMoves" @click="storeClick('b8')"/>
      <Square color="light" pos="c8" :state="position['c8']" :legalMoves="legalMoves" @click="storeClick('c8')"/>
      <Square color="dark" pos="d8" :state="position['d8']" :legalMoves="legalMoves" @click="storeClick('d8')"/>
      <Square color="light" pos="e8" :state="position['e8']" :legalMoves="legalMoves" @click="storeClick('e8')"/>
      <Square color="dark" pos="f8" :state="position['f8']" :legalMoves="legalMoves" @click="storeClick('f8')"/>
      <Square color="light" pos="g8" :state="position['g8']" :legalMoves="legalMoves" @click="storeClick('g8')"/>
      <Square color="dark" pos="h8" :state="position['h8']" :legalMoves="legalMoves" @click="storeClick('h8')"/>
    </div>

    <div>
      <Square color="dark" pos="a7" :state="position['a7']" :legalMoves="legalMoves" @click="storeClick('a7')"/>
      <Square color="light" pos="b7" :state="position['b7']" :legalMoves="legalMoves" @click="storeClick('b7')"/>
      <Square color="dark" pos="c7" :state="position['c7']" :legalMoves="legalMoves" @click="storeClick('c7')"/>
      <Square color="light" pos="d7" :state="position['d7']" :legalMoves="legalMoves" @click="storeClick('d7')"/>
      <Square color="dark" pos="e7" :state="position['e7']" :legalMoves="legalMoves" @click="storeClick('e7')"/>
      <Square color="light" pos="f7" :state="position['f7']" :legalMoves="legalMoves" @click="storeClick('f7')"/>
      <Square color="dark" pos="g7" :state="position['g7']" :legalMoves="legalMoves" @click="storeClick('g7')"/>
      <Square color="light" pos="h7" :state="position['h7']" :legalMoves="legalMoves" @click="storeClick('h7')"/>
    </div>

    <div>
      <Square color="light" pos="a6" :state="position['a6']" :legalMoves="legalMoves" @click="storeClick('a6')"/>
      <Square color="dark" pos="b6" :state="position['b6']" :legalMoves="legalMoves" @click="storeClick('b6')"/>
      <Square color="light" pos="c6" :state="position['c6']" :legalMoves="legalMoves" @click="storeClick('c6')"/>
      <Square color="dark" pos="d6" :state="position['d6']" :legalMoves="legalMoves" @click="storeClick('d6')"/>
      <Square color="light" pos="e6" :state="position['e6']" :legalMoves="legalMoves" @click="storeClick('e6')"/>
      <Square color="dark" pos="f6" :state="position['f6']" :legalMoves="legalMoves" @click="storeClick('f6')"/>
      <Square color="light" pos="g6" :state="position['g6']" :legalMoves="legalMoves" @click="storeClick('g6')"/>
      <Square color="dark" pos="h6" :state="position['h6']" :legalMoves="legalMoves" @click="storeClick('h6')"/>
    </div>

    <div>
      <Square color="dark" pos="a5" :state="position['a5']" :legalMoves="legalMoves" @click="storeClick('a5')"/>
      <Square color="light" pos="b5" :state="position['b5']" :legalMoves="legalMoves" @click="storeClick('b5')"/>
      <Square color="dark" pos="c5" :state="position['c5']" :legalMoves="legalMoves" @click="storeClick('c5')"/>
      <Square color="light" pos="d5" :state="position['d5']" :legalMoves="legalMoves" @click="storeClick('d5')"/>
      <Square color="dark" pos="e5" :state="position['e5']" :legalMoves="legalMoves" @click="storeClick('e5')"/>
      <Square color="light" pos="f5" :state="position['f5']" :legalMoves="legalMoves" @click="storeClick('f5')"/>
      <Square color="dark" pos="g5" :state="position['g5']" :legalMoves="legalMoves" @click="storeClick('g5')"/>
      <Square color="light" pos="h5" :state="position['h5']" :legalMoves="legalMoves" @click="storeClick('h5')"/>
    </div>

    <div>
      <Square color="light" pos="a4" :state="position['a4']" :legalMoves="legalMoves" @click="storeClick('a4')"/>
      <Square color="dark" pos="b4" :state="position['b4']" :legalMoves="legalMoves" @click="storeClick('b4')"/>
      <Square color="light" pos="c4" :state="position['c4']" :legalMoves="legalMoves" @click="storeClick('c4')"/>
      <Square color="dark" pos="d4" :state="position['d4']" :legalMoves="legalMoves" @click="storeClick('d4')"/>
      <Square color="light" pos="e4" :state="position['e4']" :legalMoves="legalMoves" @click="storeClick('e4')"/>
      <Square color="dark" pos="f4" :state="position['f4']" :legalMoves="legalMoves" @click="storeClick('f4')"/>
      <Square color="light" pos="g4" :state="position['g4']" :legalMoves="legalMoves" @click="storeClick('g4')"/>
      <Square color="dark" pos="h4" :state="position['h4']" :legalMoves="legalMoves" @click="storeClick('h4')"/>
    </div>

    <div>
      <Square color="dark" pos="a3" :state="position['a3']" :legalMoves="legalMoves" @click="storeClick('a3')"/>
      <Square color="light" pos="b3" :state="position['b3']" :legalMoves="legalMoves" @click="storeClick('b3')"/>
      <Square color="dark" pos="c3" :state="position['c3']" :legalMoves="legalMoves" @click="storeClick('c3')"/>
      <Square color="light" pos="d3" :state="position['d3']" :legalMoves="legalMoves" @click="storeClick('d3')"/>
      <Square color="dark" pos="e3" :state="position['e3']" :legalMoves="legalMoves" @click="storeClick('e3')"/>
      <Square color="light" pos="f3" :state="position['f3']" :legalMoves="legalMoves" @click="storeClick('f3')"/>
      <Square color="dark" pos="g3" :state="position['g3']" :legalMoves="legalMoves" @click="storeClick('g3')"/>
      <Square color="light" pos="h3" :state="position['h3']" :legalMoves="legalMoves" @click="storeClick('h3')"/>
    </div>

    <div>
      <Square color="light" pos="a2" :state="position['a2']" :legalMoves="legalMoves" @click="storeClick('a2')"/>
      <Square color="dark" pos="b2" :state="position['b2']" :legalMoves="legalMoves" @click="storeClick('b2')"/>
      <Square color="light" pos="c2" :state="position['c2']" :legalMoves="legalMoves" @click="storeClick('c2')"/>
      <Square color="dark" pos="d2" :state="position['d2']" :legalMoves="legalMoves" @click="storeClick('d2')"/>
      <Square color="light" pos="e2" :state="position['e2']" :legalMoves="legalMoves" @click="storeClick('e2')"/>
      <Square color="dark" pos="f2" :state="position['f2']" :legalMoves="legalMoves" @click="storeClick('f2')"/>
      <Square color="light" pos="g2" :state="position['g2']" :legalMoves="legalMoves" @click="storeClick('g2')"/>
      <Square color="dark" pos="h2" :state="position['h2']" :legalMoves="legalMoves" @click="storeClick('h2')"/>
    </div>

    <div>
      <Square color="dark" pos="a1" :state="position['a1']" :legalMoves="legalMoves" @click="storeClick('a1')"/>
      <Square color="light" pos="b1" :state="position['b1']" :legalMoves="legalMoves" @click="storeClick('b1')"/>
      <Square color="dark" pos="c1" :state="position['c1']" :legalMoves="legalMoves" @click="storeClick('c1')"/>
      <Square color="light" pos="d1" :state="position['d1']" :legalMoves="legalMoves" @click="storeClick('d1')"/>
      <Square color="dark" pos="e1" :state="position['e1']" :legalMoves="legalMoves" @click="storeClick('e1')"/>
      <Square color="light" pos="f1" :state="position['f1']" :legalMoves="legalMoves" @click="storeClick('f1')"/>
      <Square color="dark" pos="g1" :state="position['g1']" :legalMoves="legalMoves" @click="storeClick('g1')"/>
      <Square color="light" pos="h1" :state="position['h1']" :legalMoves="legalMoves" @click="storeClick('h1')"/>
    </div>
  </div>
</template>

<style>
  .board { border-spacing: 0; border-collapse: collapse; }
</style>

<script lang="js">
  import Square from '../components/Square.vue';

  const figures = {
    "rook": "♜", "knight": "♞", "bishop": "♝",
    "queen": "♛", "king": "♚", "pawn": "♟︎"
  };

  export default {
    name: 'Board',
    components: { Square },
    data() {
        return {
          start: '',
          end: '',
          legalMoves: [],
          position: {
            "a8": {"figure": figures.rook, "color": "black"}, "b8": {"figure": figures.knight, "color": "black"}, "c8": {"figure": figures.bishop, "color": "black"}, "d8": {"figure": figures.queen, "color": "black"},
            "e8": {"figure": figures.king, "color": "black"}, "f8": {"figure": figures.bishop, "color": "black"}, "g8": {"figure": figures.knight, "color": "black"}, "h8": {"figure": figures.rook, "color": "black"},
            "a7": {"figure": figures.pawn, "color": "black"}, "b7": {"figure": figures.pawn, "color": "black"}, "c7": {"figure": figures.pawn, "color": "black"}, "d7": {"figure": figures.pawn, "color": "black"},
            "e7": {"figure": figures.pawn, "color": "black"}, "f7": {"figure": figures.pawn, "color": "black"}, "g7": {"figure": figures.pawn, "color": "black"}, "h7": {"figure": figures.pawn, "color": "black"},
            "a6": {"figure": null, "color": null}, "b6": {"figure": null, "color": null}, "c6": {"figure": null, "color": null},  "d6": {"figure": null, "color": null},
            "e6": {"figure": null, "color": null}, "f6": {"figure": null, "color": null}, "g6": {"figure": null, "color": null}, "h6": {"figure": null, "color": null},
            "a5": {"figure": null, "color": null}, "b5": {"figure": null, "color": null}, "c5": {"figure": null, "color": null}, "d5": {"figure": null, "color": null},
            "e5": {"figure": null, "color": null}, "f5": {"figure": null, "color": null}, "g5": {"figure": null, "color": null}, "h5": {"figure": null, "color": null},
            "a4": {"figure": null, "color": null}, "b4": {"figure": null, "color": null}, "c4": {"figure": null, "color": null}, "d4": {"figure": null, "color": null},
            "e4": {"figure": null, "color": null}, "f4": {"figure": null, "color": null}, "g4": {"figure": null, "color": null}, "h4": {"figure": null, "color": null},
            "a3": {"figure": null, "color": null}, "b3": {"figure": null, "color": null}, "c3": {"figure": null, "color": null}, "d3": {"figure": null, "color": null},
            "e3": {"figure": null, "color": null}, "f3": {"figure": null, "color": null}, "g3": {"figure": null, "color": null}, "h3": {"figure": null, "color": null},
            "a2": {"figure": figures.pawn, "color": "white"}, "b2": {"figure": figures.pawn, "color": "white"}, "c2": {"figure": figures.pawn, "color": "white"}, "d2": {"figure": figures.pawn, "color": "white"},
            "e2": {"figure": figures.pawn, "color": "white"}, "f2": {"figure": figures.pawn, "color": "white"}, "g2": {"figure": figures.pawn, "color": "white"}, "h2": {"figure": figures.pawn, "color": "white"},
            "a1": {"figure": figures.rook, "color": "white"}, "b1": {"figure": figures.knight, "color": "white"}, "c1": {"figure": figures.bishop, "color": "white"}, "d1": {"figure": figures.queen, "color": "white"},
            "e1": {"figure": figures.king, "color": "white"}, "f1": {"figure": figures.bishop, "color": "white"}, "g1": {"figure": figures.knight, "color": "white"}, "h1": {"figure": figures.rook, "color": "white"},
          }
        }
    },
    methods: {
      getFile(pos) {
        return pos[0];
      },
      getRank(pos) {
        return pos[1];
      },
      setLegalMoves(current) {
        var piece = this.position[current];

        if (piece.figure == "♟︎") {
          this.legalMoves.push(this.getFile(current) + (parseInt(this.getRank(current)) + 1));

          var startingRank;

          if (piece.color == "white") {
            startingRank = 2;
          } else {
            startingRank = 7;
          }

          if (this.getRank(current) == startingRank) {
            this.legalMoves.push(this.getFile(current) + (parseInt(this.getRank(current)) + 2));
          }
        }
      },
      storeClick(pos) {
        if (this.start == '') {
            this.start = pos;
        } else {
            this.end = pos;
            this.movePiece(this.start, this.end);
        }
      },
      movePiece(start, end) {
        this.setLegalMoves(start);

        console.log(this.legalMoves);
        console.log(this.end);

        if (this.legalMoves.includes(end)) {
          this.position[end].figure = this.position[start].figure;
          this.position[end].color = this.position[start].color;
          this.position[start].figure = '';
          this.position[start].color = '';
        } else {
          alert("Illegal move!");
        }

        this.start = '';
        this.end = '';
        this.legalMoves = [];
      }
    },
  }
</script>
