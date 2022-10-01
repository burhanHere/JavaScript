//Simple Maths
let the = 5;
let tha = 45;

let vari;
vari = the + tha;
vari = the - tha;
vari = the * tha;
vari = the % tha;
vari = tha / the;

console.log(vari);


// Math Objects;
let varii;
//
varii = Math.PI;//this will return the value of PIE=3.14
//
varii = Math.E;//this will return the value of E=2.718281828459045
//
varii = Math.round(9.1);// this is used to roundoff the number written between the ().
//
varii = Math.ceil(90.5);//this is used to roundoff the number between () upwords;means that if the number is 80.5 then this becomes 81.'
//
varii = Math.floor(90.5);//this is used to roundoff the number between () downwords;means that if the number is 80.5 then this becomes 80.
//
varii = Math.sqrt(4);// used to take the square root of the number between ().
//
varii = Math.abs(-4);//this is used to give the absolute value of the number between ().
//
varii = Math.pow(2, 3);//this is used to solve the power of the number. the forst number is the digit of which you want to apply the power. and the second number is the digit which is the power of that number.
//
varii = Math.max(3, 54, 5, 45, 155, 545, 4, 5, 5, 4, 56, 5);//use to dispaly the maximum number from the given number between ().
//
varii = Math.min(3, 54, 5, 45, 155, 545, 4, 5, 5, 4, 56, 5);//use to dispaly the minimum number from the given number between ().
//
varii = Math.random();//this will generate a rendum number every times the page reloades.
console.log(varii);



//quiz:
//program to dispaly a rendom number between 60 to 70;
let randomNumber;
randomNumber = Math.floor(Math.random() * 70);
console.log(randomNumber);
