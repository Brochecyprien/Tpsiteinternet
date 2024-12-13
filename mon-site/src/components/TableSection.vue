<template>
    <div>
      <h3>Tableau des données</h3>
      <table border="1">
        <thead>
          <tr>
            <th v-for="(key, index) in tableHeaders" :key="index">
              {{ key.toUpperCase() }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in data" :key="index">
            <td v-for="(value, key) in item" :key="key">
              {{ value.toString().toUpperCase() }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "TableSection",
    data() {
      return {
        data: [],
      };
    },
    computed: {
      tableHeaders() {
        return this.data.length > 0 ? Object.keys(this.data[0]) : [];
      },
    },
    async created() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await response.json();
        this.data = result.slice(0, 5); // Limite à 5 résultats pour l'affichage
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    },
  };
  </script>
  