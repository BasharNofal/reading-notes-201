## Qatad was the driver/Bashar was the navigator






### HTML Links, CSS Layout, JS Functions


####  Duckett HTML book

#### Chapter 4: Ch.4 “Links” (pp.74-93)

You can add links in your website using HTML by the following command:

`<a href="link">link title</a>`

You can use links to from another websites or from another page on the same website or even to reach a file available on your local device which is called *relative path*; for example let's assume that i want to reach a file named "notes.txt" inside of a folder named "new folder":

`<a href="new folder/notes.txt">any text</a>`

For creating a link that starts up the user's email application use *mailto* as follows:

`<a href="mailto:bashar@gmail.com">bashar</a>`

To open the link on a new blank page use the attribute *target* with the value *blank*:

`<a href="https://www.facebook.com/" target="blank"></a>`

You can add links that moves inside different section of the same page by using *id* attribute and include the id inside of the link, the same as we do in CSS:

```
<a href="#about-me">any text</a>
<h4 id="about-me">About me</h4>
``` 

#### Chapter 15: “Layout” (pp.358-404)


###  Duckett JS book:

#### Chapter 3 (first part): “Functions, Methods, and Objects” (pp.86-99 ONLY)

The command fucntion is used for calling series of commands by typing the name of the function, which makes the whole JS page more readable and easier to apply edits to.

function syntax:

Setting function can be done as follows:

function "the name of the function" ("argument"){

  "series of commands"*;
}
Calling function can be done as follows:

"the name of the function"("argument);

![function](https://s3.amazonaws.com/dashingd3js/d3-lesson-images/lesson-84/javascript-function-operator-call-versus-javascript-function-expression-call_720x355.png)


#### Pair Programming 

Pair programming is basically programming with a colleauge, simply, one being the *driver* who does what ever the other *navigator* tells him to do.

Pair programming has 