# Interactive Web Development : CHapter 1 (Basics)

## Ch1- The Basics

CSS stands for cascading style sheet.

### tag selectors

```html
<!DOCTYPE hmtl>
<head>
<title></title>
<style src="xxx.css"> <style>
<!-- src attribute in the css tag will look up for the css files. -->
</head>
```

Inside the XXX.css we could have

```css
h1{
  "declaration block"
}
p {
  " ; "
}
.function(class){
  " ;  "
}
```

> The declaration block contain the css rules. The ; separates the declarations.

Everthing in the web browser have a default setting.

### How css Works

> In css we have id selectors and class selectors.

```css
tagselector{
  property1:value1;value2;...;valueN
  .
  .
  .
  propertyN:value1;value2;...;valueN
}

/*id-seclector*/
#name{
  property1:value1;value2;...;valueN
  .
  .
  .
  propertyN:value1;value2;...;valueN
}

/*class-selector*/
.name{
  property1:value1;value2;...;valueN
  .
  .
  .
  propertyN:value1;value2;...;valueN
}
```

we will see the difference in the tags like this

```html
<tag class=".name"> </tag> <tag id="name"> </tag>
```

> Class can be applied on many different tags in the same page. Id can be applied on time (in a tag) in the same page.

When we have 2 set of css apply to one tags. One will win over another.

- CSS cascading: rules that decide which css selector wins when there is a conflict.

For example, an id selector is more important than a simple tag selector.

### CSS layout types

In css we have 4 types of design for the layout:

- static = Fixed pixel design or fixed width design.
- liquid = It flows and expands based on the size of the screen.
- adaptative = static design with some responsive design elements.
- responsive = responds based on the size of the window (the objects and images reflows).
