mohitGreeter.sayHello();
rohitGreeter.sayHi();

// Since, function is only a special type of object(value), we can assing it to a variable a. 
// So, we can wrap it up in brackets.
//var a = (function () {
// 	console.log("Hello Coursera!");
//});

// We execute a function by putting parenthesis following the function name.
//a();


// It follows that we can invoke the function inline by not defining the variable a at all 
// by putting parenthesis right after the function object declaration as follows.
// Immediately Invoked Function Expression (IIFE)
(function (name) {
    console.log("Hello " + name);
})("Coursera!");
