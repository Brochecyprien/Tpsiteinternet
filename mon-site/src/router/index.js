import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ContactPage from '@/views/ContactPage.vue';
import ApiPage from '@/views/ApiPage.vue';
import AccordionPage from '@/views/AccordionPage.vue'; // Import de la page Accordéon

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/contact', name: 'Contact', component: ContactPage },
  { path: '/api', name: 'Api', component: ApiPage },
  { path: '/accordion', name: 'Accordion', component: AccordionPage }, // Nouvelle route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
