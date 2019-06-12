# Interactive Web Development: Chapter 5 (Styling Link and List)

## Chapter 5 Styling link and List

### pseudo class (1, 2 and 3)

refactoring = code clean up

Clean code is easier to update and mantain.

Pseudo Class Selectors = select element on your page based on an event.

```css
/* unvisited link */
a:link {
  color: green;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: red;
  background: red;
}

/* mouse over link */
a:hover {
  color: blue;
  text-decoration: underline;
  font-family: arial;
  font-size: 30px;
  background-color: #00ff00;
}

/* selected link */
a:active {
  color: green;
  font-weight: bold;
}

#centerDoc a:link {
  color: green;
  text-decoration: underline;
}
#centerDoc a:hover {
  color: blue;
}
```

Hover state = hover state is when your mouse is over a tag typically a `p` tag.

Cick Down on the link, to make it active.

IMPORTANT RULES: **(unvisited)L-V-H-A**

### Specificity Refresher

```css
ul li {
  list-style-type: circle;
  line-height: 200%;
}
```

This is a precise selector.

### Creating Buttons (1,2,3)

we basically making a button of a tag

```css
a:link,
a:visited {
  color: #000;
  text-decoration: none;
  background-color: #a2b7cf;
  padding: 5px;
  border-radius: 10px;
}

/* mouse over link */
a:hover {
  color: blue;
  text-decoration: underline;
  background-color: #a2b7cf;
  padding: 5px;
  border-radius: 10px;
}

/* selected link */
a:active {
  color: green;
  font-weight: bold;
}

#centerDoc a:link {
  color: #000;
  text-decoration: underline;
}
#centerDoc a:hover {
  color: blue;
}
```

More specific css selectors, win over LESS specific css selectors.

```css
a:link,
a:visited {
  color: #000;
  text-decoration: none;
  background-color: #a2b7cf;
  padding-left: 10px;
  display: block; /* make it expand*/
  width: 145px; /* change the width of the display*/
  margin-bottom: 10px;
  border-radius: 10px;
  transition: margin-bottom 0.45s ease-in; /* effect on margin  ease-in ease-out*/
}

/* mouse over link */
a:hover {
  color: #ffffff;
  background-color: #000;
  margin-bottom: 45px;
}

/* selected link */
a:active {
  color: green;
  font-weight: bold;
}

#centerDoc a {
  background-color: transparent;
}
#centerDoc a:link,
#centerDoc a:visited {
  color: #000;
  text-decoration: underline;
}
#centerDoc a:hover {
  color: #ff0000;
  margin-bottom: 0px;
}
```

### Styling link with Image

```css
ul,
ol {
  list-style-type: none;
}

li {
  background-image: url("images/red-star-bullet.png");
  background-repeat: no-repeat;
  padding-left: 25px;
  padding-top: 10px;
  background-position: 0px 9px;

  background-color: #00ff00;
  margin-bottom: 10px; /**/
}
```

### Block level tags.

Block level tags extends to the entire width of the containing tag.

```html
<style type="text/css">

		body {padding: 0; margin: 0;}

			ul, ol {list-style-type: none;}

			li {
				background-image: url("images/red-star-bullet.png");
				background-repeat: no-repeat;
				padding-left: 25px;
				padding-top: 10px;
				background-position: 0px 9px;

				background-color: #00ff00;
				margin-bottom: 10px;
			}

			#tainer {

					width: 50%;

				}
		</style>

	</head>
	<body>

	<h1>CSS Lists</h1>

	<div id="tainer">
		<ul>
			<li>Fish</li>
			<li>Sticks</li>
			<li>Snacks</li>
		</ul>


		<ol>
			<li>General</li>
			<li>Major</li>
			<li>Private</li>
		</ol>
	</div>

	</body>
```

### CSS LIST styles

```html
<style type="text/css">

		/*

	See all the list style types:
	http://www.w3schools.com/cssref/tryit.asp?filename=trycss_list-style-type_all

		*/

		body {font-size: 1.5em;}

			ul.none, ol.none {list-style-type: none;}

			ul.a {list-style-type: circle;}
			ul.b {list-style-type: disc;}
			ul.c {list-style-type: square;}

			ol.d {list-style-type: lower-alpha;}
			ol.e {list-style-type: lower-greek;}
			ol.f {list-style-type: lower-latin;}
			ol.g {list-style-type: lower-roman;}

			ol.h {list-style-type: upper-alpha;}
			ol.i {list-style-type: upper-latin;}
			ol.j {list-style-type: upper-roman;}

		</style>

	</head>
	<body>

	<h1>CSS ordered List Types</h1>

		<ol class="h">
			<li>General</li>
			<li>Major</li>
			<li>Private</li>
		</ol>

		<ol class="none">
			<li>General</li>
			<li>Major</li>
			<li>Private</li>
		</ol>


	<h1>CSS unordered List Types</h1>

		<ul class="a">
			<li>Fish</li>
			<li>Sticks</li>
			<li>Snacks</li>
		</ul>

		<ul class="b">
			<li>Fish</li>
			<li>Sticks</li>
			<li>Snacks</li>
		</ul>

		<ul class="c">
			<li>Fish</li>
			<li>Sticks</li>
			<li>Snacks</li>
		</ul>

		<!-- HTML type attribute - this is NOT CSS -->
		<ol type="A">
		  <li>Coffee</li>
		  <li>Eggs</li>
		  <li>Lion Sticks</li>
		</ol>

	</body>
```

### css navbar

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Beginners CSS - Lesson 10 - Navbars</title>

    <style type="text/css">
      /*

	Check out the w3cschools original:
	http://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_float

		*/
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
      }

      li {
        float: left;
        margin-left: 0px;
      }

      a {
        display: block;
        width: 80px;
        background-color: #dddddd;
        text-align: center;
        padding: 4px;
        text-decoration: none;
        text-transform: uppercase;
      }

      a:hover {
        background-color: #ddff00;
      }
    </style>
  </head>
  <body>
    <h1>CSS Navbars</h1>

    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#news">News</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#about">About</a></li>
    </ul>

    <p>
      <b>Note:</b> Be sure to put your !DOCTYPE, because if you don't, floating
      items can produce crazy results.
    </p>
    <p>
      Because we set the 'a' tag to block, the whole link area is now clickable,
      not just the text.
    </p>
    <p>
      <b>Note:</b> overflow:hidden is added to the ul element to prevent li
      elements from going outside of the list.
    </p>
  </body>
</html>
```

`float` is the key to make the menu horizontal.

When creating a horizontal (left to right) menu with `<li>` tags, what CSS property (and value) do you need to add, to have the list position itself left to right?

You have to add the CSS: 'float: left'.
