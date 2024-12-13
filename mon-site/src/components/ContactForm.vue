<template>
    <form @submit.prevent="sendMessage">
      <input v-model="name" placeholder="Nom" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <textarea v-model="message" placeholder="Message" required></textarea>
      <button type="submit">Envoyer</button>
    </form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      async sendMessage() {
        const webhookUrl = 'https://discord.com/api/webhooks/1309485318969495572/...';
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `Nom : ${this.name}, Email : ${this.email}, Message : ${this.message}`
          })
        });
        alert('Message envoyé !');
      }
    }
  };
  </script>
  