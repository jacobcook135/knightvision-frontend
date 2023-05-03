<script setup="js">
import axios from 'axios';
</script>

<template>
  <ul>
    <div v-for="player in players">
      <li><RouterLink :to="{ name: 'player', params: { id: player.id }}">{{ player.username }}</RouterLink></li>
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
