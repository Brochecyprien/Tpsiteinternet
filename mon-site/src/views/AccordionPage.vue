<template>
    <div class="accordion-page">
      <AccordionComponent />
    </div>
  </template>
  
  <script>
  import AccordionComponent from "@/components/AccordionComponent.vue";
  
  export default {
    name: "AccordionPage",
    components: {
      AccordionComponent,
    },
  };
  </script>
  
  <style scoped>
  .accordion-page {
    padding: 20px;
  }
  </style>
  