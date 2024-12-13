<template>
  <div id="app">
    <NavigationComponent />
    <router-view />
  </div>
</template>

<script>
import NavigationComponent from '@/components/NavigationComponent.vue';

export default {
  name: "App",
  components: {
    NavigationComponent,
  },
};
</script>

<style>
/* Styles globaux */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9; /* Fond légèrement gris */
  color: #333; /* Texte gris foncé */
}

#app {
  text-align: center;
  padding: 20px;
}

h1, h2, h3, h4, h5, h6 {
  color: #4CAF50; /* Vert élégant */
  margin: 10px 0;
}

a {
  color: #4CAF50;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

button {
  background-color: #4CAF50; /* Vert élégant */
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 10px 0;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #45a049; /* Légèrement plus foncé au survol */
}

input, textarea, select {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

input:focus, textarea:focus, select:focus {
  border-color: #4CAF50; /* Vert élégant au focus */
  outline: none;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff10;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Ombre légère */
  border-radius: 10px;
}

footer {
  margin-top: 20px;
  font-size: 0.9rem;
  color: #777;
}

footer a {
  color: #4CAF50;
}
</style>
