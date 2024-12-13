<template>
    <div class="accordion">
      <div v-for="(section, index) in sections" :key="index" class="accordion-section">
        <button class="accordion-header" @click="toggleSection(index)">
          {{ section.title }}
        </button>
        <div v-if="activeSection === index" class="accordion-content">
          <component :is="section.component" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import TableSection from "@/components/TableSection.vue";
  import ChuckNorrisSection from "@/components/ChuckNorrisSection.vue";
  
  export default {
    name: "AccordionComponent",
    data() {
      return {
        sections: [
          { title: "Section 1 : Tableau", component: "TableSection" },
          { title: "Section 2 : API Chuck Norris", component: "ChuckNorrisSection" },
        ],
        activeSection: null,
      };
    },
    components: {
      TableSection,
      ChuckNorrisSection,
    },
    methods: {
      toggleSection(index) {
        this.activeSection = this.activeSection === index ? null : index;
      },
    },
  };
  </script>
  
  <style scoped>
  .accordion {
    border: 1px solid #ccc;
    border-radius: 5px;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .accordion-section {
    margin: 10px 0;
  }
  
  .accordion-header {
    width: 100%;
    padding: 10px;
    text-align: left;
    background-color: #4caf50;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  
  .accordion-header:hover {
    background-color: #45a049;
  }
  
  .accordion-content {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 5px;
    background-color: #f4f4f9;
  }
  </style>
  