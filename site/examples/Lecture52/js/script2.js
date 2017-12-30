// var rohitGreeter = {};
// rohitGreeter.name = "rohit";
// var greeting = "Hi ";
// rohitGreeter.sayHi = function () {
// 	console.log(greeting + rohitGreeter.name);
// }

(function () {
   var rohitGreeter = {};
   rohitGreeter.name = "rohit";
   var greeting = "Hi ";
   rohitGreeter.sayHi = function () {
     console.log(greeting + rohitGreeter.name);
   }

   window.rohitGreeter = rohitGreeter; // Made rohitGreeter a window/global object for access in global scope
                                       // rohitGreeter is window property now.
})();