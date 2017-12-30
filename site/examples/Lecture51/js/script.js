// Closures
function makeMultiplier (multiplier) {
	// var multiplier = 2
    
    // Inner function gets following things:
    //    1) Gets its own execution environment (so it is isolated from everything else)
    //    2) Gets a special "this" variable.
    //    3) Gets a reference to its outer lexical environment. So, when a variable is referenced
    //       , the variable is looked in the current lexical environment and if not found 
    //       then it is looked in the outer lexical environment & so on till variable is found.
	function b() {   
		console.log("Multiplier is: "  + multiplier);
	}
	b();
	// The return statement does not create its own lexical environment because this isn't
	// a function execution. This is just a function value. So, the function in the return
	// statement does not get its own "this" variable. It does not get an outer reference
	// It simply gets returned to the caller.
	return (
       function (x) {
       	  return multiplier * x;
       }
		);
	// When a function is returned as a return value for a function, its outer level lexical 
	// environment is preserved for the returned function. This allows the doubleAll execution
	// environment to access the multiplier variable from its preserved outer lexical environment.
	// This is how closure works.

}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10)); // doubleAll is the function that actually gets executed and so 
                            // it gets its own execution environment, its own variable env.