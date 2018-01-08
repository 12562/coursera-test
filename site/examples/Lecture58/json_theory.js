/*
   ==> JSON stands for 
            JavaScript Object Notation
    --> Lightweight data-interchange format
    --> Easy for humans to read and write
    --> Easy for machines to parse and generate JSON
    --> Completely independant of any language


   ==> Subset of Javascript object literal syntax... but with exceptions:
    --> Property names must be in double quotes
    --> String values must be in double quotes
  
   ==> Syntax for everything else is exaclty like for object literal

   ==> JSON Example
                       

    var jsonString = 
           Property name in quotes 
             ^          Value in qutoes 
             |            ^ 
       '{    |            |
           "firstName": "Mohit",
           "lastName" : "Sharma",
           "likesChineseFood": false,
           "numberOfDisplays": 2
        }'                                 Single quotes added because
                                          double quotes already present
                                           in property name and value
    
    --> JSON is NOT a Javascript Object Literal 
    --> JSON is just a string
    --> The syntax of JSON is based on object literal though
    --> Need to convert JSON into a JS object 

    ==> Converting JSON To String & Back to JSON
          
        converts from json string to object
        var obj = JSON.parse(jsonString);       
     
        converts from object to json string
        var str = JSON.stringify(obj); 
       
        
*/
