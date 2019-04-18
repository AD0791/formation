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
