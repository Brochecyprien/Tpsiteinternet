<template>
    <div class="api-page">
      <ApiComponent />
    </div>
  </template>
  
  <script>
  import ApiComponent from "@/components/ApiComponent.vue";
  
  export default {
    name: "ApiPage",
    components: {
      ApiComponent,
    },
  };
  </script>
  
  <style scoped>
  .api-page {
    padding: 20px;
  }
  </style>
  