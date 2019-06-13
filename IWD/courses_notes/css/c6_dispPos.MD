# Interactive Web Development: Chapter 6 (Display Position)

## Chapter 6 Display and Position

### Fixed vs Fluid (1-2)

On the width attribut :

1. fixed layout = we use `px`
2. fluid layout = we use `%`

```html
<style type="text/css">
  * {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: "Shadows Into Light";
    padding: 10px;
    margin: 10px;
  }

  p {
    padding: 5px;
    margin: 5px;
  }

  #fixed {
    width: 600px;
    background-color: gray;
    padding: 10px;
    margin: 10px;
  }

  #fluid {
    width: 50%;
    background-color: green;
    padding: 10px;
    margin: 10px;
  }
</style>
```

Responsive Layout = liquid layouts (reflow). It reposition things on the page.

browser window = viewport

max-width and min-width help set the min and max for your fluid layout.

```html
<link
  href="http://fonts.googleapis.com/css?family=Shadows+Into+Light"
  rel="stylesheet"
  type="text/css"
/>

<style type="text/css">
  * {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: "Shadows Into Light";
    padding: 10px;
    margin: 10px;
  }

  p {
    padding: 5px;
    margin: 5px;
  }

  #fixed {
    width: 600px;
    background-color: gray;
    padding: 10px;
    margin: 10px;
  }

  #fluid {
    width: 90%;
    background-color: green;
    padding: 10px;
    margin: 10px;

    max-width: 800px;
    min-width: 500px;
  }
</style>
```

How are responsive layouts different from liquid layouts?

- Responsive layouts are fluid but they also shift elements to fit the page.

### Height and Overflow

`Height` set the height of the element.

`overflow` property has different possible value.

- hidden : will hide the "excess" of element.
- scroll : will had a scroll bar on this particular element.
- auto : will had the scroll abr automatically if we need them.

```html
<style type="text/css">
  * {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: "Shadows Into Light";
    padding: 10px;
    margin: 10px;
  }

  p {
    padding: 5px;
    margin: 5px;
  }

  #fixed {
    width: 600px;
    background-color: gray;
    padding: 10px;
    margin: 10px;
  }

  #fluid {
    width: 80%;
    background-color: green;
    padding: 10px;
    margin: 10px;
    max-width: 1000px;
    min-width: 500px;
    /**/
    height: 300px;
    overflow: auto;
  }
</style>
```

### Block VS inline refresher

`*` = is the universal selector. It tells the web browser to select everything (every elements) on the page. It kinda best practice.

```html
<style type="text/css">

* {margin: 0; padding: 0}

h1 {
	font-family: "Shadows Into Light";
	padding: 10px;
	margin: 10px;
}

p {
	padding: 5px;
	margin: 5px;
}

#fixed {

margin: 10px auto;
width: 70%;
}


a {display: block; background-color: green; margin-bottom: 3px;}

</style>

</head>

<body>



<div id="fixed">
	<h1 style="background-color: red">Display - block vs inline</h1>
	<p>
	And so we have yet another paragraph of text that follows our odered list. The list is called an ordered list because it has an order imposed upon it by the web browser - the list of items are numbered.
	</p>



</div>
<a href="#">burgers</a>
<a href="#">fries</a>
<a href="#">dogs</a>
<a href="#">cats</a>
```

The `display` property set to `block` will turn an inline element into a block level element

Why do web nerds use the universal selector to set margins and padding to zero?

- To fix the problem of browsers not setting the padding and margins the same way.

### Visbility and Floats (1-2)

`display: none` take the tag out of the flow of the flow of the page.

`visibility: hidden` only hides the tag.

`float: right /*or left*/` will a tag (a div "= container tag") to the right.

What is the difference between 'display: none' and 'visibility: hidden' ?

- With 'display: none', the tag is taken out of the flow, where with 'visibility: hidden', the tag cannot be seen, but it is STILL in flow.

`clear:both` pushes tags past any floated tags.

### Position (static, fixed, relative, absolute "now we have sticky")

`postion:static` The static is the default.

the static position won't be influenced by the top, right, bottom, and left properties.

#### Position Fixed

`position:fix` allows the tag to be moved OUTSIDE of the normal flow of the page.

IT will stay in place (like you freeze a row or column in english).

```html
<style type="text/css">
  * {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: "Shadows Into Light";
    padding: 10px;
    margin: 10px;
    margin-left: 50px;
    position: fixed;
    top: 0px;
    right: 0;
    background-color: white;
  }

  p {
    padding: 5px;
    margin: 5px;
  }

  #fixed {
    margin: 10px auto;
    margin-top: 90px;
    width: 90%;
  }
</style>
```

#### Postion Relative

1. With relative, top, bottom, left, right positioning takes the element out of page-flow (that means it does NOT move other tags around), relative to where it was. This is different from margins, that push the content around it.

2. Unlike position: fixed, once you reposition a relative element, it does scroll.

3. Unlike position: fixed, repositioning is relative to where it was to begin with. With fixed, top,bottom,right,left positioning is positioned relative to the viewport.

```html
<style type="text/css">
  * {
    margin: 0;
    padding: 0;
  }

  /* 

1. With relative, top, bottom, left, right positioning takes the element out of page-flow (that means it does NOT move other tags around), relative to where it was. This is different from margins, that push the content around it.

2. Unlike position: fixed, once you reposition a relative element, it does scroll. 

3. Unlike position: fixed, repositioning is relative to where it was to begin with. With fixed, top,bottom,right,left positioning is positioned relative to the viewport.


*/

  h1 {
    font-family: "Shadows Into Light";
    padding: 10px;
    margin: 10px;
    margin-left: 50px;

    position: relative;
    top: 100px;
    left: 50px;
    background-color: white;
  }

  p {
    padding: 5px;
    margin: 5px;
  }

  #fixed {
    margin: 10px auto;
    margin-top: 30px;
    width: 90%;
  }
</style>
```

We know 'position:fixed', positions tags relative to the browser window ... how does 'position:relative' get positioned when you use the properties top, bottom, left and right?

- The are positioned relative to WHERE THEY WERE in the document.

#### Position Absolute

1. absolute is positioned relative to the nearest positioned ancestor element that IS NOT STATIC. That means you have to put absolutely positioned tags INSIDE tags that have position: relative or position: fixed. Absolute position takes the tag out of normal page flow.

2. However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

```html
<style type="text/css">
  * {
    margin: 0;
    padding: 0;
  }

  /* 

1. absolute is positioned relative to the nearest positioned ancestor element that IS NOT STATIC. That means you have to put absolutely positioned tags INSIDE tags that have position: relative or position: fixed. Absolute position takes the tag out of normal page flow.

2. However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
*/

  h1 {
    font-family: "Shadows Into Light";
    padding: 10px;
    margin: 10px;
    margin-left: 50px;
    position: absolute;
    bottom: 50px;
    left: 400px;
    background-color: white;
  }

  p {
    padding: 5px;
    margin: 5px;
  }

  #fixed {
    margin: 10px auto;
    margin-top: 30px;
    width: 90%;
    position: relative;
    background-color: green;
  }
</style>
```

Keep absolute positioned tags inside relative positioned tags inside relative positioned tags.

The best way to use absolute positioning is:

- To put your absolute positioned tag inside a relative or fixed positioned tag.
