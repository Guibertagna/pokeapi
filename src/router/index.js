import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DetailsView from '@/views/DetailsView.vue'


const routes = [
  { path: '/', 
    name: 'Home',
     component: HomeView,
      meta: { title: 'Home' } 
    },
  
    { path: '/details/:id', 
    name: 'Details',
     component: DetailsView, 
     props: true,
     meta: { title: 'Details' } 
    },

]  
const router = createRouter({
  history: createWebHistory(),
  routes,
})



router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next(); 
})


export default router;
