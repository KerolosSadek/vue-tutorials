import Vue from "vue";
import VueRouter from "vue-router";
import Colors from '@/views/Colors'
import Home from "../views/Home.vue";
import CalcPrice from '@/views/CalcPrice.vue'
import ConToSlug from '@/views/ConToSlug'
import Tabs from '@/views/Tabs'
import GredGenerator from '@/views/GredGenerator'
import RepoAxios from '@/views/RepoAxios'
import SHPass from '@/views/SHPass'
import TodoList from '@/views/TodoList'
import TogClass from '@/views/TogClass'
import ValidForm from '@/views/ValidForm'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/colors",
    name: "Colors",
    component:Colors,
  },
  {
    path: "/calc-price",
    name: "CalcPrice",
    component: CalcPrice,
  },
  {
    path:"/con-to-slug",
    name:"ConToSlug",
    component: ConToSlug,
  },
  {
    path:"/tabs",
    name:"Tabs",
    component: Tabs,
  },
  {
    path:"/gred-generator",
    name:"GredGenerator",
    component: GredGenerator,
  },
  {
    path: "/repo-axios",
    name:"RepoAxios",
    component: RepoAxios,
  },
  {
    path:"/sh-pass",
    name:"SHPass",
    component: SHPass,
  },
  {
    path:"/todo-list",
    name:"TodoList",
    component: TodoList,
  },
  {
    path:"/tog-class",
    name:"TogClass",
    component: TogClass,
  },
  {
    path:"/valid-form",
    name:"ValidForm",
    component: ValidForm,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
