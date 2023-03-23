import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SolaireView from '../views/SolaireView.vue'
import EolienView from '../views/EolienView.vue'
import MentionsLegales from '../views/MentionsLegales.vue'
import Error404 from '../views/Error404.vue'

const HOME_ROUTE = '/'
const ABOUT_ROUTE = '/about'
const SOLAIRE_ROUTE = '/solaire'
const EOLIEN_ROUTE = '/eolien'
const MENTIONS_LEGALES = '/mentionsLegales'

const routes = [
  {
    path: HOME_ROUTE,
    name: 'home',
    component: HomeView,
    keywords: 'accueil, page d\'accueil, bienvenue'
  },
  {
    path: ABOUT_ROUTE,
    name: 'about',
    component: AboutView,
    keywords: 'à propos, informations, qui sommes-nous'
  },
  {
    path: SOLAIRE_ROUTE,
    name: 'solaire',
    component: SolaireView,
    keywords: 'énergie solaire, photovoltaïque, production d\'électricité'
  },
  {
    path: EOLIEN_ROUTE,
    name: 'eolien',
    component: EolienView,
    keywords: 'énergie éolienne, éoliennes, production d\'électricité'
  },
  {
    path: MENTIONS_LEGALES,
    name: 'mentions_legales',
    component: MentionsLegales,
    keywords: 'Mentions légales, page des informations légales '
  },
  {
    path: '/:pathMatch(.*)',
    name: 'error404',
    component: Error404,
    keywords: 'erreur 404, page introuvable, erreur de navigation'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

function generateSitemap() {
  return `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
      .filter(route => route.path !== '/:pathMatch(.*)')
      .map(route => {
        return `
            <url>
              <loc>${route.path}</loc>
              <keywords>${route.keywords}</keywords>
            </url>
          `
      })
      .join('')}
    </urlset>
  `
}

export default router
export { generateSitemap }
