# Interactive Web Development: Chanpter 3 (Diving Deeper Css)

## Ch3- Diving deeper into css

### Web Safe Fonts Refresher

We have some basics `font-family`

```css
/* Some Web safe fonts:

- Serif fonts:
Georgia, serif;
"Palatino Linotype", "Book Antiqua", Palatino, serif;
"Times New Roman", Times, serif

- Sans-Serif Fonts
Arial, Helvetica, sans-serif;
"Arial Black", Gadget, sans-serif;
"Comic Sans MS", cursive, sans-serif;
Impact, Charcoal, sans-serif;

- Monospace Fonts
"Courier New", Courier, monospace;
"Lucida Console", Monaco, monospace;
*/
```

### Google font 1,2 and 3

we will need to seek for the [google fonts](https://fonts.google.com/)

> Make sure look at the load time of these fonts:

- green = good
- yellow = not bad
- red = not good

why? It will impact on the rendering time of your web page.

here is on of the way to use it:

```html
<head>
  <title>Chapter 3 CSS Tutorial - Lesson 2</title>
  <meta charset="UTF-8" />
  <!-- google font must be place before our structure-ch3.css-->
  <!-- Always-->
  <link
    href="http://fonts.googleapis.com/css?family=Shadows+Into+Light"
    rel="stylesheet"
    type="text/css"
  />
  <link href="structure-ch3.css" rel="stylesheet" />

  <style type="text/css">
    p .italic {
      font-style: italic;
      font-weight: bold;
    }
  </style>
</head>
```

Now we can use it on our `structure-ch3.css`

```css
body {
  font-size: 16px;
  font-family: monospace;
  color: #000;
  background-color: #fff;
}

/* we use the google font here*/
h1,
h2,
h3 {
  font-family: "Shadows Into Light", cursive;
  max-width: 500px;
}

h1 {
  font-weight: bold;
  font-size: 2em;
  text-transform: capitalize;
}

h2 {
  font-weight: bold;
  text-align: center;
}

h3 {
  font-weight: bold;
  text-align: left; /* remove since left is the default*/
  margin-top: 30px;
}
```

The browser process the codes in the page top to bottom.

- we load the google font before we load our `.css` files
- next we use the font inside the `.css` files.

Font help set the mood of the page

> Changes made in the browser developer tools are not permanent.

`@font face` rule

With the [`@font-face`](https://www.w3schools.com/cssref/css3_pr_font-face_rule.asp) rule, web designers do not have to use one of the "web-safe" fonts anymore.

In the @font-face rule you must first define a name for the font (e.g. myFirstFont), and then point to the font file.

```css
@font-face {
  font-family: myFirstFont;
  src: url(sansation_light.woff);
}
```

This is what, under the hood, google did for us. And we can easily use the first way that we see earlier.

### Browser Developer tools review

- `max-width` = maximum width
- `min-width` = minimum width

```css
#centerDoc {
  position: absolute;
  z-index: 15;
  padding: 0 0 20px 20px;
  /*top right bottom left*/
  margin-top: 50px;
  margin-left: 235px;
  width: 80%;
  max-width: 1200px;
  min-width: 500px;
}
```

we see things i already know.

### BAckground color 1, 2

```css
body {
  font-size: 16px;
  font-family: monospace;
  color: #000;
  background-color: #fff;
}
```

We can use the help of our browser developer tools to test out the color of our web application.

> In the developer tools = shift + click : chage the color format.

### Cascade in CSS

Way to add css

- inside a tag

```html
<p class="swengen" style="color:green">
  Studioweb is an interactive video question and answer training system. We
  focus on teaching the key basic concepts and techniques of web design and web
  programming.
</p>
```

- style block

```html
<style type="text/css">
  p .italic {
    font-style: italic;
    font-weight: bold;
  }

  body {
    background-image: url("images/tile.jpg");
    background-repeat: repeat-y;
    background-position: right top;
    background-attachment: fixed;
  }
</style>
```

- link to an external stylesheet

```html
<head>
  <link href="structure-ch3-l6.css" rel="stylesheet" />
</head>
```

1. A style applied to a tag will always win
2. class selectors overrides tag selectors

> last code or the code that is the most specific wins

### Background-image

```css
body {
  background: #ffffff url("images/tile.jpg") no-repeat right top fixed;
}
/* or */
body {
  background-image: url("images/tile.jpg");
  background-repeat: repeat-y;
  background-position: right top;
  background-attachment: fixed;
}
```

`repeat-y` : top to bottom

`repeat-x` : accross (left to right), we have the `no-repeat` value.

`background-attachment: fixed;` : the background image is fixed in place even when you scroll. The default position is in the middle.

### Background image cover

```css
body {
  background: #ffffff url("images/tile.jpg") no-repeat right top fixed;
}
/* So THis code below is the expanded version */
body {
  background-color: #ffffff;
  background-image: url("images/tile.jpg");
  background-repeat: no-repeat;
  background-position: right top;
  background-attachment: fixed;
}
```

`background: #ffffff url("images/tile.jpg") repeat-y right top fixed;` = the order goes like this :

- background: color / link / repeat / position / attachment

```css
body {
  background: #ffffff url("images/miami-trans.png") no-repeat right top fixed;
  background-size: cover;
}
```

`background-size: cover;` fit the whole image to the entire background of the page.

### ways to add css code refresher

```css
/*
1. external stylesheets
2. internal stylesheet
3. inline style
*/
```
