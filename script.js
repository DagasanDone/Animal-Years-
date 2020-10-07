//writing age 
//let myAge = 30 ; 
let myAge = prompt('What\'s your age? ') ;
//Entering first two years 
let earlyYears = 2 ;
myAge = myAge -2 ;
//Calculate the later years 
let laterYears = myAge;
//Each year following equates to 4 dog years. 
laterYears = laterYears*4 ; 

console.log(earlyYears);
console.log(laterYears);
//Calculate the total age 
let myAgeInDogYears = earlyYears + laterYears ; 
let myName = "ASUMAN"; 
// to writing myName with small letters
console.log(myName.toLowerCase()); 
//Using Interparation  
console.log(`My name is ${myName} I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
