import Vue from 'vue'
import VueRouter from 'vue-router'
import PageOne from "../views/PageOne";
import PageTwo from "../views/PageTwo";
import PaymentUpdate from "../views/PaymentUpdate";
import PageFour from "../views/PageFour";
import Index from "../views/Index";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: '图书管理',
    component: Index,
    show: true,
    redirect: '/pageOne',
    children: [
      {
        path: '/pageOne',
        name: '图书查询',
        component: PageOne
      },
      {
        path: '/pageTwo',
        name: '图书增加',
        component: PageTwo
      }
    ]
  },
  {
    path: '/update',
    component: PaymentUpdate,
    show: false
  }
  /*,
  {
    path: '/navigation',
    name: '导航2',
    component: Index,
    children: [
      {
        path: '/pageThree',
        name: '页面3',
        component: PageThree
      },
      {
        path: '/pageFour',
        name: '页面4',
        component: PageFour
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
  }*/
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
