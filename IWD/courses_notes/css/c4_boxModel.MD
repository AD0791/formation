# Interactive Web Development: Chapter 4 (Box Model)

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

We need to learn how to calculate proper the width of the page.

> Total Width = margin + border + padding + width

```css
#div1 {
  width: 290px;
  background-color: gray;
  margin: 10px 0px 10px 0px;
  /* top-right-bottom-left */
  padding: 200px 50px;
  /* (top-bottom) - (right-left)*/
  border: 5px solid black;
}

#div2 {
  width: 400px;
  background-color: green;
}
```

The `div` are line up properly. why?

On the div `#div1`:

1. padding = 2 \* 50 px
2. border = 2 \* 5px
3. width = 290px

total width = 400px

WHich means the divs are line up.

### Centering in css

Use `auto` on left and right margins to center the tags.

```css
#div1 {
  width: 290px;
  background-color: gray;
  margin: 10px auto 10px auto; /* top-right-bottom-left */
  padding: 200px 50px; /* (top-bottom) - (right-left)*/
  border: 5px solid black;
}

#div2 {
  width: 400px;
  background-color: green;
  margin: 10px auto 10px auto; /* top-right-bottom-left */
}
```

margin auto centers tags /elements horizontally.

### color and background images

RGB = red green blue

how!!!!

> hexadecimal_color = ffffff <=> {ff}: red componant + {ff}: green componant + {ff}: blue componant.

A shorthand situation for hexadecimal_color

`ffffff => #fff`

viewport is the browser window.

### Height property

`height : x_numberpx` or `height: x_number%`

A containing tags height must be set in pixels, if you want to set a tag's height in percentage.

Height has to be applied to block level element.

### opacity

`border-radius: x_numberpx` gives you rounded corners. # don't forget to add paddings.

`opacity: 0.0<= x_float <=1`. It affects your background color and text.
