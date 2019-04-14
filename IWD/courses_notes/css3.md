---
title: "CSS3"
author: "Alexandro Disla"
output: pdf_document
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
