<script setup="js">
import axios from 'axios';
</script>

<template>
  <div v-for="player in players">
    {{ player.username }}
  </div>
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
              players: []
          }
      },
      methods: {
          getPlayers() {
            axios.get('http://127.0.0.1:8000/users/', {headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
                .then((response) => {
                    this.players = response.data
                })
          }
      },
      mounted() {
          this.getPlayers()
      }
  }
</script>
