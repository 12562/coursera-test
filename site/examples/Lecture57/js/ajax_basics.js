/* AJAX stands for Asynchronous Javascript and XML
  * While Ajax started with XML, very few apps use it nowadays
    - Plain text(at times as html) and JSON is used instead


  * Traditional Web App flow

  ----------------
  |  Web  page   |
  |              |
  |<html>        |
  |...           | \
  |<button...>   |  \
  |...           |   \ Button is pressed
  |</html>       |    \  (HTTP request sent)
  ----------------     \
                        \ ----------------
                         \|              |
                         /|              |
                        / |              |
                       /  |    SERVER    |   
               Respose/   |              |
           (new page)/    |              |
                    /     |              |
                   /      ----------------
  ----------------/
  |   Web Page    |
  |               |
  |<html>         |   Even if returned page is
  |...            |    99% identical to original
  |<button...>    |
  |...            |
  |</html         |
  -----------------


      * Ajax Web App Flow


  ----------------                      --------------
  |  Web  page   |  HTTP Request sent   |            |
  |              | -------------------> |            |
  |<html>        |   by javascript      |            |
  |...           |                      |   SERVER   |
  |<button...>   |   Response:          |            |
  |...           |<---------------------|            |
  |</html>       | Small piece of data  |            |
  ----------------  that's inserted to  --------------
                     current page


         ==> Faster response
           * Less bancwidth, nicer experience for user

*  Synchronous Exection
   -->  Execution of one instruction at a time
   -->  Can't start execution of another instruction until the first instruction finished its execution

* Asynchronous Exectuion
   --> Execution of more than one instruction at a time
   --> Asynchronous instruction returns right away
   --> The actual execution is done in a separate thread or process

* How is AJAX possible if javascript is syncronous?

   ==> How does AJAX work then?

      --> Javascript engine is not the only thing that lives in the browser.
      --> For eg. there is an event queue, html rendering engine, webGL, HTTP requestor etc.

       Browser
    ---------------------------------------------------------------
    |                                                             |
    |   Event                           HTML                      | 
    |   Queue <----                     Rendering                 |  
    |             |                        ^                      |     
    |             |--Javascript------------|                      |              
    |                  Engine                                     |
    |               (syncronous)                                  |
    |                    |                                        |
    |    webGL <---------|----------------> HTTP Requestor        |
    |                                      (asyncronous)          |
    |                                                             |                  
    |--------------------------------------------------------------


      Ajax Process

   Javascript Engine                             HTTP Requestor

   js code line                                 ---------------    
   js code line          Address JS function    |             |
   make Ajax request  ----------------------->  |             |
   js code line             response handler    |             |
   js code line                                 |             |
   js code line       <------------------------ |             |
                         callback function      ---------------


 So we have the Javascript engine and we have this HTTP requestor component, and
 the Javascript engine is going to have some Javascript line of
 code being executed.
 Then another Javascript line of code being executed.
 Then finally it comes to a Javascript line that executes an Ajax request.
 So what happens at that point?
 Well at that point, the Ajax request uses a special Javascript object
 to reach out to the HTTP requester component.
 And notice what I am indicating here on the slide
 is that the next line of Javascript code executes it right away.
 The response of the HTTP requestor is not waited on.
 Instead, when we make the actual Ajax request and reach out to this HTTP
 requestor component, along with our request, we pass in an address
 of a Javascript function that is going to serve as the response handler for
 when the response from the other server or this HTTP requestor comes back.
 However, meanwhile, we continue on our merry way, and
 the Javascript engine keeps executing one line at a time.
 At certain point, it's executed all the code it can, and
 its execution stack is empty.
 Even that point, the HTTP requestor is done and
 has received its response from our server, it may, at that point,
 use that address of that Javascript function that we gave it to start with and
 reach out back to the Javascript engine and execute the handling of the response.
 And that's the callback function, that's the function that's going to handle
 the server response, so that's the basic AJAX process