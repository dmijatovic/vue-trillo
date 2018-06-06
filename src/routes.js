/*
const Home = {template:'<h1>Home</h1>'};
const Page1 = {template:'<h1>page 1</h1>'};
const Page2 = {template:'<h1>page 2</h1>'};
const Page3 = {template:'<h1>page 3</h1>'};
*/

import hotelPage from './hotel/hotelPage.vue';
import flightPage from './flight/flightPage.vue';
import carPage from './car/carPage.vue';
import toursPage from './tours/toursPage.vue';

export const routes=[{
  path:'/', component: hotelPage, label:'Hotels',svgIco:'icon-home'
},{
  path:'/flight', component: flightPage, label:'Flight', svgIco:'icon-aircraft-take-off'
},{
  path:'/rent-a-car', component: carPage, label:'Car rental', svgIco:'icon-key'
},{
  path:'/tours', component: toursPage, label:'Tours', svgIco:'icon-map'
}]