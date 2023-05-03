<script setup="js">
import axios from 'axios';

</script>

<template>
  <h2>Player Info</h2>
  <div>Username: {{ player.username }}</div>
  <div>Email: {{ player.email }}</div>
</template>

<script>
  export default {
      data() {
          return {
              player: Object
          }
      },
      methods: {
          getPlayer() {
            axios.get(`http://127.0.0.1:8000/users/${this.$route.params.id}/`,
              {headers: {Accept: 'application/json', 'Content-Type': 'application/json'}})
              .then((response) => {
                  this.player = response.data
              })
          }
      },
      mounted() {
          this.getPlayer()
      }
  }
</script>
