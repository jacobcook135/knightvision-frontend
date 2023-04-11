<template>
  <h1>Play Chess</h1>

  <table class="chess-board">
    <tbody>
      <tr>
          <th></th>
          <th>a</th>
          <th>b</th>
          <th>c</th>
          <th>d</th>
          <th>e</th>
          <th>f</th>
          <th>g</th>
          <th>h</th>
      </tr>
      <tr>
          <th>8</th>
          <td class="light" ref="a8">♜</td>
          <td class="dark" ref="b8">♞</td>
          <td class="light" ref="c8">♝</td>
          <td class="dark" ref="d8">♛</td>
          <td class="light" ref="e8">♚</td>
          <td class="dark" ref="f8">♝</td>
          <td class="light" ref="g8">♞</td>
          <td class="dark" ref="h8">♜</td>
      </tr>
      <tr>
          <th>7</th>
          <td class="dark" ref="a7">♟</td>
          <td class="light" ref="b7">♟</td>
          <td class="dark" ref="c7">♟</td>
          <td class="light" ref="d7">♟</td>
          <td class="dark" ref="e7">♟</td>
          <td class="light" ref="f7">♟</td>
          <td class="dark" ref="g7">♟</td>
          <td class="light" ref="h7">♟</td>
      </tr>
      <tr>
          <th>6</th>
          <td class="light"></td>
          <td class="dark"></td>
          <td class="light"></td>
          <td class="dark"></td>
          <td class="light"></td>
          <td class="dark"></td>
          <td class="light"></td>
          <td class="dark"></td>
      </tr>
      <tr>
          <th>5</th>
          <td class="dark"></td>
          <td class="light"></td>
          <td class="dark"></td>
          <td class="light"></td>
          <td class="dark"></td>
          <td class="light"></td>
          <td class="dark"></td>
          <td class="light"></td>
      </tr>
      <tr>
          <th>4</th>
          <td class="light"></td>
          <td class="dark"></td>
          <td class="light"></td>
          <td class="dark"></td>
          <td class="light"></td>
          <td class="dark"></td>
          <td class="light"></td>
          <td class="dark"></td>
      </tr>
      <tr>
          <th>3</th>
          <td class="dark"></td>
          <td class="light"></td>
          <td class="dark"></td>
          <td class="light"></td>
          <td class="dark"></td>
          <td class="light"></td>
          <td class="dark"></td>
          <td class="light" ref="h3"></td>
      </tr>
      <tr>
          <th>2</th>
          <td class="light" ref="a2">♙</td>
          <td class="dark" ref="b2">♙</td>
          <td class="light" ref="c2">♙</td>
          <td class="dark" ref="d2">♙</td>
          <td class="light" ref="e2">♙</td>
          <td class="dark" ref="f2">♙</td>
          <td class="light" ref="g2">♙</td>
          <td class="dark" ref="h2" @click="movePiece('h2', 'h3')">♙</td>
      </tr>
      <tr>
          <th>1</th>
          <td class="dark" ref="a1">♖</td>
          <td class="light" ref="b1">♘</td>
          <td class="dark" ref="c1">♗</td>
          <td class="light" ref="d1">♕</td>
          <td class="dark" ref="e1">♔</td>
          <td class="light" ref="f1">♗</td>
          <td class="dark" ref="g1">♘</td>
          <td class="light" ref="h1">♖</td>
      </tr>
    </tbody>
  </table>
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

<script>
  export default {
      methods: {
          movePiece(start, end) {
            this.$refs[end].textContent = this.$refs[start].textContent;
            this.$refs[start].textContent = '';
          }
      },
  }
</script>
