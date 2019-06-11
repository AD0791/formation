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
