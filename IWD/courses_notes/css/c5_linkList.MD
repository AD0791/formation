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
