# Interactive Web Development: Chapter 7 (Mini Project)

## Chapter 7 Mini Project

### The Main Tag Fix

The main tag is a new tag that came out with `HTML5`.

> Remember not all the browser will support all the tags. Even if it's in the html specification.

`main, nav {display: block;}` it's a precaution to ensure that all browser will know that these tags are block level tags.

```HTML5
<!DOCTYPE html>
<html>
	<head>
		<title>Beginners CSS - Chapter 7</title>

<style type="text/css">

main, nav {display: block;}


nav {

  width: 100%;
  background-color: gray;
}

nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

}

nav li {
   	float: left;
    margin-left: 0px;
}

nav a {
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

<nav>
    <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
  </ul>
</nav>


<main>
  <p><b>Note:</b> Be sure to put your !DOCTYPE, because if you don't, floating items can produce crazy results.</p>
  <p>Because we set the 'a' tag to block, the whole link area is now clickable, not just the text.</p>
  <p><b>Note:</b> overflow:hidden is added to the ul element to prevent li elements from going outside of the list.</p>
    <p><b>Note:</b> Be sure to put your !DOCTYPE, because if you don't, floating items can produce crazy results.</p>
  <p>Because we set the 'a' tag to block, the whole link area is now clickable, not just the text.</p>


</main>

	</body>
</html>
```

### TOP nav
