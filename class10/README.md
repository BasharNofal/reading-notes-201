### JS Debugging

#### JavaScript book, Ch. 10, “Error Handling & Debugging

JavaScript interpreter goes through two processes when running a code:

1- Preparation: where the interpreter goes through the code line by line and then hoists every variable and function at the top of the code before executing it.
And that can be noticed when calling a function before declaring it.

2- Execution: it's abovious from its name, here the interpreter assigns the values to the variable and executes the code.

##### Scopes

Basically scopes think of it like if you are on a certain line of the code and you have a variable that has been called, then can you see where the variable got declared from or not.

There are two types of variables when thinking about scopes: 

1- Global scope variables: the variables that get declared outside function and objects, and they can be accessed from any where in the code.

2- Local scope variables: the variables that get declared outside functions and objects, here you have to use special commands in order to access their values.

##### Debugging tips

* Run the code using different browser, because some errors can be caused by the browser.

* Use numbers instead of variables or console log a number to check whether the executioner reaches certain line or process of your code or not.

* Try to remove some parts of your code by commenting them.

* Explain the code to yourself step by step.

* Searching for the solution or what is causing the error in the internet.

* Use inspect element in the browser and any tool the might help you reviewing the code.

