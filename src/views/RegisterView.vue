<script setup="js">
import axios from 'axios';
</script>

<template>
  <h2>Register a new user</h2>

  <form @submit.prevent="createPlayer">
    <div>
      <label>
        Username
        <input type="text" v-model="username" />
      </label>
    </div>
    <div>
      <label>
        Email address
        <input type="email" v-model="email" />
      </label>
    </div>
    
    <button type="submit">Sign up</button>
  </form>

  <h2>Created player</h2>
  <div>Username: {{ player.username }}</div>
  <div>Email: {{ player.email }}</div>
</template>

<style>

</style>

<script>
  export default {
      data() {
          return {
              username: "",
              email: "",
              player: Object
          }
      },
      methods: {
          createPlayer() {
            axios.post('http://127.0.0.1:8000/users/', {
              username: this.username,
              email: this.email,
              is_staff: false,
            })
                .then((response) => {
                    console.log(response);
                    this.player = response.data
                })
          }
      },
      mounted() {
          this.createPlayer()
      }
  }
</script>
