// var mohitGreeter = {};
// mohitGreeter.name = "mohit";
// var greeting = "Hello ";
// mohitGreeter.sayHello = function () {
// 	console.log(greeting + mohitGreeter.name);
// }
(function (window) {
   var mohitGreeter = {};
   mohitGreeter.name = "mohit";
   var greeting = "Hello ";
   mohitGreeter.sayHello = function () {
     console.log(greeting + mohitGreeter.name);
   }

   window.mohitGreeter = mohitGreeter; // Made mohitGreeter a window/global object for access in global scope
                                       // mohitGreeter is window property now.
})(window);