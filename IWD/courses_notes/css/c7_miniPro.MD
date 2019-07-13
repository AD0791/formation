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

### TOP Nav - Style table

> About top nav, css trickery

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Beginners CSS - Chapter 7</title>

    <style type="text/css">
      * {
        margin: 0px;
      }

      main,
      nav {
        display: block;
      }

      main {
        width: 80%;
        background-color: rgba(155, 168, 51, 0.25);
        margin-right: auto;
        margin-left: auto;
        padding: 10px;
        margin-top: 60px;
      }

      p {
        margin: 15px;
      }

      nav {
        width: 100%;
        background-color: #dddddd;
        position: fixed;
        top: 0;
        min-width: 369px;
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

      table,
      td,
      th {
        border: 1px solid black;
      }

      table {
        width: 50%;
      }
      td,
      th {
        padding: 10px;
      }
      td {
        text-align: center;
      }
      caption {
        font-size: 2em;
        padding: 10px;
        background-color: green;
        color: white;
      }
      table {
        margin: auto;
      }

      tr:nth-child(even) {
        background: #b2e0b2;
        width: 15%;
      }

      /*
td:nth-child(1) {
    width: 70%;
}*/
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
      <h1>Heathly Foods</h1>

      <p>
        Heathly Eating: When you eat natural green foods; you will feel better,
        think better and look better.
      </p>

      <table>
        <caption>
          My Fruit Price List
        </caption>
        <tr>
          <th>Fruit</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        <tr>
          <td>Apples</td>
          <td>$1.99</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Bananas</td>
          <td>$1.85</td>
          <td>30</td>
        </tr>
        <tr>
          <td>Grapes</td>
          <td>$1.67</td>
          <td>100</td>
        </tr>
        <tr>
          <td>Pineapple</td>
          <td>$2.25</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Blue Berries</td>
          <td>$1.25</td>
          <td>50</td>
        </tr>
      </table>
    </main>
  </body>
</html>
```

`td:nth-child(1)` : select the first child tag.
