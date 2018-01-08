// Event handling
// DOMContentLoaded event allows javascript execution when html has been loaded
// (before css or javascript has been loaded.) This allows placing the script tag
// to be placed in the head tag instead of placing it in the body tag.
document.addEventListener("DOMContentLoaded",
  function (event) {
      function sayHello (event) {
        this.textContent = "Said it!"
        console.log(event);
  
         var name = document.getElementById("name").value;
         var message = "<h2>Hello " + name + "!</h2>";
         // document.getElementById("content").textContent = message ;
         document.getElementById("content").innerHTML = message;

         if (name === "student") {
              var title = document.querySelector("#title").textContent;
              title += " & Lovin' it!";
              //document.querySelector("#title").textContent = title;
              document.querySelector("h1").textContent = title;
         }
      }
      document.querySelector("button").addEventListener("click", sayHello);
      document.querySelector("body").addEventListener("mousemove",
        function (event) {
          if (event.shiftKey) {
            console.log("x: " + event.clientX);
            console.log("y: " + event.clientY);
          }
        }
      );
  }
);

// //console.log(document instanceof HTMLDocument);
// function sayHello (event) {
//    this.textContent = "Said it!"
//    console.log(this);
// 	// console.log(
//  //      document.getElementById("name").value
//  //    );
//    var name = document.getElementById("name").value;
//    var message = "<h2>Hello " + name + "!</h2>";
//    // document.getElementById("content").textContent = message ;
//    document.getElementById("content").innerHTML = message;

//    if (name === "student") {
//    	  var title = document.querySelector("#title").textContent;
//    	  title += " & Lovin' it!";
//    	  //document.querySelector("#title").textContent = title;
//    	  document.querySelector("h1").textContent = title;
//    }
//  }

 // Unobstrusive event binding
 // document.querySelector("button").addEventListener("click", sayHello);

 //document.querySelector("button").onclick = sayHello;