<template>
  <div class="text-image">
    <div class="text-box">
      <p>{{ text }}</p>
    </div>
    <div class="image-box">
      <img v-if="resolvedImageUrl" :src="resolvedImageUrl" :alt="text" />
      <p v-else>Image indisponible</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextImageComponent",
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    resolvedImageUrl() {
      try {
        // Résout dynamiquement le chemin de l'image avec Webpack
        return require(`${this.imageUrl}`);
      } catch (error) {
        console.error(`Erreur lors du chargement de l'image : ${this.imageUrl}`, error);
        return null;
      }
    },
  },
};
</script>

<style scoped>
.text-image {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-box {
  flex: 1;
  margin-right: 20px;
  text-align: left;
}

.image-box {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-box img {
  max-width: 100%;
  max-height: 200px;
  border-radius: 5px;
}
</style>
