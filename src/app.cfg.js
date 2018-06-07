
/**
 * App config file 
 * this is initial idea
 */
 export const cfg = {
  header:{
    logo:'img/logo.png',
    title:'BookMe 2020'
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
    }],
    info:{
      title: "Hotel Las Palmas",
      stars:{
        nr: 3,
        svgIco:'icon-star',
        cssClass:'hotel-icon-star'
      },
      location:{
        icon:{
          svgIco:'icon-location-pin',
          cssClass:'hotel-location-icon'
        },        
        label:"Albufeira, Portugal",
        lat:'123123',
        lng:'123123'
      },
      rating:{
        base: 560,
        score: 8.6
      }
    },
    desc:[
      `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`,
      `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`
    ],
    features:[
      'Close to beach','Breakfast included', 'Free airport shuttle',
      'Free wifi in all rooms','Air conditioning', 'Pets allowed',
      'We speak your language','Perfect for families'
    ],
    recommendation:{
      label:'Lucy and 3 others recommended this hotel.',
      friends:[{
        src:'img/user-1.jpg', label:"Lucy"
      },{
        src:'img/user-2.jpg', label:"Peter"
      },{
        src:'img/user-3.jpg', label:"Nick"
      },{
        src:'img/user-4.jpg', label:"Tom"
      }]
    },
    reviews:[{
      text:`Here comes review text. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. `,
      person:{
        photo: 'img/user-1.jpg',
        name:'Johnny Doe'
      },
      date: new Date(),
      score: 7.9
    },{
      text:`Here comes review text...Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. `,
      person:{
        photo: 'img/user-2.jpg',
        name:'Lisa Doe'
      },
      date: new Date(),
      score: 7.9
    }]
    
  }
};