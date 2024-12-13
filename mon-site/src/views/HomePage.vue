<template>
  <div class="home-page">
    <!-- Première section : texte et image -->
    <div class="section">
      <TextImageComponent
        imageUrl="@/assets/image1.jpg"
        text="Bienvenue sur notre site !"
      />
    </div>

    <!-- Deuxième section : texte et image -->
    <div class="section">
      <TextImageComponent
        imageUrl="@assets/image2.jpg"
        text="Découvrez nos services et fonctionnalités."
      />
    </div>
  </div>
</template>s

<script>
import TextImageComponent from '@/components/TextImageComponent.vue';

export default {
  name: "HomePage",
  components: {
    TextImageComponent,
  },
};
</script>

<style scoped>
.home-page {
  padding: 20px;
  background-color: #f4f4f97a; /* Fond légèrement gris */
}

.section {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.459);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
