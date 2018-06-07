
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
  hotel:{
    gallery:[{
      src:'img/hotel-1.jpg',
      label:'Image 1. Hotel Spledid at night'
    },{
      src:'img/hotel-2.jpg',
      label:'Image 2. Our marvelous swimming pool'
    },{
      src:'img/hotel-3.jpg',
      label:'Image 3. Splendid in the winter'
    }]
  }
};