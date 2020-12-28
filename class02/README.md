## Basics of HTML, CSS & JS

### Chapter 2: (pp.40-61)

There are two types of HTML tags both serve different puposes:

* Structural markups: these markups are used for indicating the importance of a certain text such as headings.

* Semantic markups: these markups provide extra information about a certain text such as qouted text.

1- Structural tags: here are some examples on some of them
   
  1.`<h1-6></h1-6>`: heading tags, the size of the text gets larger as the number dencreases.

  2.`<p></p>`: adding paragraph.

  3.`<b></b>`: for bold text.

  4.`<i></i>`: for italic text.

  5.`<sup></sup>`: adding power to a number.

  6.`<sub></sub>`: adding subscript.

  7.`<br></br>`:line break and start new line.

  8.`<hr>/<hr>`:adding vertical line and start new line.


2- Semantic markups:
  
  1.`<strong></strong>`: this markup tag has the same effect as `<b></b>`, but it's used when you want to use it to indicate that the marked word has a stong effect on the overall meaning of the text.

  2.`<em></em>`: this markup tag is used when there is word that subtly changes the meaning of a sentence., it has the same effect as `<i></i>`.

  3.`<q></q>`: to indicate short qouted text in a paragraph .

  4.`<blockquote></blockqoute>`: for qouting a paragraph.

  5.`<abbr title-"message"></abbr>`: adds abbreviation, this command is used in HTML5, whereas in HTML4 we use `<acronym title-"message"></acronym>`.
  
  6.`<cite></cite>`: you use this element when want to refer to piece of work or something, it gives an italic effect to the text.

  7.`<dfn></dfn>`: for defining a word.

  8.`<del></del>` and `<ins></ins>`: *del* is used when adding a deleted word effect and *ins* is for replacing that deleted text.
  
  9.`<s></s>`: has the same effect as `<del></del>` but it's used for example when you make a sale on an item and you want to scratch the old price.


### Chapter 10: (pp.226-245)

CSS puts every HTML element inisde of multiple boxes which we call *box model*, so you apply something from CSS on your HTML code, what happens is one or more of these boxes' characteristics change whether it is the size or the color ... etc.

So how you select an HTML element in CSS ?

Let's say for example that i want to select `<h1></h1>` and change the font color to red, i would do the following:

```
h1 {
   color:red;
}
```
*h1* is CSS selector.
*color* property
*red* value.

There different types of selectors in CSS which allow to be more specific in your selection, and here some of them:

![CSS selectors](https://codeandwork.github.io/courses/cs/media/css-selectors.jpg)

In order for you to link CSS code to your HTML code there 3 ways: 

1-Inline styling.

2-Internal CSS.

3-External CSS.

![CSS linking](https://www.bitdegree.org/learn/storage/media/images/8c4493d3-110c-4a95-8b70-7626ce2d2f4e.jpg)


### Chapter 2: “Basic JavaScript Instructions” (pp.53-84)

Let's talk about variables in JS, variables are containers where you can store values and you can reuse it or change it and use it again.

![variables types in JS](https://image.slidesharecdn.com/js4ap02datatypes-140218120947-phpapp01/95/javascript-for-abap-programmers-27-data-types-24-638.jpg?cb=1392725429)

JS rules for naming variables:

1-variable name can only begin with letter, dollar sign, or underscore.

2-variable name can contain anything except for dot(.) and dash(-).

3-you can't use keywords.

4-JS is case sensitive language.

5-It's preferred that you follow camel case convention of naming variables.

6-The name should represent what the variable is about.


Typing comments in JS can be done by:

* `//` for single lined comments.
* `/* */` for multi-lined comments.


There are many types of operators:

1-To assign variable we use `=`, for example: 

  `var x=1 ;`.

2-Arithmatic operators: (`+,-,*,/,++,--`) and they can be used as follows:

```
  x=5+5 ;
  ++x=11;
  --x=9;
```

3-String operators: they are the same as arithmatic operators but they are used for adding for example two strings together:

   `x="H" + "i" = Hi ;`

4-Comparsion Operators: (`<,>,=,<=,=>,!=`) : from their name they are used for comparing two inputs:

   `x=5\<1 ;`

5-Logical Operators: (`&&`"and",`||`"or",`!`"not")

For more detailed information, check the image under

![Expressions and operators](https://lh3.googleusercontent.com/proxy/XsujZBfQ5tmfhqxc8TXOiGQSKT-XTnL9XiP3-EtLMTPSaqqAOoaIPcACzozbQl2ofh5FlI40KiaBYFJXoFwfEEBTRqDAwJGVtklhjzob)


### Chapter 4: “Decisions and Loops” only up to the section on switch statements (pp.145-162)

Loops in general are used when you want certain commands to be executed multiple times until certain condition is achieved.

The difference between while loops and for loops can be illustrated by showing the syntax for both commnads:

For Loops Syntax

```
for ("variable"="value 1";"variable" "comparsion operator" "value 2";"counter"){

    "the commands that you want them to be repeated";
}

``` 
The sequence of for loops is after "variable" is defined the condition statement will be checked if its resault was true the commands between the curly brackets get executed and then "counter" gets executed, and this goes on until the condition statement's results is false.

![For loops](https://www.homeandlearn.co.uk/javascript/images/chapter_3/for_loops.gif)

While Loops Syntax

```
while ("condition statement"){

    "the commands that you want them to be repeated";
}

``` 

While looops sequence is similar to for loops sequence, the commands will be executed after the condition statement is checked and the result is true, and this goes on until the condition statement's results is false.2

![While loops](https://i0.wp.com/pandabunnytech.com/wp-content/uploads/2018/12/js-while-loop.png?w=656)
