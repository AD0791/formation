# Interactive Web Development: Chapter 9 (CSS Layouts)

## Chapter 9 CSS Layouts

### Simple Layout 1-3

> BOFFFF

```CSS

* {
margin: 0; padding: 0;
font-size: 12px;
}

body {
	font-family: Verdana, Geneva, sans-serif;
	font-size: .80em;
	color: #333333;
	background-color: #fff;
}

h1 { font-size: 2em; }

h2 { font-size: 1em; }

#container {
	width:90%;
	min-width: 400px;
	max-width: 1250px;
	margin-top:10px;
	margin-right:auto;
	margin-bottom:10px;
	margin-left:auto;
	position:relative;
	background-color:#FFF;
}

#header {
	width:100%;
	background-color: #F8F8FF;
	margin-bottom: 20px;
	border-style: solid;
	border-width: 1px;
	border-color: #1E90FF;
}

#header h1 {
	padding: 10px;
}

#navigation {
float: left;
width: 20%;
background-color:#F8F8FF;
border-style: solid;
border-width: 1px;
border-color: #1E90FF;
}

#navigation h2 {
padding-left: 10px;
padding-bottom: 10px;
}

#navigation li {
	list-style: none;
	line-height: 1.5em;
}

#navigation a {
	background-color: none;
	display: block;
	padding-left: 10px;
	line-height: 2em;
	text-decoration: none;
}

#navigation a:hover {
	background-color: #FFE4E1;
	display: block;
}

/*margin-left: 10px;
 */
#centerDoc {
float: right;
width: 78%;
background-color:#F8F8FF;
margin-left: 1%;
border-style: solid;
border-width: 1px;
border-color: #1E90FF;
}

#centerDoc p, h3, h1{
	padding-left: 10px;
	padding-right: 10px;
}

#centerDoc p {
	margin-bottom: 10px;
}

#centerDoc h1, h3 {
	margin-bottom: 10px;
}

#centerDoc li {
	list-style: none;
	padding-left: 10px;
	line-height: 1.5em;
}

#centerDoc ol{
	margin-bottom: 10px;
}


#miamiBuilding {
float: right;
margin: 20px;
}

#footer {
	float: right;
	width: 78%;
	clear: both;
	background-color: #F8F8FF;
	margin-top: 20px;
	margin-bottom: 25px;
	margin-left: 20px;
	text-align: right;
	border-style: solid;
	border-width: 1px;
	border-color: #1E90FF;
	border-width: 1px;
}

#footer h2, p {
	padding: 10px;
}
```

### fixed layout 1-4

> BOFFFF

```CSS

* {
margin: 0;
padding: 0;
}

#container {
	width:960px;
	margin-right:auto;
	margin-left:auto;
	margin-top:10px;
	margin-bottom:10px;
	position:relative;
	background-color:#FFF;
}

#header {
	background-color: #FAF0E6;
	margin-bottom: 20px;
	border-style: solid;
	border-width: 1px;
	border-color: red;
}

#navigation {
float: left;
width: 198px;
background-color:#FAF0E6;
border-style: solid;
border-width: 1px;
border-color: red;
}

#centerDoc {
float: right;
width: 738px;
background-color:#FAF0E6;
margin-left: 20px;
border-style: solid;
border-width: 1px;
border-color: red;
}

#footer {
	float: right;
	width: 738px;
	clear: both;
	background-color: #FAF0E6;
	margin-top: 20px;
	margin-left: 20px;
	border-style: solid;
	border-width: 1px;
	border-color: red;

}

#miamiBuilding {
float: right;
margin: 20px;
}


body {
	font-family: Verdana, Geneva, sans-serif;
	font-size: .80em;
	color: #333333;
	background-color: #fff;
}

h1 { font-size: 2em; }

h2 { font-size: 1em; }





#header h1 {
	padding: 10px;
}



#navigation h2 {
padding-left: 10px;
padding-bottom: 10px;
}

#navigation li {
	list-style: none;
	line-height: 1.5em;
}

#navigation a {
	padding-left: 10px;
	line-height: 2em;
	text-decoration: none;
}

#navigation a:hover {
	background-color: #FAFAD2;
	display: block;
}



#centerDoc p, h3, h1{
	padding-left: 10px;
	padding-right: 10px;
}

#centerDoc p {
	margin-bottom: 10px;
}

#centerDoc h1, h3 {
	margin-bottom: 10px;
}

#centerDoc li {
	list-style: none;
	padding-left: 10px;
	line-height: 1.5em;
}

#centerDoc ol{
	margin-bottom: 10px;
}

#footer p {
	padding: 10px;
}

```

### SHARK PROJECTS

```html
<!DOCTYPE html>
<html>
<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<title>Shark Care Guide for Kids</title>
	<link href='http://fonts.googleapis.com/css?family=Creepster' rel='stylesheet' type='text/css'>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<style>
	
	* {margin: 0; padding: 0}
	
	body {font-family: 'Open Sans', sans-serif; background-color: #ffffff;}

	h2 {color: #158CC0; text-align: center;}

	@media screen and (max-width: 900px) {h2 {color: #158CC0;}}

	@media screen and (max-width: 700px) {h2 {color: #8E3131;}}

	@media screen and (max-width: 600px) {h2 {color: red;}}

	
	li {list-style-type: none; margin-bottom: 5px; padding-left: 25px;}

	p {margin: 10px;}
	

	#leftside {
		float: left;
		width: 45%;
		margin-bottom: 20px;
		padding: 10px;	
		}

	#rightside {
		float: right;
		width: 45%;
		margin-bottom: 20px;
		padding: 10px;
		}

	@media screen and (max-width: 712px) {

		#leftside {
			width: 95%;
			padding: 10px;	
			float: left;
			}

		#rightside {
			width: 95%;
			padding: 10px;
			clear: both;
			}
	}

	#bottomcontainer {
		
		width: 80%;
		margin-left: auto; 
		margin-right: auto;
		margin-top: 50px;
	}

	#pagefooter {
		
		width: 100%;
		height: 40px;
		margin-left: auto; 
		margin-right: auto;
		clear: both;
		background-color: #158CC0;
		text-align: center;
		color: #ffffff;
		padding-top: 15px; 
	}

	#video {
		width: 100%;
		margin-left: auto; 
		margin-right: auto;
		clear: both;
		text-align: center;
		margin-bottom: 15vh;
		}

	video {border-radius: 25px; width: 80%}
	
	#topdiv {
	min-width: 406px;	
	background-color: #158CC0; 
	height: 35px; 
	width: 100%;
	padding-top: 10px;
	color: #ffffff; 
	}

	#topdiv a {
		color: #ffffff; 
		padding: 5px; 
		text-decoration: none;
	}

	/* Make top nav fixed. 
	I adjust margin on #heading-text since setting .topdiv to fixed, effects the flow of the page.
		
		#topdiv {
		position: fixed;
		top: 0px;
		z-index: 10;
		}
	*/

	#heading-text {

		text-align: center;
		margin-top: 50px;
	}

	#heading-text h2 {font-size: 3em;}


	/* Set the attachment to 'fixed' for simple parallax scrolling. */
	#shark-div {
		margin-top: 50px; 
		margin-left: auto; 
		margin-right: auto; 
		text-align: center;
		height: 400px;
		/*height: 80vh;*/
		width: 90%;
		background: url(shark-attacks.jpg);
	    background-repeat: no-repeat;
	    background-position: bottom bottom;
	    /*background-position: center center;*/
	    /*background-attachment: fixed;*/
	    background-attachment: scroll;
	    background-size:cover;
	    border-radius: 25px;
	}

	#sharksemester {
		position: relative;
		top: 50%;
	 	transform: translateY(-50%);
	 	color: #ffffff;
	 	font-family: 'Creepster', cursive;
	 	font-size: 9vw;
	 	opacity: 0.7;
	 	letter-spacing: 20px; /*or use 2vw so fonts won't stack. In other words, px forces font stacking.*/
	 	text-shadow: 2px 2px #000000;
	 	}
	

	#css-table {
		display: table; 
		border: 1px dotted rgb(217,237,249); 
		background-color: rgba(217,237,249, .4); 
		width: 80%; 
		margin-top: 50px; 
		margin-bottom: 50px; 
		margin-left: auto; 
		margin-right: auto;
		clear: both;
		}
	

	#above-video li {list-style-type: square; margin-bottom: 5px; padding-left: 10px; margin-left: 35px;}
	
	</style>

</head>
<body>

<div id="topdiv">
<span style="padding-left: 20px; font-size: 1em; letter-spacing: 2px;"><a href="#">home</a></span>
<span style="float: right; padding-right: 20px;"><a href="#">shark biscuits</a> | <a href="#">shark training leashes</a></span>
</div>



<!-- container -->
<div style="width: 100%; margin-left: auto; margin-right: auto;">

	<div id="heading-text">
		<h2>Care and Feeding of Tiger Sharks</h2>
		<p>Tiger sharks grow only to 15 feet, so they are much better suited as pet sharks for kids under the age of 12.</p>
	</div>
	
	<div id="shark-div">
		<h1 id="sharksemester" style="">Shark Semester!</h1>
	</div>


	
<div id="bottomcontainer">

	<div id="leftside">
		<h2>Shark Maintenance Training Videos</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>

	<div id="rightside">
		<h2>Fun Facts about Tiger Sharks</h2>
		<p>Old-school two column - dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>

</div>


<!-- not sure if I will teach this.-->

 <div id="css-table">
     
     <div style="display: table-cell; vertical-align: top; text-align: left; width: 50%; padding: 10px;">
    	<p>New-school two column -  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    	<ol>
    		<li>Shark item 1</li>
    		<li>Shark item 2</li>
    		<li>Shark item 3</li>
    		<li>Shark item 4</li>
    		<li>Shark item 5</li>
    	</ol>
     </div>

      <div style="display: table-cell; vertical-align: top; text-align: left; padding: 10px;">
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </div>


   </div>


<div id="video">
	<video controls>
	  <source src="shark-attacks.mp4" type="video/mp4">
	Your browser does not support the video tag.
	</video>

	<h3 style="margin-top: 25px;">Shark owners with their pet tiger sharks - at a local shark-park.</h3>
</div>


<div id="pagefooter">All shark's rights reserved.</div>

</div>
</body>
</html>
```

```html
<!DOCTYPE html>
<html>
<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<title>Shark Care Guide for Kids</title>
	<link href='http://fonts.googleapis.com/css?family=Creepster' rel='stylesheet' type='text/css'>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<style>
	
	* {margin: 0; padding: 0}
	
	body {font-family: 'Open Sans', sans-serif; background-color: #ffffff;}

	h2 {color: #158CC0; text-align: center;}

	@media screen and (max-width: 900px) {h2 {color: #158CC0;}}

	@media screen and (max-width: 700px) {h2 {color: #8E3131;}}

	@media screen and (max-width: 600px) {h2 {color: red;}}

	
	li {list-style-type: none; margin-bottom: 5px; padding-left: 25px;}

	p {margin: 10px;}
	

	#leftside {
		float: left;
		width: 45%;
		margin-bottom: 20px;
		padding: 10px;	
		}

	#rightside {
		float: right;
		width: 45%;
		margin-bottom: 20px;
		padding: 10px;
		}

	@media screen and (max-width: 712px) {

		#leftside {
			width: 95%;
			padding: 10px;	
			float: left;
			}

		#rightside {
			width: 95%;
			padding: 10px;
			clear: both;
			}
	}

	#bottomcontainer {
		
		width: 80%;
		margin-left: auto; 
		margin-right: auto;
		margin-top: 50px;
	}

	#pagefooter {
		
		width: 100%;
		height: 40px;
		margin-left: auto; 
		margin-right: auto;
		clear: both;
		background-color: #158CC0;
		text-align: center;
		color: #ffffff;
		padding-top: 15px; 
	}

	#video {
		width: 100%;
		margin-left: auto; 
		margin-right: auto;
		clear: both;
		text-align: center;
		margin-bottom: 15vh;
		}

	video {width: 90%}
	
	#topdiv {
	min-width: 406px;	
	background-color: #158CC0; 
	height: 35px; 
	width: 100%;
	padding-top: 10px;
	color: #ffffff; 
	}

	#topdiv a {
		color: #ffffff; 
		padding: 5px; 
		text-decoration: none;
	}

	/* Make top nav fixed. 
	I adjust margin on #heading-text since setting .topdiv to fixed, effects the flow of the page.*/
		
		#topdiv {
		position: fixed;
		top: 0px;
		z-index: 10;
		}
	

	#heading-text {

		text-align: center;
		margin-top: 50px;
	}

	#heading-text h2 {font-size: 3em;}


	/* Set the attachment to 'fixed' for simple parallax scrolling. */
	#shark-div {
		margin-top: 50px; 
		margin-left: auto; 
		margin-right: auto; 
		text-align: center;
		height: 500px;
		/*height: 80vh;*/
		width: 100%;
		background: url(shark-attacks.jpg);
	    background-repeat: no-repeat;
	    background-position: bottom bottom;
	    /*background-position: center center;*/
	    /*background-attachment: fixed;*/
	    background-attachment: scroll;
	    background-size:cover;
	    /*border-radius: 25px;*/
	}

	#sharksemester {
		position: relative;
		top: 50%;
	 	transform: translateY(-50%);
	 	color: #ffffff;
	 	font-family: 'Creepster', cursive;
	 	font-size: 9vw;
	 	opacity: 0.7;
	 	letter-spacing: 20px; /*or use 2vw so fonts won't stack. In other words, px forces font stacking.*/
	 	text-shadow: 2px 2px #000000;
	 	}
	

	#css-table {
		display: table; 
		border: 1px dotted rgb(217,237,249); 
		background-color: rgba(217,237,249, .4); 
		width: 80%; 
		margin-top: 50px; 
		margin-bottom: 50px; 
		margin-left: auto; 
		margin-right: auto;
		clear: both;
		}
	

	#above-video li {list-style-type: square; margin-bottom: 5px; padding-left: 10px; margin-left: 35px;}
	
	</style>

</head>
<body>

<div id="topdiv">
<span style="padding-left: 20px; font-size: 1em; letter-spacing: 2px;"><a href="#">home</a></span>
<span style="float: right; padding-right: 20px;"><a href="#">shark biscuits</a> | <a href="#">shark training leashes</a></span>
</div>



<!-- container -->
<div style="width: 100%; margin-left: auto; margin-right: auto;">

	<div id="heading-text">
		<h2>Care and Feeding of Tiger Sharks</h2>
		<p>Tiger sharks grow only to 15 feet, so they are much better suited as pet sharks for kids under the age of 12.</p>
	</div>
	
	<div id="shark-div">
		<h1 id="sharksemester" style="">Shark Semester!</h1>
	</div>


	
<div id="bottomcontainer">

	<div id="leftside">
		<h2>Shark Maintenance Training Videos</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>

	<div id="rightside">
		<h2>Fun Facts about Tiger Sharks</h2>
		<p>Old-school two column - dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
		quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
		consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
		cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	</div>

</div>


<!-- not sure if I will teach this.-->

 <div id="css-table">
     
     <div style="display: table-cell; vertical-align: top; text-align: left; width: 33%; padding: 10px;">
    	<p>New-school two column -  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    	<ol>
    		<li>Shark item 1</li>
    		<li>Shark item 2</li>
    		<li>Shark item 3</li>
    		<li>Shark item 4</li>
    		<li>Shark item 5</li>
    	</ol>
     </div>

      <div style="display: table-cell; vertical-align: top; text-align: left; padding: 10px;">
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </div>

       <div style="display: table-cell; vertical-align: top; text-align: left; padding: 10px;">
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    	tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    	consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    	proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
     </div>


   </div>


<div id="video">
	<video controls>
	  <source src="shark-attacks.mp4" type="video/mp4">
	Your browser does not support the video tag.
	</video>

	<h3 style="margin-top: 25px;">Shark owners with their pet tiger sharks - at a local shark-park.</h3>
</div>


<div id="pagefooter">All shark's rights reserved.</div>

</div>
</body>
</html>
```