# Begin:Javascript

-----------------

## Chapter 1: Getting Started

> Javascript is a programming, scripting and markup languages.

Due to intense community support and investment of big companies, these days with javascript you can build:

- web/ Mobile apps
- real time network apps
- Command line Tools
- Games

Javascript run in the javascript engine of the browser you are using.

- The browsers have a JavaScript Engine (firefox: SpiderMonkey; Chrome:v8)
- Node = v8 + c++
- Ecmascript is specification = reponsible for defining standards or features for javascript

### Setting-up the Environment

- An IDE or code editor = Visual studio code.  
- Download nodejs  
- Live server (in Visual studio code)
- The index.html will be our host for the javascript code.
- Live server template allow us to serve our code into the browser simultaneously.

Where to run JS code?

- Head tag or Body Tag

> It is best practice to put the js codes at the end of the body tag.  Two main reason:   

1. your browser is going to parse the index file (run over the code). ANd since you will have a lot of javascript codes, the browser might get busy by going over those codes. (At the end your web page will take time to load) It won't be able to render the web page. This will create a bad user experience.
2. The code, that we have on this web page, needs to talk to the element of this web page.

- Exception: If you are using third party codes you can put them on the head tag or section.

Basics?

- A statement: is a piece of code that express an action to be carried out. In this case we want to log a message in the console. It ends by a ";".  
- A string: is a sequence of character.
- //: is used to add comment.

### Separation concern 

> Just as Css, you can create a separate .js files (.css and the case of css). Then you will have to link this file to the index.html file or the main html file with an link tag (anchor or hyperlink tag). We want to separate html, which is all about content, from javascript which is all about behavior.

In our case, we have already an index.html. We create an index.js files then we add ou js codes:

```javascript
// comment for the why's
console.log("Hello World");
```

Now we link the index.js to the html like this.

```html
<script src="index.js"></script>
```

# Chapter 2: Variables











