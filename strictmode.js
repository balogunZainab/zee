"use strict";
let hasDriversLicense = false;
const passTest = true;
if(passTest)hasDriversLicense = true;
if(hasDriversLicense) console.log("I can drive");
// const interface = design;
const iPrivate = 478;
function logger(){
    console.log("This is my First Funtion");
}
logger();
logger();
logger();

function fruitProcessor (apple,orange){ 
    const juice = 4;
    const sweet =`The fruit Processor used ${apple} apples, and ${orange} oranges to make a sweet ${juice}`;
    return juice;
}
const drink = fruitProcessor(8,10);
console.log(drink)
console.log(fruitProcessor(3,4))