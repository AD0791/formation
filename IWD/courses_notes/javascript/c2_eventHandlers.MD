# Interactive Web Development: Chapter 2 (Event Handlers)

## Chapter 2 Event Handlers

### Event Handlers 1-6

```html
<!DOCTYPE html>
<html onkeypress="sniffer('You pressed a key!')">
  <head>
    <meta charset="UTF-8" />
    <title>Ch2 JavaScript</title>
    <!--
Sublime Text tip:

Select all occurrences of a word by typing Alt+F3 on Windows, or Ctrl+Command+G on the Mac


Some common event handlers:

- onclick
- onmouseover
- onmouseout
- onload
- onkeypress
- onchange - for form fields
- onResize

-->
    <script>
      function sniffer(message) {
        console.log("Something happened: " + message);
      }
    </script>

    <style type="text/css">
      #secondP {
        width: 200px;
        background-color: #afe6a5;
      }

      p:hover,
      button:hover {
        cursor: pointer;
      }
    </style>
  </head>

  <body onResize="sniffer('window resized')">
    <h1>Welcome Uber Nerdling!</h1>

    <button id="butt" type="button" onclick="sniffer('Try it button clicked')">
      Try it
    </button>

    <p onclick="sniffer('p tag clicked')">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <p onmouseover="sniffer('2nd p tag moused-over')" id="secondP">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <script>
      function loadFunc() {
        alert("The page has loaded." + theDate);

        let theDate = new Date();
      }
    </script>
  </body>
</html>
```

onchange handler

```html
<!DOCTYPE html>
<html onkeypress="sniffer('You pressed a key!')">
  <head>
    <meta charset="UTF-8" />
    <title>Ch2 JavaScript</title>
    <!--
Sublime Text tip:

Select all occurrences of a word by typing Alt+F3 on Windows, or Ctrl+Command+G on the Mac


Some common event handlers:

- onclick
- onmouseover
- onmouseout
- onload
- onkeypress
- onchange - for form fields

-->
    <script>
      function sniffer(message) {
        console.log("Something happened: " + message);
      }
    </script>

    <style type="text/css">
      #secondP {
        width: 200px;
        background-color: #afe6a5;
      }

      p:hover,
      button:hover {
        cursor: pointer;
      }
    </style>
  </head>

  <body onResize="sniffer('window resized')" onload="alert('page loading')">
    <h1>Welcome Uber Nerdling!</h1>

    <input type="text" onchange="alert('It changed!')" />

    <button id="butt" type="button" onclick="sniffer('Try it button clicked')">
      Try it
    </button>

    <p onclick="sniffer('p tag clicked')">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <p onmouseover="sniffer('2nd p tag moused-over')" id="secondP">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <script>
      function loadFunc() {
        alert("The page has loaded." + theDate);

        let theDate = new Date();
      }
    </script>
  </body>
</html>
```

list of all event handlers = w3schools.

> So far using handler directly on the tags can get messy.

1. we can put them inside a `script` tags.
2. Or create an external javascript to handle it.

```html
<!DOCTYPE html>
<html onkeypress="sniffer('You pressed a key!')">
  <head>
    <meta charset="UTF-8" />
    <title>Ch2 JavaScript</title>
    <!--
http://www.w3schools.com/jsref/dom_obj_event.asp


Some common event handlers:

- onclick
- onmouseover
- onmouseout
- onload
- onkeypress
- onchange - for form fields

-->
    <script>
      function sniffer(message) {
        console.log("Something happened: " + message);
      }
    </script>

    <style type="text/css">
      #secondP {
        width: 200px;
        background-color: #afe6a5;
        float: right;
      }

      p:hover,
      button:hover {
        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <h1>Welcome Uber Nerdling!</h1>

    <input type="text" onchange="alert('It changed!')" />

    <button id="butt" type="button">Try it</button>

    <p onclick="sniffer('p tag clicked')">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <p onmouseover="sniffer('2nd p tag moused-over')" id="secondP">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <script>
      document.getElementById("butt").onclick = function() {
        sniffer("Inner sniffer");
      };

      /*document.body.onload=function(){
			alert('annonymous inner function BODy');
		}*/
    </script>
  </body>
</html>
```

More on using scripts and the DOM + javascript to raise events

```html
<!DOCTYPE html>
<html onkeypress="sniffer('You pressed a key!')">
  <head>
    <meta charset="UTF-8" />
    <title>Ch2 JavaScript</title>
    <!--
http://www.w3schools.com/jsref/dom_obj_event.asp


Some common event handlers:

- onclick
- onmouseover
- onmouseout
- onload
- onkeypress
- onchange - for form fields

-->
    <script>
      function sniffer(message) {
        console.log("Something happened: " + message);
      }
    </script>

    <style type="text/css">
      #secondP {
        width: 200px;
        background-color: #afe6a5;
        float: right;
      }

      p:hover,
      button:hover {
        cursor: pointer;
      }
    </style>
  </head>

  <body>
    <h1>Welcome Uber Nerdling!</h1>

    <input type="text" onchange="alert('It changed!')" />

    <button id="butt" type="button">Try it</button>

    <p id="firstP">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <p id="secondP">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <script>
      document.getElementById("butt").onmouseover = function() {
        sniffer("Inner sniffer");
      };

      document.getElementById("secondP").onmouseover = function() {
        alert(" Mouse over inner P ");
        console.log("Log the annonymous inner function on secondP");
      };

      document.getElementById("firstP").onclick = function() {
        alert(" Mouse over inner 1st P ");
        console.log("Log the annonymous inner function on firstP");
      };
    </script>
  </body>
</html>
```
