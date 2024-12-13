<template>
  <nav class="navigation">
    <router-link 
      v-for="(btn, index) in buttons" 
      :key="index" 
      :to="btn.link"
      class="nav-button"
    >
      {{ btn.label }}
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavigationComponent",
  data() {
    return {
      buttons: [
        { label: "Accueil", link: "/" },
        { label: "Contact", link: "/contact" },
        { label: "API", link: "/api" },
        { label: "Accordéon", link: "/accordion" }, 
        { label: "À propos", link: "/about" },
      ],
    };
  },
};
</script>


<style scoped>
.navigation {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
}

.nav-button {
  text-decoration: none;
  color: #4caf50;
  font-weight: bold;
  padding: 10px 15px;
  border: 1px solid #4caf50;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-button:hover {
  background-color: #4caf50;
  color: white;
}
</style>
