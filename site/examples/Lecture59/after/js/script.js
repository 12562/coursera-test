$(function () { // Same as document.addEventListener("DOMContentLoaded")

// Jquery fuction name is "$" sign
// $ is a special function in jquery and its function is same as document.addEventListener("DOMContentLoaded")

   // In jquery same as navbarToggle
   // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
   $("#navbarToggle").blur(function (event) {
   	 var screenWidth = window.innerWidth;
   	 if (screenWidth < 768) {
   	 	$("#collapsable-nav").collapse('hide');
   	 	// collapse plugin hosted in bootstrap.min.js is based on jquery library
   	 	// So, we need to use jquery here. Hence, cannot use DOMContentLoaded event 
   	 }
   });
});