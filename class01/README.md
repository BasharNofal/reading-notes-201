## Introductory HTML and JavaScript

### CH 1

In order to build a website you need a strcuture to your website, this can be done by *HTML* and *CSS*.

HTML adds elements to websites and by elements I mean text, images, links ... etc, whereas CSS changes the look of web pages by adding colors or changing the size of a certain text ... etc.

HTML uses *HTML elements* which consist of openning and closing *tags* between which where the HTML code is written as shown below 

```

<html>
html code 
</html> 

```

There are many different tags in HTML that have many different finctions, and by add *attributes* which describe or provide more information about the HTML elements, attributes also have value that provides inforamtion about the attributes, here is an example about adding an image to a webiste:

`<img src="the image link">`

*src* called attribute and the link itself called attribute value.

here I should mention that *img* element is self closing tage so you don't need to add closing tag.

### CH 8

There are many versions of HTML with different tags and attributes, and for new features to appear for you when browsing a website you need to have the newest version of the browser.

Some HTML versions you need to specify at the beginning of your code which version you are using, this can be done by:

`<!Doctype html version>`

Although browsers can idnetify which version you are using with exception for *XHTML*.

In order to add comment in HTML we use `<!-- -->` as follows:

`<!--this is a comment-->`

There are attributes used for identifying certain HTML elements; such as
*class* and *id* which we will mainly use when adding a certain design to the elements with a certain class or id.

The id attribute is to uniquely identify an element, whereas class is to identify a group of elemnts with the same class.

`<p class="class">any text</p>` *the same for id*

To add an *elements block* we use many different elements:

* `<ul></ui>` *add unodered list*

* `<ol></oi>` *add odered list*

* `<li></li>` *add items in a list*

* `<h1></h1>` *add heading*

* `<p></p>` *add paragraph*

![lists in HTML](https://clarkwp.files.wordpress.com/2013/10/lists_and_nested_lists_in_wordpress.png?w=311)

To add an *inline element* we use these elements:

* `<b></b>` *bold text*

* `<em></em>` *Emphasized text*

To group a set of elements we use `<div></div>` which makes these elements start on a new line, in addition to that; adding class or id to *div* allows you apply CSS style on these elements.

Similar to *div*; `<span></span>` allows you to identify elements but on the same line.

`<iframe></iframe>` makes a window in your web page to another web page, in other words you can operate on two different web page while your actually your operating on one web page.

![iframe](https://addons.cdn.mozilla.net/user-media/previews/full/203/203354.png?modified=1543521066)

To add information about your website we use `<head></head>` element where you use other elements in it to add a title for example and description about your website as follows:

```

<head>

<title>your website title</title>
<meta>description />

</head>

```

**Escape Characters**

To write special characters in HTML you have to use escape characters.
Basically they are group of symbols that tranlate into different characters such as the copy rights symbol.

![escape characters](https://i.pinimg.com/originals/e9/06/5f/e9065fb4413e79caec092dbc14e1a6cf.jpg)

