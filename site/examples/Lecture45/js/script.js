// Object creation
var company = new Object();
company.name = "Facebook";
console.log(company);
// company.ceo.firstName = "Mark";
// console.log(company);
// Output :: Uncaught TypeError: Cannot set property 'firstName' of undefined
//           Error above comes because company.ceo has not been defined yet

// Correct way for this
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";
console.log(company);
console.log("Company CEO name is: " + company.ceo.firstName);
console.log(company["name"]);

company.$stock = 110;
company["$stock 2 of company"] = 100;
console.log("Stock price is: " + company["$stock 2 of company"]);

var stockPropName = "$stock 2 of company";
console.log("Stock price is: " + company[stockPropName]);

// Lecture 45 part 2
// Better way: object literal
var facebook = {
  name: "Facebook",
  ceo:  {
  	firstName: "Mark",
  	favColor:  "blue",
  },
  "stock of company": 110
};  // Put this semicolon as soon as you create the object

console.log(facebook);