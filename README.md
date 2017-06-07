<p align="center">
  <h1 align="center">The <a href="https://www.getspeed100.com/" target="_blank">Getspeed100.com</a> theme</h1>
</p>
<br><br>

## Visit it here:
https://www.getspeed100.com/

## Start your local environment

Make sure [npm](https://www.npmjs.com/) is installed:

```
## Install all frontend development related dependencies.
npm install

## This will start up a proxy for the render service on :4200.
gulp
```

## Folder structure

- `/source/`
  The place where you should put all your scripts, styles source code.
- `/views/`
  All your layouts and components at one space - if you add a new or change an existing [Liquid](https://help.shopify.com/themes/liquid) component (`.liquid`)
  the gulp build will trigger an instant reload for you in the browser - also each component is a representation of a storyblok component.
  If you create a headline component in storyblok - make sure to create a `headline.liquid` as well - so this application knows which component
  to render.

