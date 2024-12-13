<template>
    <div class="contact-page">
      <h1>Contactez-nous</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Nom :</label>
          <input
            id="name"
            v-model="name"
            type="text"
            required
            placeholder="Votre nom"
          />
        </div>
  
        <div class="form-group">
          <label for="email">Email :</label>
          <input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="Votre email"
          />
        </div>
  
        <div class="form-group">
          <label for="message">Message :</label>
          <textarea
            id="message"
            v-model="message"
            required
            placeholder="Votre message"
          ></textarea>
        </div>
  
        <button type="submit">Envoyer</button>
      </form>
  
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="error-message">
        {{ errorMessage }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ContactPage",
    data() {
      return {
        name: "",
        email: "",
        message: "",
        successMessage: "",
        errorMessage: "",
      };
    },
    methods: {
      async submitForm() {
        if (!this.name || !this.email || !this.message) {
          this.errorMessage = "Veuillez remplir tous les champs.";
          return;
        }
  
        const webhookUrl =
          "https://discord.com/api/webhooks/1309485318969495572/IHGFgyq3BCa0c4heSp4vTMNnAgrJFsqkomH3xjoG_WcZo7ip8MztNOPuHyljpna8nMsb";
  
        const payload = {
          content: `**Nouveau message de contact :**
  - **Nom :** ${this.name}
  - **Email :** ${this.email}
  - **Message :** ${this.message}`,
        };
  
        try {
          const response = await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
  
          if (response.ok) {
            this.successMessage =
              "Votre message a été envoyé avec succès ! Merci de nous avoir contactés.";
            this.errorMessage = "";
            this.name = "";
            this.email = "";
            this.message = "";
          } else {
            throw new Error("Erreur lors de l'envoi du message.");
          }
        } catch (error) {
          this.errorMessage =
            "Une erreur s'est produite. Veuillez réessayer plus tard.";
          this.successMessage = "";
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-page {
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
  textarea {
    width: 100%;
    padding: 10px;
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
  
  .success-message {
    color: #4caf50;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }
  
  .error-message {
    color: #f44336;
    font-weight: bold;
    text-align: center;
    margin-top: 20px;
  }
  </style>
  