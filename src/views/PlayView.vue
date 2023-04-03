<template>
  <div class="play">
    <h1>Play Chess</h1>
  </div>


  <div class="board">
    <div class="piece">Pawn</div>
    <div class="piece">Pawn</div>
    <div class="piece">Pawn</div>
    <div class="piece">Pawn</div>
    <div class="piece">Pawn</div>
    <div class="piece">Pawn</div>
    <div class="piece">Pawn</div>
    <div class="piece">Pawn</div>
  </div>
</template>

<style>
.board {
  grid-column: 1;
}

@media (min-width: 1024px) {
  .play {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
