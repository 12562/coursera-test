// Arrays are objects
var array = new Array();
array[0] = "mohit";
array[1] = 2;
array[2] = function (name) {
    console.log("Hello " + name);
};
array[3] = {course: "HTML, CSS & JS"};

console.log(array);
console.log(array[1]);
array[2](array[0]);
console.log(array[3].course);

// Short hand array creation
// var names = [
//   { name : "Mohit"}, 
//   { name : "Rohit"}, 
//   "Satish"];
// console.log(names);

var names = ["Mohit", "Rohit", "Satish"]

for (var i = 0; i < names.length; i = i + 1) {
    console.log("Hello " + names[i])
}

names[100] = "Jim";
for (var i = 0; i < names.length; i = i + 1) {
    console.log("Hello " + names[i])
}

var names2 = ["Mohit", "Rohit", "Satish"]

var myObj = {
    name: "Mohit",
    course: "HTML/CSS/JS",
    platform: "Coursera"
};

for (var prop in myObj) {
    console.log(prop + ": " + myObj[prop]);
}

for (var name in names2) {
    console.log("Hello " + names2[name]);
}

names2.greeting = "Hi!";

for (var name in names2) {
    console.log("Hello " + names2[name]);
}

// Arrays are objects. So, here the keys are 0,1,2 and greeting