import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Homepage from '@/components/Homepage.vue'
import About from '@/components/About.vue'
import Booking from '@/components/Booking.vue'
import Contact from '@/components/Contact.vue'
import Feedback from '@/components/Feedback.vue'
import Menu from '@/components/Menu.vue'
import Order from '@/components/Order.vue'
import RestaurantList from '@/components/RestaurantList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),     
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/home',
      name: 'home',
      component: Homepage,
    },
    {
      path: '/about',
      name :'about',
      component:About,
    },
    {
      path:'/booking',
      name:'booking',
      component: Booking,
    },
    {
      path:'/contact',
      name:'contact',
      component: Contact,
    },
    {
    path:'/feedback',
    name:'feedback',
    component: Feedback,
    },
    {
      path:'/menu',
      name:'menu',
      component:Menu,
    },
    {
      path:'/order',
      name:'order',
      component:Order,
    },
    {
      path:'/restaurants',
      name:'restaurants',
      component:RestaurantList,
    }
    
  ],
})

export default router
