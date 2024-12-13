<template>
    <div>
      <h3>Blague Chuck Norris</h3>
      <p v-if="joke">{{ joke }}</p>
      <p v-else>Chargement...</p>
      <button @click="fetchJoke">Actualiser</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "ChuckNorrisSection",
    data() {
      return {
        joke: "", // Stocke la blague
      };
    },
    methods: {
      async fetchJoke() {
        try {
          const response = await fetch("https://api.chucknorris.io/jokes/random");
          if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
          }
          const result = await response.json();
          this.joke = result.value;
        } catch (error) {
          console.error("Erreur lors de la récupération de la blague :", error);
          this.joke = "Impossible de récupérer une blague. Réessayez plus tard.";
        }
      },
    },
    created() {
      this.fetchJoke(); // Récupère une blague au chargement du composant
    },
  };
  </script>
  
  <style scoped>
  button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 10px 15px;
    margin-top: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  p {
    font-size: 1.2rem;
    margin: 10px 0;
  }
  </style>
  