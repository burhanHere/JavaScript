//var,let,const

//var
var myName = `Burhan`;
console.log(myName);
myName = `Bilal`;
console.log(myName);

// Inetiating a variable
var thisName;
thisName = `ali`;
console.log(thisName);

// Can variable name can only contain letters, numbers, _, $
// Can not start with a number

// Multi word variable in different cases

var theVariabel = "zain"; // Camel case
console.log(theVariabel);
var the_variable = "zara"; // Underscore
console.log(the_variable);
var TheVariabel = "zoya"; //Pascal Case
console.log(TheVariabel);

//let
// it's exactly the same as a var. The only difference is that var has global scope and let has block level scope.

//const
const hisName = `subhan`;
console.log(hisName);
//assigning a value is compulsery for a const variable.
// values can't be reassigned to a const variable.

//const in case of objects
const objectObject = {
 name: "Burhan",
 age: "81"
}
console.log(objectObject);
console.log(objectObject.name + " " + objectObject.age);
// you can modify the propersies of the object but you can't reassign the value.
objectObject.name = "huzafa";
objectObject.age = "54";
console.log(objectObject.name + " " + objectObject.age);

//const  in case of array
const arrayArray = [`ibraheen`, 2, `5`, true]
console.log(arrayArray);
//you can not reassign the values but you can modify the values by using different methods.
arrayArray.push("sifyan", 90, false);
console.log(arrayArray);