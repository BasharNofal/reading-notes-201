##  HTML Lists, CSS Boxes, JS Control Flow

###  Duckett HTML

#### Chapter 3: “Lists” (pp.62-73)

There are three types of lists in HTML:

1-Ordered list.

To add an ordered list, use the following commands:

```
<ol>
   <li<>item 1</li>
   <li<>item 2</li>      
   <li<>item 3</li>
          .
          .
          .
          etc
</ol>
``` 
where `<ol></ol>` indicates that this is an ordered list, and `<li></li>` the items in the list.


2-Unordered list.

```
<ul>
   <li<>item 1</li>
   <li<>item 2</li>      
   <li<>item 3</li>
          .
          .
          .
          etc
</ul>
``` 
where `<ul></ul>` indicates that this is an unordered list, and `<li></li>` the items in the list.

![Ordered and unordered lists](https://i.ytimg.com/vi/5tJBpZjMAbw/maxresdefault.jpg)

3-Definition list.

```
<dl>
   <dt<>term 1</dt>
   <dd>defintion 1</dd>

   <dt<>term 2</dt>
   <dd>defintion 2</dd>

   <dt<>term 3</dt>
   <dd>defintion 3</dd>
          .
          .
          .
          etc
</dl>
``` 
where `<dl></dl>` indicates that this is a definition list, `<dt></dt>` the term that you want to define, and `<dd></dd>` the defintion itself.

![Definition list](Capture.png)

And of course you can add list inside of another list which we call *nested list*.

#### Chapter 13: “Boxes” (pp.300-329)

Every HTML element is surrounded by multiple boxes, padding, border, and margin, this is called the *box model*.

*Padding* is the area between the content of the element and the border.

*border* is the area between the padding and the margin.

*margin* is the area between the border and the margins of the other elements around.

![Box model](https://www.kasandbox.org/programming-images/misc/boxmodel.png)

You can apply multiple changes to these boxes in CSS by selecting the HTML element and select which box that you want in property segment; here is an example:

![Editing boxes](https://developers.google.com/web/tools/chrome-devtools/css/imgs/inline-declaration.png)

You can use the property `display` to change the way a list of items looks; here are some values that you can apply in `display`:

* `inline`: to display the items next of each other.
* `block`: to display the item in seperate box, it's best noticed when adding this property on word inside of paragraph.
* `inline-Block`: displays the item inline with other items and maintain the charateristics of the block feature.
* `none`: removes the item as if it was not there from the beginning.

It's worth to mention that there is property called `visiablity` and by using the value of `hidden` it hides the item but not the boxes.


### Duckett JS 

#### Chapter 2: “Basic JavaScript Instructions” (pp.70-73)
