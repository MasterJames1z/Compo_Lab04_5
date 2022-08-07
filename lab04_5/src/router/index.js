import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventDetails from "../views/event/EventDetail.vue";
import EventAirline from "../views/event/EventAirline.vue";
import EventLayout from "../views/event/EventLayoutView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import NProgress from "nprogress";
import EventService from "../services/EventService";
import GStore from "../store";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: (route) => ({
      page: parseInt(route.query.page) || 1,
      perPage: parseInt(route.query.perPage) || 5,
    }),
  },

  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },

  {
    path: "/",
    name: "PassengerLayout",
    props: true,
    component: EventLayout,
    beforeEnter: (to) => {
      return (
        EventService.getPassenger(to.params.id)
          .then((response) => {
            //Still need to set the data here
            GStore.passenger = response.data;
          })
          .catch((error) => {
            if (error.response && error.response.status == 404) {
              return {
                name: "404Resource",
                params: { resource: "passenger" },
              };
            } else {
              return { name: "NetworkError" };
            }
          }),
        EventService.getAirline(to.params.id) //Return and params.id
          .then((response) => {
            //Still need to set the data here
            GStore.airline = response.data;
          })
          .catch((error) => {
            if (error.response && error.response.status == 404) {
              return {
                name: "404Resource",
                params: { resource: "passenger" },
              };
            } else {
              return { name: "NetworkError" };
            }
          })
      );
    },
    children: [
      {
        path: "passenger/:id",
        name: "EventDetail",
        component: EventDetails,
        props: true,
      },
      {
        path: "airline/:id",
        name: "airline",
        component: EventAirline,
        props: true,
      },
    ],
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFoundView,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFoundView,
  },
  // {
  //   path: "/network-error",
  //   name: "NetworkError",
  //   component: NetWorkErrorView,
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach(() => {
  NProgress.start();
});
router.afterEach(() => {
  NProgress.done();
});
export default router;
