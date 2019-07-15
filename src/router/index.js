import Vue from 'vue';
import Router from 'vue-router';
// import App from '../App.vue'
import Index from '../pages/index';
import CharactersRoutes from '../pages/characters/routes';
import EpisodesRoutes from '../pages/episodes/routes';
import SuggestionsRoutes from '../pages/suggestions/routes';

// Application routes

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      menu: false,
    },
    ...CharactersRoutes,
    ...EpisodesRoutes,
    ...SuggestionsRoutes,
  ],
});

export default router;
