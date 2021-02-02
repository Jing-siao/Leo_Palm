import home from './pages/home.js';
import signUp from './pages/signUp.js';
import login from './pages/login.js';
import sidebar from './sidebar.js';
import create from './pages/create.js';
import verify from './pages/verify.js';
import info from './pages/info.js';
import identify from './pages/identify.js';
import management from './pages/management.js';
import search from './pages/search.js';

const routes = [
  {
    name: 'home',
    path: '/',
    component: home
  },
  {
    name: 'signUp',
    path: '/signUp',
    component: signUp
  },
  {
    name: 'login',
    path: '/login',
    component: login
  },
  {
    name: 'create',
    path: '/create',
    components: {
      default: create,
      sidebar
    },
  },
  {
    name: 'verify',
    path: '/verify',
    components: {
      default: verify,
      sidebar
    },
    children: [
      {
        path: ':userId',
        component: info
      }
    ],
  },
  {
    name: 'identify',
    path: '/identify',
    components: {
      default: identify,
      sidebar
    },
  },
  {
    name: 'management',
    path: '/management',
    components: {
      default: management,
      sidebar
    },
  },
  {
    name: 'search',
    path: '/search',
    components: {
      default: search,
      sidebar
    },
  },
]

const router = new VueRouter({
  routes
})
export default router;