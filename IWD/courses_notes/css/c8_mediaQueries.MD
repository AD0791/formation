# Interactive Web Development: Chapter 8 (Media Querries)

## Chapter 8 Media Querries

### Part 1-4

it allows you to make your content fixe any device

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Beginners CSS - Chapter 8</title>

    <style type="text/css">
      * {
        margin: 0px;
      }

      main {
        margin: 10px auto;
        width: 600px;
        padding: 30px;
        margin-top: 0px;
        background-color: olive;
        display: block;
      }

      @media screen and (max-width: 350px) {
        main {
          background-color: #88a5e0;
        }
      }

      @media screen and (min-width: 600px) {
        main {
          background-color: red;
        }
      }

      @media screen and (min-width: 800px) {
        main {
          background-image: url("images/Reeds-in-Wind-Cinemagraph.gif");
          background-repeat: no-repeat;
          background-size: cover;
          padding-bottom: 400px;
        }
      }

      @media screen and (min-width: 1000px) {
        main {
          background-image: none;
          background-color: rgb(48, 36, 36);
        }

        h1,
        p {
          color: white;
        }
      }
    </style>
  </head>

  <body>
    <main>
      <h1>Media Queries</h1>
      <p>
        Media allows you to make your pages to change to fit any device.
      </p>
    </main>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Beginners CSS - Chapter 8</title>

    <link
      href="http://fonts.googleapis.com/css?family=Calligraffitti"
      rel="stylesheet"
      type="text/css"
    />

    <style type="text/css">
      /* browser setup code */

      * {
        margin: 0px;
      }
      main,
      nav {
        display: block;
      }

      /* browser setup code */

      @media screen and (min-width: 600px) {
        main {
          background-image: url("images/Reeds-in-Wind-Cinemagraph.gif");
          background-repeat: no-repeat;
          background-size: cover;
        }
      }

      @media screen and (max-width: 350px) {
        body {
          background-color: #88a5e0;
          background-image: none;
        }
      }

      main {
        width: 80%;
        background-color: rgba(155, 168, 51, 0.25);
        margin-right: auto;
        margin-left: auto;
        padding: 10px;
        margin-top: 60px;
        padding-bottom: 40px;
        border-radius: 25px;
      }

      @media screen and (min-width: 1000px) {
        main {
          background-color: red;
          background-image: none;
        }
      }

      p {
        margin: 15px;
        margin-top: 0px;
      }

      p:first-letter {
        font-size: 3em;
        font-family: serif;
        color: green;
      }

      main h1 {
        font-family: Calligraffitti;
        text-align: center;
        margin-bottom: 0px;
        color: #000;
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
        color: #000;
      }

      a:hover {
        background-color: green;
        color: white;
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

      td:nth-child(1) {
        width: 60%;
      }

      tr:nth-child(even) {
        background: #b2e0b2;
        width: 15%;
      }

      @media screen and (min-width: 800px) {
        main {
          padding-bottom: 200px;
        }

        h1 {
          font-size: 5em;
          color: #fff;
        }
      }

      @media screen and (min-width: 1000px) {
        main h1 {
          font-size: 7em;
          color: #fff;
        }
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
