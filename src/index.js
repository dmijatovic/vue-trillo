//3rd party
import Vue from 'vue';
//import VueRouter from 'vue-router';
//main app
import App from './app.vue';

//main - shared - styles
import './scss/main.scss';

/*
//use router
Vue.use(VueRouter);
//import routes
import { routes } from './routes';
//add routes to router
const router = new VueRouter({
  routes: routes
});
*/

/*
// SYSTEM COMPONENTS
import pageTitle from './system/pageTitle.vue';
import mainNav from './system/mainNav.vue';
import pageFooter from './system/pageFooter.vue';
import popupImg from './system/popupImg.vue';

//page title
Vue.component('page-title',pageTitle);
Vue.component('page-footer', pageFooter);
Vue.component('main-nav',mainNav);
Vue.component('popup-img', popupImg);
*/

//create app
const app = new Vue({
  //add to this element
  el:'#app',
  //use router
  //router,
  //render app
  render(e){
    return e(App);
  }
});
