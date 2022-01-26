import { RouteRecordRaw } from "vue-router";
import {CoachDetail, CoachRegister, CoachesList}  from './pages/coaches/index';
import {ContactCoach, RequestReceived} from './pages/requests';
import NotFound from './pages/NotFound.vue'

export const routes = () : RouteRecordRaw[] => {
  return [
    { path: "/", redirect: "/coaches" },

    { path: "/coaches", component: CoachesList },
    { path: "/coaches/:id", component: CoachDetail, children:[
        {path:'contact', component:ContactCoach}
    ] },
    { path: "/register", component: CoachRegister },
    { path: "/requests", component: RequestReceived },
    { path: "/:notFound(.*)", component: NotFound },
  ];
};
