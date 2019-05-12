---
title: "CSS3"
author: "Alexandro Disla"
output:
  html_document:
    df_print: paged
---

## Ch1- The Basics

CSS stands for cascading style sheet.

### tag selectors

```html
<!DOCTYPE hmtl>
<head>
<title></title>
<style src="xxx.css"> <style>
<!-- src attribute in the css tag will look up for the css files. -->
</head>
```

Inside the XXX.css we could have

```css
h1{
  "declaration block"
}
p {
  " ; "
}
.function(class){
  " ;  "
}
```

> The declaration block contain the css rules. The ; separates the declarations.

Everthing in the web browser have a default setting.

### How css Works

> In css we have id selectors and class selectors.

```css
tagselector{
  property1:value1;value2;...;valueN
  .
  .
  .
  propertyN:value1;value2;...;valueN
}

/*id-seclector*/
#name{
  property1:value1;value2;...;valueN
  .
  .
  .
  propertyN:value1;value2;...;valueN
}

/*class-selector*/
.name{
  property1:value1;value2;...;valueN
  .
  .
  .
  propertyN:value1;value2;...;valueN
}
```

we will see the difference in the tags like this

```html
<tag class=".name"> </tag> <tag id="name"> </tag>
```

> Class can be applied on many different tags in the same page. Id can be applied on time (in a tag) in the same page.

When we have 2 set of css apply to one tags. One will win over another.

- CSS cascading: rules that decide which css selector wins when there is a conflict.

For example, an id selector is more important than a simple tag selector.

### CSS layout types

In css we have 4 types of design for the layout:

- static = Fixed pixel design or fixed width design.
- liquid = It flows and expands based on the size of the screen.
- adaptative = static design with some responsive design elements.
- responsive = responds based on the size of the window (the objects and images reflows).

## Ch2- CSS styling basics

### link

The link tag allows you to link separate css stylesheets to your html pages.

```html
<link href="#" rel="stylesheet" />
<!-- # is a place holder -->
```

### Html tricks - Navigation tag

To create division in our web page we need to use the div tag. But the question is how are we supposed to create a navigation bar in the browser? we have to mehtod:

- use the `<nav>` tag
- or use the `<div id="navigation">`

> Since we are using html5, it's best practice to stick to the nav tag.

We have multiples way to use the div tag. For example:

```html
<!-- To create the main section of the page-->
<div id="CenterDoc">
  <div></div>
</div>
```

### CSS color

A solid reference for all our questions about the ["webstack"](http://www.w3schools.com). We can find the color values.

In css we have 4 catefories to set colors:

1. name of the color
2. hex color = computer base named color
3. rgb = red green and blue
4. hsl

> a good practice: you can access the source code in the browser with the inspect element. Now you can select the color pecker to modify and navigate between the value of the 4 type of color. (shift+click). We will be able to see the equivalant of a color accross the 4 types.

### CSS StylingText

> `Test-Transform:value;` transforms your text into the value you entered.

- UPPERCASE
- Lowercase
- Capitalize

`capitalize` capitalizes the first letter the first letter of each word.

> 'text-align:value;` align your text according to the value you entered.

- left
- right
- justify
- center

`justify` align your text by spreading it evenly into the space.

> `text-decoration:value;` decorates the text according to the value you entered.

- underline

> `text-indent: value;` indent the first line of you paragraph according to the value you have entered.

### Font Weigth

All heading tags will diplay text in bold. But we can override this state using the `font-weigth` property.

> `font-weigth` transforms your text into the value you have entered

In the case of the `h1` if we put the value to **normal**. the header will look like a normal text.

```css
/* all the above is included */

h1 {
  color: #9fbbd1;
  text-transform: capitalize;
  font-weight: bold;
}

p {
  text-indent: 20px;
  text-align: justify;
}

p .italic {
  font-style: italic;
  font-weight: bold;
}

.italic {
  font-style: italic;
  font-weight: bold;
}
```

some css value doesn't work

### Complexe selectors

`p .italic` are very different `p.italic`

- `p.italic`: apply a css rules to a p tag that have a class italic.

```html
<p class="italic">
  Stefan likes to eat <span>bannas with peanut butter. </span>and something
  called 'poutine'. We focus on teaching the key basic concepts and techniques
  of web design and web programming. Learn more:
</p>
```

> a tag selector + class selector (no space in between) = tag that has that class is selected

- `p .italic`: apply a css rules to the tag that is inside the p tag.

```html
<p>
  Stefan likes to eat <span class="italic">bannas with peanut butter. </span>and
  something called 'poutine'. We focus on teaching the key basic concepts and
  techniques of web design and web programming. Learn more:
</p>
```

> a tag selector + class selector (with space in between) = class that is inside the tag is selected

### font-weight 2

```css
p .italic {
  font-style: italic;
  font-weight: bold;
}
```

- font-style value: normal
- font-style value: italic
- font-style value: oblique
- font-weigth value: normal
- font-weigth value: bold
- font-weigth value: 1 - 900

### font-families 1-2

```css
h1,
h3 {
  color: #9fbbd1;
  text-transform: capitalize;
  font-weight: bold;
  font-family: "Lucida Console", monospace;
}

p {
  text-indent: 20px;
  text-align: justify;

  /* web safe fonts */
  font-size: 16px;
  font-family: "Times New Roman", Times, serif;
}

body {
  font-size: 14px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #333333;
  background-color: #fff;
}
```

font family = collection of fonts

This is allowed:

> `font-family: option1, option2,..., option(K);`

When you have a font that have more than one word. You must put it in between two `"`. CSS will know that it's uniquely one word, in this case, one font.

> Remember in css the last code wins.

### Font Size 1, 2 and 3

> `font-size:value\[px\]; where value \in N^{\*}

```css
h1 {
  color: #9fbbd1;
  text-transform: capitalize;
  font-weight: bold;
  font-family: "Lucida Console", monospace;
  font-size: 24px;
}
```

The defaulf font-size is `16px`

Resizing the window does not change the font size.

> px or pixels = absolute or fixed length unit = window size does not affect font size.

Another way to set the font-size is with

> relatives = flexes and flows.

We have what we call `vw` viewport width.

```css
h1 {
  color: #9fbbd1;
  text-transform: capitalize;
  font-weight: bold;
  font-family: "Lucida Console", monospace;
  font-size: 5vw;
}
```

> The `vw` is relative to the width of the window.

Now we know that we have two types of value for the font size.

- fixed sized = pixels `px`
- relative = viewport `vw`

> vw = relative to the width size of the window. Used when creating websites, iphones, android phones, ipads and tablets.

Now we have another relative called `em`

> em = relative the base size of the font set in the page.

As we can see in our `structure.css` we have set the font for our body tag. The `em` value set in our `h1` will behave accordingly to this base font. BECAUSE the `h1` tag is inside the `body` tag.

```css
/* Structure.css*/
body {
  font-size: 14px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #333333;
  background-color: #fff;
}

/* our h1 */
h1 {
  color: #9fbbd1;
  text-transform: capitalize;
  font-weight: bold;
  font-family: "Lucida Console", monospace;
  font-size: 2em;
}
```

> `\[K\]em` = K times the base font size, k>0.

### Parent-Child 1,2 et 3

- Parent-Child tags
- Inheritance
- Inherited properties and Cleaner code

> Any tags that is inside a tag, is called child tags of this tag. And That tag is refered as the parent tag of these tags. We do have the concept of parent-parent tag or grand parent tag. But it is the same principle but at a higher level.

```html
<nav id="navigation">
  <h2>The Main navigation</h2>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Store</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">Contact us</a></li>
  </ul>
</nav>
```

- `h2` and `ul` are both children of the `nav` tag.
- `li` is the children of the `ul` tag.
- Then `nav` is the grandparent of the `li` tag.
- `ul` and `h2` are siblings tags in this case.

Child tags are inside the parents tags.

> Cascade = set of rules that tell you how the rules translate accross the entire site.

Inheritance = The concept is about the way to share property accross grand-parent/parent and child tags.

> There are certain properties that can be inherited by child tags.

```css
body {
  font-size: 14px;
  font-family: "Courier New", Courier, monospace;
  color: #333333;
  background-color: #fff;
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

p {
  text-indent: 20px;
  text-align: justify;
  width: 80%;
}
```

As an example, `font-family` of `body` will be inherited by `h1`, `h2`, `h3` and `p` since they children tags of `body`.

```html
<body>
  <div id="centerDoc">
    <img id="miamiBuilding" src="images/miami.png" height="350" width="193" />

    <h1>the main heading</h1>
    <p>
      Studioweb is an interactive video question and answer training system. We
      focus on teaching the key basic concepts and techniques of web design and
      web programming.
    </p>

    <h3>A Sub Heading</h3>
    <p>
      Stefan likes to eat
      <span class="italic">bannas with peanut butter. </span>and something
      called 'poutine'. We focus on teaching the key basic concepts and
      techniques of web design and
      <span class="italic">web programming.</span> Learn more:
    </p>

    <ol>
      <li>
        Easily track student progress through an easy to read spreadsheet-like
        layout. Quickly look over your classes to see where students are in the
        courses.
      </li>
      <li>
        View student profiles to get a detailed view of your student's progress:
        see scores and the badges the student has earned.
      </li>
      <li>
        Receive a verifiable "Certificate of Completion" with each course you
        finish. <a href="http://studioweb.com" title="studioweb">LEARN MORE!</a>
      </li>
    </ol>

    <h3>Another Sub Heading</h3>
    <p>
      And so we have yet another paragraph of text that follows our odered list.
      The list is called an ordered list because it has an order imposed upon it
      by the web browser - the list of items are numbered.
    </p>
  </div>
  <!-- closing centerDoc  -->

  <nav id="navigation">
    <h2>The Main navigation</h2>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Store</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact us</a></li>
    </ul>
  </nav>
  <!-- closing navigation  -->
</body>
```

Important rule : The less code, the better.

Another property that can be inherited by children tags is `color` (Set the text color of the page).

The last code wins in css. the new properties added in a specific tag will override the defualt or the inherited properties.

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

## Ch4- Box Model

### Box model Introduction

The box model is a virtual box that wraps around any html tags or elements. It has padding, marging and borders.

The box model is the foundation of web layout in css.

we know the basics layout:

1. fixed pixel
2. liquid
3. adaptative
4. responsive

The box model is in the developer tool in the browser.

The composition of the box model:

- The main content "in the middle"
- padding
- border
- margin : the margin is outside the tag/element
- position

### margin and layouts

```css
#miamiBuilding {
  float: right;
  margin: 10px;
  margin-bottom: 50px;
  margin-right: 20%;
}

#navigation {
  position: absolute;
  z-index: 10;
  width: 210px;
  height: 600px;
  margin: 0;
  border-right: 1px solid #000000;
  font-weight: normal;
}

#centerDoc {
  position: absolute;
  z-index: 15;
  padding: 0 0 20px 20px; /*top right bottom left*/
  margin-top: 50px;
  margin-left: 235px;
  width: 80%;
  max-width: 1200px;
  min-width: 500px;
}
```

CSS margin are used to position tags/elements in the page.

### Borders 1 and 2

Padding creates space between the content of a tag, and the border.

```css
h1 {
  border-style: dashed;
  border-width: 8px;
  padding: 10px;
  margin: 50px;
}
```

`border-bottom-style: 10px`

### More margin

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Chapter 4 CSS Tutorial - Lesson 5</title>
    <meta charset="UTF-8" />

    <link
      href="http://fonts.googleapis.com/css?family=Shadows+Into+Light"
      rel="stylesheet"
      type="text/css"
    />

    <style type="text/css">
      body,
      p {
        margin: 0px;
        padding: 0px;
      }

      #div1 {
        width: 400px;
        background-color: gray;
        margin: 10px 100px 10px 100px; /* top-right-bottom-left */
        padding: 200px 50px; /* (top-bottom) - (right-left)*/
      }

      #div2 {
        width: 400px;
        background-color: green;
      }
    </style>
  </head>

  <body>
    <div id="div1">
      <p>
        And so we have yet another paragraph of text that follows our odered
        list. The list is called an ordered list because it has an order imposed
        upon it by the web browser - the list of items are numbered.
      </p>
    </div>

    <div id="div2">
      <p>
        And so we have yet another paragraph of text that follows our odered
        list. The list is called an ordered list because it has an order imposed
        upon it by the web browser - the list of items are numbered.
      </p>
      <p>
        And so we have yet another paragraph of text that follows our odered
        list. The list is called an ordered list because it has an order imposed
        upon it by the web browser - the list of items are numbered.
      </p>
    </div>
  </body>
</html>
```

You could use the `margin: 10px 100px 10px 100px; /* top-right-bottom-left */` or `margin-<b,r,l,t>: value` to be a bit more specific.

Web Browsers automatically give the elements paddings and margins.

### Box model shorthand

The margin surrounds the element or tag.

```html
<style type="text/css">
/* calculating the element's width properly */

body, p {margin: 0px; padding: 0px;}

#div1 {width: 290px;
background-color: gray;
margin: 10px 0px 10px 0px; /* top-right-bottom-left */
padding: 200px 50px; /* (top-bottom) - (right-left)*/
border: 5px solid black;

}

#div2 {width: 400px;
background-color: green;}

</style>

</head>

<body>

<div id="div1">
	<p>
	And so we have yet another paragraph of text that follows our odered list. The list is called an ordered list because it has an order imposed upon it by the web browser - the list of items are numbered.
	</p>
</div>

<div id="div2">
	<p>
	And so we have yet another paragraph of text that follows our odered list. The list is called an ordered list because it has an order imposed upon it by the web browser - the list of items are numbered.
	</p>
	<p>
	And so we have yet another paragraph of text that follows our odered list. The list is called an ordered list because it has an order imposed upon it by the web browser - the list of items are numbered.
	</p>
</div>
```

### Calculate Width
