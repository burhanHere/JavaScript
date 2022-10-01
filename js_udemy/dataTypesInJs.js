//premitive data types
//+
// typeof operator

//String
const you = "ziyan";
console.log(typeof you);
//Numbers
const thisis = 54;
console.log(typeof thisis);
//Boolean
const thatis = true;
console.log(typeof thatis);
//Null
const youare = null;
console.log(typeof youare);//null will ge given the type of an object but it is a premitive datatype.this wrong answer is due to the bug in the language.
//Undefined
let your = undefined;
console.log(typeof your);//or
let yours;
console.log(typeof yours);
//Symbol
const weare = Symbol();
console.log(typeof weare);

//Refrance data types
//Array
const people = [`noor`, `zafar`, `zishan`];
console.log(typeof people);
//Object Literal
const theywill = {
 he: `she`,
 i: `you`,
 we: `thay`
}
console.log(typeof theywill);
//Dates
const todaysdate = new Date();
console.log(typeof todaysdate);