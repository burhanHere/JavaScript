//
//Type Conversion
//the conversion of one type of date in to an other type.
//

let theVariable;
theVariable = 5;
//string() function:-
//
// Number to String:
theVariable = String(54);
//first its solving the expression then the ansrew isconverthed to string.
theVariable = String(4 * 4);
theVariable = String(4 + 4);
// Bool to String:
theVariable = String(true);
// Date to String:
theVariable = String(new Date());
// Array to String:
theVariable = String([`the`, 3, 3, 5, 45, 35, 345, 3425,]);


//toSring() method:-
//
// Number to String:
theVariable = (4).toString();
// Bool to String:
theVariable = (true).toString();


//number() functin:-
//
//Numaric-String to Numbers:
theVariable = Number("52.4165");
//Bool to Numbers:
theVariable = Number(true);
theVariable = Number(false);
//Null to Number:
theVariable = Number(null);
//Alphabetic-String to Number:
theVariable = Number(`my name is Burhan.`)
//Array to Number:
theVariable = Number([`this`, 524, `42`, `try`]);
/*or*/theVariable = Number([1, 2, 5, 4])


//pareseInt() Function:-
//
theVariable = parseInt(10);
theVariable = parseInt(10.12);
// parseFloat() Function:-
//
theVariable = parseFloat(120.524);

//Outputs:=
console.log(theVariable);
console.log(typeof theVariable);
/*
.length only works with string.
*/
// console.log(theVariable.length);
console.log(theVariable.toFixed(1));
//toFixed() is used to set the number of decimal point values in number.
//this only works with numbers.

//
//Type Coersion:
//Convertion of one type of data in to an other by the java script  automatically.
//
var yahiWala = `Muhammd `;
const yaWala = String(`Burhan`);
let woWala = 65;
console.log(yahiWala + yaWala);
console.log(yaWala + woWala);





