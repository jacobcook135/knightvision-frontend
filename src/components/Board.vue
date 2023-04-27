<template>
  <div class="board">
    <div>
      <Square color="light" pos="a8" :state="position['a8']" :legalMoves.sync="legalMoves" @click="storeClick('a8')"/>
      <Square color="dark" pos="b8" :state="position['b8']" :legalMoves.sync="legalMoves" @click="storeClick('b8')"/>
      <Square color="light" pos="c8" :state="position['c8']" :legalMoves.sync="legalMoves" @click="storeClick('c8')"/>
      <Square color="dark" pos="d8" :state="position['d8']" :legalMoves.sync="legalMoves" @click="storeClick('d8')"/>
      <Square color="light" pos="e8" :state="position['e8']" :legalMoves.sync="legalMoves" @click="storeClick('e8')"/>
      <Square color="dark" pos="f8" :state="position['f8']" :legalMoves.sync="legalMoves" @click="storeClick('f8')"/>
      <Square color="light" pos="g8" :state="position['g8']" :legalMoves.sync="legalMoves" @click="storeClick('g8')"/>
      <Square color="dark" pos="h8" :state="position['h8']" :legalMoves.sync="legalMoves" @click="storeClick('h8')"/>
    </div>

    <div>
      <Square color="dark" pos="a7" :state="position['a7']" :legalMoves.sync="legalMoves" @click="storeClick('a7')"/>
      <Square color="light" pos="b7" :state="position['b7']" :legalMoves.sync="legalMoves" @click="storeClick('b7')"/>
      <Square color="dark" pos="c7" :state="position['c7']" :legalMoves.sync="legalMoves" @click="storeClick('c7')"/>
      <Square color="light" pos="d7" :state="position['d7']" :legalMoves.sync="legalMoves" @click="storeClick('d7')"/>
      <Square color="dark" pos="e7" :state="position['e7']" :legalMoves.sync="legalMoves" @click="storeClick('e7')"/>
      <Square color="light" pos="f7" :state="position['f7']" :legalMoves.sync="legalMoves" @click="storeClick('f7')"/>
      <Square color="dark" pos="g7" :state="position['g7']" :legalMoves.sync="legalMoves" @click="storeClick('g7')"/>
      <Square color="light" pos="h7" :state="position['h7']" :legalMoves.sync="legalMoves" @click="storeClick('h7')"/>
    </div>

    <div>
      <Square color="light" pos="a6" :state="position['a6']" :legalMoves.sync="legalMoves" @click="storeClick('a6')"/>
      <Square color="dark" pos="b6" :state="position['b6']" :legalMoves.sync="legalMoves" @click="storeClick('b6')"/>
      <Square color="light" pos="c6" :state="position['c6']" :legalMoves.sync="legalMoves" @click="storeClick('c6')"/>
      <Square color="dark" pos="d6" :state="position['d6']" :legalMoves.sync="legalMoves" @click="storeClick('d6')"/>
      <Square color="light" pos="e6" :state="position['e6']" :legalMoves.sync="legalMoves" @click="storeClick('e6')"/>
      <Square color="dark" pos="f6" :state="position['f6']" :legalMoves.sync="legalMoves" @click="storeClick('f6')"/>
      <Square color="light" pos="g6" :state="position['g6']" :legalMoves.sync="legalMoves" @click="storeClick('g6')"/>
      <Square color="dark" pos="h6" :state="position['h6']" :legalMoves.sync="legalMoves" @click="storeClick('h6')"/>
    </div>

    <div>
      <Square color="dark" pos="a5" :state="position['a5']" :legalMoves.sync="legalMoves" @click="storeClick('a5')"/>
      <Square color="light" pos="b5" :state="position['b5']" :legalMoves.sync="legalMoves" @click="storeClick('b5')"/>
      <Square color="dark" pos="c5" :state="position['c5']" :legalMoves.sync="legalMoves" @click="storeClick('c5')"/>
      <Square color="light" pos="d5" :state="position['d5']" :legalMoves.sync="legalMoves" @click="storeClick('d5')"/>
      <Square color="dark" pos="e5" :state="position['e5']" :legalMoves.sync="legalMoves" @click="storeClick('e5')"/>
      <Square color="light" pos="f5" :state="position['f5']" :legalMoves.sync="legalMoves" @click="storeClick('f5')"/>
      <Square color="dark" pos="g5" :state="position['g5']" :legalMoves.sync="legalMoves" @click="storeClick('g5')"/>
      <Square color="light" pos="h5" :state="position['h5']" :legalMoves.sync="legalMoves" @click="storeClick('h5')"/>
    </div>

    <div>
      <Square color="light" pos="a4" :state="position['a4']" :legalMoves.sync="legalMoves" @click="storeClick('a4')"/>
      <Square color="dark" pos="b4" :state="position['b4']" :legalMoves.sync="legalMoves" @click="storeClick('b4')"/>
      <Square color="light" pos="c4" :state="position['c4']" :legalMoves.sync="legalMoves" @click="storeClick('c4')"/>
      <Square color="dark" pos="d4" :state="position['d4']" :legalMoves.sync="legalMoves" @click="storeClick('d4')"/>
      <Square color="light" pos="e4" :state="position['e4']" :legalMoves.sync="legalMoves" @click="storeClick('e4')"/>
      <Square color="dark" pos="f4" :state="position['f4']" :legalMoves.sync="legalMoves" @click="storeClick('f4')"/>
      <Square color="light" pos="g4" :state="position['g4']" :legalMoves.sync="legalMoves" @click="storeClick('g4')"/>
      <Square color="dark" pos="h4" :state="position['h4']" :legalMoves.sync="legalMoves" @click="storeClick('h4')"/>
    </div>

    <div>
      <Square color="dark" pos="a3" :state="position['a3']" :legalMoves.sync="legalMoves" @click="storeClick('a3')"/>
      <Square color="light" pos="b3" :state="position['b3']" :legalMoves.sync="legalMoves" @click="storeClick('b3')"/>
      <Square color="dark" pos="c3" :state="position['c3']" :legalMoves.sync="legalMoves" @click="storeClick('c3')"/>
      <Square color="light" pos="d3" :state="position['d3']" :legalMoves.sync="legalMoves" @click="storeClick('d3')"/>
      <Square color="dark" pos="e3" :state="position['e3']" :legalMoves.sync="legalMoves" @click="storeClick('e3')"/>
      <Square color="light" pos="f3" :state="position['f3']" :legalMoves.sync="legalMoves" @click="storeClick('f3')"/>
      <Square color="dark" pos="g3" :state="position['g3']" :legalMoves.sync="legalMoves" @click="storeClick('g3')"/>
      <Square color="light" pos="h3" :state="position['h3']" :legalMoves.sync="legalMoves" @click="storeClick('h3')"/>
    </div>

    <div>
      <Square color="light" pos="a2" :state="position['a2']" :legalMoves.sync="legalMoves" @click="storeClick('a2')"/>
      <Square color="dark" pos="b2" :state="position['b2']" :legalMoves.sync="legalMoves" @click="storeClick('b2')"/>
      <Square color="light" pos="c2" :state="position['c2']" :legalMoves.sync="legalMoves" @click="storeClick('c2')"/>
      <Square color="dark" pos="d2" :state="position['d2']" :legalMoves.sync="legalMoves" @click="storeClick('d2')"/>
      <Square color="light" pos="e2" :state="position['e2']" :legalMoves.sync="legalMoves" @click="storeClick('e2')"/>
      <Square color="dark" pos="f2" :state="position['f2']" :legalMoves.sync="legalMoves" @click="storeClick('f2')"/>
      <Square color="light" pos="g2" :state="position['g2']" :legalMoves.sync="legalMoves" @click="storeClick('g2')"/>
      <Square color="dark" pos="h2" :state="position['h2']" :legalMoves.sync="legalMoves" @click="storeClick('h2')"/>
    </div>

    <div>
      <Square color="dark" pos="a1" :state="position['a1']" :legalMoves.sync="legalMoves" @click="storeClick('a1')"/>
      <Square color="light" pos="b1" :state="position['b1']" :legalMoves.sync="legalMoves" @click="storeClick('b1')"/>
      <Square color="dark" pos="c1" :state="position['c1']" :legalMoves.sync="legalMoves" @click="storeClick('c1')"/>
      <Square color="light" pos="d1" :state="position['d1']" :legalMoves.sync="legalMoves" @click="storeClick('d1')"/>
      <Square color="dark" pos="e1" :state="position['e1']" :legalMoves.sync="legalMoves" @click="storeClick('e1')"/>
      <Square color="light" pos="f1" :state="position['f1']" :legalMoves.sync="legalMoves" @click="storeClick('f1')"/>
      <Square color="dark" pos="g1" :state="position['g1']" :legalMoves.sync="legalMoves" @click="storeClick('g1')"/>
      <Square color="light" pos="h1" :state="position['h1']" :legalMoves.sync="legalMoves" @click="storeClick('h1')"/>
    </div>
  </div>
</template>

<style>
  .board { border-spacing: 0; border-collapse: collapse; }
</style>

<script lang="js">
  import Square from '../components/Square.vue';

  export default {
    name: 'Board',
    components: { Square },
    data() {
        return {
          start: '',
          end: '',
          legalMoves: [],
          position: {
            "a8": {"figure": "rook", "color": "black"}, "b8": {"figure": "knight", "color": "black"}, "c8": {"figure": "bishop", "color": "black"}, "d8": {"figure": "queen", "color": "black"},
            "e8": {"figure": "king", "color": "black"}, "f8": {"figure": "bishop", "color": "black"}, "g8": {"figure": "knight", "color": "black"}, "h8": {"figure": "rook", "color": "black"},
            "a7": {"figure": "pawn", "color": "black"}, "b7": {"figure": "pawn", "color": "black"}, "c7": {"figure": "pawn", "color": "black"}, "d7": {"figure": "pawn", "color": "black"},
            "e7": {"figure": "pawn", "color": "black"}, "f7": {"figure": "pawn", "color": "black"}, "g7": {"figure": "pawn", "color": "black"}, "h7": {"figure": "pawn", "color": "black"},
            "a6": {"figure": null, "color": null}, "b6": {"figure": null, "color": null}, "c6": {"figure": null, "color": null},  "d6": {"figure": null, "color": null},
            "e6": {"figure": null, "color": null}, "f6": {"figure": null, "color": null}, "g6": {"figure": null, "color": null}, "h6": {"figure": null, "color": null},
            "a5": {"figure": null, "color": null}, "b5": {"figure": null, "color": null}, "c5": {"figure": null, "color": null}, "d5": {"figure": null, "color": null},
            "e5": {"figure": null, "color": null}, "f5": {"figure": null, "color": null}, "g5": {"figure": null, "color": null}, "h5": {"figure": null, "color": null},
            "a4": {"figure": null, "color": null}, "b4": {"figure": null, "color": null}, "c4": {"figure": null, "color": null}, "d4": {"figure": null, "color": null},
            "e4": {"figure": null, "color": null}, "f4": {"figure": null, "color": null}, "g4": {"figure": null, "color": null}, "h4": {"figure": null, "color": null},
            "a3": {"figure": null, "color": null}, "b3": {"figure": null, "color": null}, "c3": {"figure": null, "color": null}, "d3": {"figure": null, "color": null},
            "e3": {"figure": null, "color": null}, "f3": {"figure": null, "color": null}, "g3": {"figure": null, "color": null}, "h3": {"figure": null, "color": null},
            "a2": {"figure": "pawn", "color": "white"}, "b2": {"figure": "pawn", "color": "white"}, "c2": {"figure": "pawn", "color": "white"}, "d2": {"figure": "pawn", "color": "white"},
            "e2": {"figure": "pawn", "color": "white"}, "f2": {"figure": "pawn", "color": "white"}, "g2": {"figure": "pawn", "color": "white"}, "h2": {"figure": "pawn", "color": "white"},
            "a1": {"figure": "rook", "color": "white"}, "b1": {"figure": "knight", "color": "white"}, "c1": {"figure": "bishop", "color": "white"}, "d1": {"figure": "queen", "color": "white"},
            "e1": {"figure": "king", "color": "white"}, "f1": {"figure": "bishop", "color": "white"}, "g1": {"figure": "knight", "color": "white"}, "h1": {"figure": "rook", "color": "white"},
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
      moveRank(current, number) {
        return this.getFile(current) + (parseInt(this.getRank(current)) + number);
      },
      moveFile(current, number) {
        return (this.getFile(current) + number) + (this.getRank(current));
      },
      getDiagonalMoves(current, number) {
        var possibleMoves = [];

        possibleMoves.push(this.moveFile(this.moveRank(current, number), number));
        possibleMoves.push(this.moveFile(this.moveRank(current, number), -number));
        possibleMoves.push(this.moveFile(this.moveRank(current, -number), number));
        possibleMoves.push(this.moveFile(this.moveRank(current, -number), -number));
      
        moves.push()

      },
      getPawnMoves(piece, current) {
        var startingRank;
        var legalMoves = [];
        
        if (piece.color == "white") {
          startingRank = 2;

          if (this.position[this.moveRank(current, 1)].figure == null)
            legalMoves.push(this.moveRank(current, 1));

          if (this.getRank(current) == startingRank && this.position[this.moveRank(current, 2)].figure == null)
            legalMoves.push(this.moveRank(current, 2));
        } else {
          startingRank = 7;

          if (this.position[this.moveRank(current, -1)].figure == null)
            legalMoves.push(this.moveRank(current, -1));
    

          if (this.getRank(current) == startingRank && this.position[this.moveRank(current, -2)].figure == null)
            legalMoves.push(this.moveRank(current, -2));
        }
       
        this.legalMoves.push(getDiagonalMoves(current, 1));

        return legalMoves;
      },
      setLegalMoves(current) {
        var piece = this.position[current];

        switch (piece.figure) {
          case "pawn":
            this.legalMoves = this.getPawnMoves(piece, current);
            break;
          default:
            break;
        }
      },
      storeClick(pos) {
        if (this.start == '') {
          this.setLegalMoves(pos);
          this.start = pos;
        } else if (pos == this.start) {
          this.start = '';
          this.legalMoves = [];
        } else {
          this.end = pos;
          this.movePiece(this.start, this.end);
        }
      },
      movePiece(start, end) {
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
