// Object literals and "this"
var literalCircle = { // new Object() ==> This object refers to the literalCircle object created.
    radius: 10,

    getArea: function() {
        var self = this;
        console.log(this);

        var increaseRadius = function () {
            self.radius = 20;
            //this.radius = 20;  // here this within the getArea function is referring to window function
        }                      // A bug with js. To get around this, use var self = this in the child function
                               // eg. within getArea function. So, we use self.radius in this fn.
                               // Fixed in ES6.
        increaseRadius();
        console.log(this.radius); 

        return Math.PI * Math.pow(this.radius, 2);
    }
};

console.log(literalCircle.getArea());