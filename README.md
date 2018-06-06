# Trillo - advanced CSS/SCSS training - and Vuejs app

This repo is based on [advanced CSS/SCSS training](https://www.udemy.com/advanced-css-and-sass/) which is then integrated in Vue.js app.

The original github project created by instructor Jonas Schmedtmann [can be found here](https://github.com/jonasschmedtmann/advanced-css-course).

**Note, the project setup in this repo is advanced. It assumes you are familiair with number of technologies (webpack, node, npm, sass, vuejs). If you are new to front-end development and mentioned technologies I recommend following both trainings mentioned above first. That will help your better distinct between web-design tools and front-end framework-technology used and the specific choices/preferences I used in this repo.**

## NPM scripts

After cloning project, run `npm install` to install all dependencies. Then use following scripts to (further) develop or build app.

- `npm run dev:` runs webpack and vue in development mode
- `npm run build:` it will complete solution and store it in dist folder. if dist folder does not exist it will create it. Note! if dist folder exists it will DELETE all content before creating new output.

## Vue components

The difference between `original` SCSS training and this repo is that all `parts` are Vuejs components. In addition, webpack is used for developement (webpack-dev-server) and deployment (production build).

## Lessons learned

This project layout is done using [flexbox layout](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

### CSS variables

CSS variables are usually defined in :root element. The advantage of CSS variable above SCSS variables is that CSS variables are included in compiled CSS code and can be used 'on-the-fly' by JavaScript.

```css
  :root{
    /* primary color CSS variable */
    --color-primary: #fff;
  }
  /* usage with keywoard var(--variable-name) */
  body{
    background-color: var(--color-primary);
  }

```

### Using SVG icons (sprite)

There is a preference to use svg icons above the icon fonts because screen readers seem confused when the icon-fonts are used on the page.

```html
  <!-- use with sprite file
    1. insert svg tag 
    2. inser use tag with xlink:href prop
    3. define location of svg file
    4. define icon in sprite file using # (to reffer to symbol id)
  -->
  <svg class="search-icon">
    <use xlink:href="svg/sprite.svg#icon-magnifying-glass"></use>
  </svg>
```

### CSS selectors

```scss

  //select all direct children
  .parent > * {

  }

  //select all syblling elements with className
  .element ~ .className {

  }

  //select first subceeding sybling element with className
  .element + .className {

  }

```

### currentColor

Used to apply color of the parent to child element. Very usefull in menus with icons.

```
  .menu-item{
    color: red;

    .icon{
      color: curentColor
    }
  }

```


### Flex and margin auto

Very usefull 'feature' when you need to justify elements but also want specific element to only use content width.

```scss

  .parent{
    display: flex;
    justify-content: space-between;

    child1{
      flex:1;
    }
    //this child will fill the space 
    //but with margin
    .child-2{
      margin-right: auto;
    }
  }


```