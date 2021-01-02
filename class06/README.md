### JS Object Literals; The DOM


#### Chapter 3: “Object Literals” (pp.100-105)

Objects are similar to variables, but they contain multiple values with different data types.Objects has two main components: *properties* and *methods*.
Variables in objects are called *properties*, whereas functions are called *methods*.

Objects can be defined as following:

```
var "name of the object"={
    property 1 : value 1,
    property 2 : value 2,
    property 3 : value 3,
               .
               .
               .
              etc
    
    "name of the method" : function(){
        "the action you want"
    }
};

```
This method of creating an object is called *literal notation*.

### Chapter 5: “Document Object Model” (pp.183-242)

When browser loads a page, it creates *DOM*, which is basically a way to represent the HTML page as tree model, as the following image:

![HTML DOM tree](https://www.w3schools.com/js/pic_htmltree.gif)

This allows Javascript to make changes on the HTML page, by selecting HTML elecments and changing their properties.

You can select HTML an HTML element by many different ways; similar to CSS, either by the tag name, class, or ID, using the following commands:

* `document.getElementsByTagName("name")`
* `document.getElementsByclassName("name")`
* `document.getElementById("id")`

You can change the content of the element, attribute value, and style, as follows:

* `element.innerHTML = new content`
* `element.attribute = new value`
* `element.style.property = new style`
* `element.setAttribute(attribute, value)`

Also, you can add or delete elements:

* `document.createElement(element)`
* `document.removeChild(element)`
* `document.appendChild(element)`
* `document.replaceChild(new, old)`
* `document.write(text)`         *which changes the HTML output stream*



