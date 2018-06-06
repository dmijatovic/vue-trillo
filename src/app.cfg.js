
/**
 * App config file 
 * this is initial idea
 */
 export const cfg = {
  header:{
    logo:'img/logo.png',
    title:'App title'
  },
  user:{
    img:'img/user-9.jpg', 
    name:'Dusan Mijatovic',
    msg:{
      svgIco:'icon-bookmark',
      count:7
    },
    chat:{
      svgIco:'icon-chat',
      count:17
    },
    menu:[]
  },
  svg:{
    //svg icon file
    //sprite holds all icons
    //you refrence using #icon-name
    iconFile:'svg/ico-sprite.svg',
    icoSearch: 'icon-magnifying-glass' 
  },
  menuItems:[{
    link:'#1', label:"Menu item 1", svgIco:"fas fa-home"
  },{
    link:'#2', label:"Menu item 2", svgIco:"fab fa-affiliatetheme"
  },{
    link:'#3', label:"Menu item 3", svgIco:"fas fa-allergies"
  }],
};