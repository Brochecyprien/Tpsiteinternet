<template>
  <div class="api-component">
    <h1>Tester une API</h1>
    <form @submit.prevent="callApi">
      <div class="form-group">
        <label for="api-url">URL de l'API :</label>
        <input
          id="api-url"
          v-model="apiUrl"
          type="text"
          required
          placeholder="https://example.com/api"
        />
      </div>

      <div class="form-group">
        <label for="method">Méthode :</label>
        <select id="method" v-model="method">
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </div>

      <div class="form-group">
        <label for="parameters">Paramètres (JSON) :</label>
        <textarea
          id="parameters"
          v-model="parameters"
          placeholder='{ "key": "value" }'
          :disabled="method === 'GET'"
        ></textarea>
      </div>

      <button type="submit">Envoyer</button>
    </form>

    <div v-if="apiResponse" class="response">
      <h2>Résultat :</h2>
      <pre>{{ apiResponse }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApiComponent",
  data() {
    return {
      apiUrl: "",
      method: "GET",
      parameters: "",
      apiResponse: null,
    };
  },
  methods: {
    async callApi() {
      try {
        const options = {
          method: this.method,
          headers: { "Content-Type": "application/json" },
        };

        // Ajouter le body si la méthode est POST, PUT, ou DELETE
        if (this.method !== "GET" && this.parameters) {
          options.body = this.parameters;
        }

        const response = await fetch(this.apiUrl, options);
        const result = await response.json();
        this.apiResponse = JSON.stringify(result, null, 2);
      } catch (error) {
        this.apiResponse = `Erreur : ${error.message}`;
      }
    },
  },
};
</script>

<style scoped>
.api-component {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

h1 {
  text-align: center;
  color: #4caf50;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

button {
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 100%;
}

button:hover {
  background-color: #45a049;
}

.response {
  margin-top: 20px;
  background-color: #f4f4f9;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
