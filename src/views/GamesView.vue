<script setup="js">
import axios from 'axios';
</script>

<template>
  <ul>
    <div v-for="game in games">
      <li><RouterLink :to="{ id: 'id', params: { id: game.id }}">{{ game.pgn }}</RouterLink></li>
    </div>
  </ul>
</template>

<style>

@media (min-width: 1024px) {
  .players {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script>
  export default {
      data() {
          return {
              games: []
          }
      },
      methods: {
          getGames() {
            axios.get('http://127.0.0.1:8000/api/games/', {headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
                .then((response) => {
                    this.games = response.data
                })
          }
      },
      mounted() {
          this.getGames()
      }
  }
</script>
