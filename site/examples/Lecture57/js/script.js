// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {

    // Unobstrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        var self = this;
        var name = "";

        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("/data/name.txt",
            function (request) {
              var name = request.responseText;
              document.querySelector("#content").innerHTML = "<h2>Hello " + name + "!";
            });

            // Assigning innerHTML here is incorrect because 
            // ajax is asynchronous and the ajax request made
            // executes and immediately returns to executes the 
            // following code. But, requested data is not available
            // immediately resulting in printing "Hello !"

            /*  document.querySelector("#content")
                 .innerHTML = "<h2>Hello " + self.name + "!";*/
      });
    }
);