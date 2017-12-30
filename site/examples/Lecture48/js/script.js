// function test () {
// 	console.log(this); // this here is an object of type window
// 	console.log("Hello Coursera!");
// 	this.myName = "mohit";
// }

// test();
// console.log(window.myName);

// Function constructors
function Circle (radius) {
    this.radius = radius;

    /* Defining function in the following way would result 
       in the getArea property being redefined everytime 
       a new object of type Circle is defined */
    // To correct this, use prototype.
    // this.getArea = function () {
    //     return Math.PI * Math.pow(this.radius, 2);
    // };
 }

 /* A prototype function/object should not be written within
    the Circle function/object as this will result in reexecution of the
    prototype function every single time a new Circle function/object
    is created and the same memory space would be overwritten 
    every single time an object of this type is created.
 */
 Circle.prototype.getArea = function () {
 	return Math.PI * Math.pow(this.radius, 2);
 }


var myCircle = new Circle(10); // new Object();
// Caution : Not writing new keyword would make the above statement a 
//           simple function call to circle which does not return anything.
//           So, the myCircle variable would be undefined. 
console.log(myCircle);
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);


