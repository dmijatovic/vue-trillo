//3rd party
import Vue from 'vue';
import VueRouter from 'vue-router';
//main app
import App from './app.vue';

//main - shared - styles
import './scss/main.scss';

//shared components
import svgIcon from './system/svgIcon.vue';

Vue.component('svg-icon', svgIcon);


//use router
Vue.use(VueRouter);
//import routes
import { routes } from './routes';
//add routes to router
const router = new VueRouter({
  routes: routes
});

//create app
const app = new Vue({
  //add to this element
  el:'#app',
  //use router
  router,
  //render app
  render(e){
    return e(App);
  }
});
