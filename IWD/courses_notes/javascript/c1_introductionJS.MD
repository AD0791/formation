# Interactive Web Development: Chapter 1 (Introduction Javascript)

## Chapter 1 Introduction javascript

### first javascript 1-7 / errors / DOM

`<script src="mycode.js"></script>` create linke for our external javascript code.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ch1 JavaScript</title>

    <!-- 

		Javascript is simply called JS by the nerds.

		-->

    <style type="text/css"></style>

    <!-- old style:  <script type="text/javascript">  

			java != javascript

			
	     -->

    <script>
      // 'alert' is a function, function is short for functionality.
      function callIt() {
        alert("Display message.");
        prompt("Please enter your name", "Name ..");
      }
    </script>
  </head>
  <body>
    <h1>Welcome Uber Nerdling!</h1>

    <button id="butt" type="button" onclick="callIt()">Try it</button>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <script>
      //document.getElementById("butt").onclick=function(){alert('annonymous inner function alert');}
    </script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ch1 JavaScript</title>

    <!-- 

		Javascript is simply called JS by the nerds.

		-->

    <style type="text/css"></style>

    <!-- old style:  <script type="text/javascript">  

			java != javascript

			
	     -->

    <script>
      // 'alert' is a function, function is short for functionality.

      function myFunction() {
        alert("Display message.");
        prompt("Please enter your name"); // "Name .." in not necessary
      }

      // event handler
    </script>
  </head>

  <body>
    <h1>Welcome Uber Nerdling!</h1>

    <button id="butt" type="button" onmouseover="myFunction()">Try it</button>

    <p onclick="myFunction()">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <script>
      //document.getElementById("butt").onclick=function(){alert('annonymous inner function alert');}
    </script>
  </body>
</html>
```

`onclick` and `onmouseover` are event handlers.

`onload` event

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Ch1 JavaScript</title>

    <!-- 

		Javascript is simply called JS by the nerds.

		-->

    <style type="text/css"></style>

    <!-- old style:  <script type="text/javascript">  

			java != javascript

			a != b

			1 != 3

			
	     -->

    <script>
      // 'alert' is a function, function is short for functionality.

      function myFunction(message) {
        //This is some code.

        alert("U clicked on: " + message);
        prompt("Please enter your name", "You clicked on: " + message);
      }
    </script>
  </head>

  <body onload="loadFunc()">
    <h1>Welcome Uber Nerdling!</h1>

    <button id="butt" type="button" onclick="myFunction('button')">
      Try it
    </button>

    <p onclick="myFunction('paragraph')">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum
    </p>

    <script>
      //document.getElementById("butt").onclick=function(){alert('annonymous inner function alert');}

      function loadFunc() {
        let theDate = new Date();

        alert("The page has loaded." + theDate);
      }
    </script>
  </body>
</html>
```
