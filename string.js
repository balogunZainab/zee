const me = "Mahmoud";
const birthyear = 1991;
const job = "Teacher";
const year = 2024;
const description = "I'm " + me + " a " + (year-birthyear) + " years " + job + "!";
console.log(description)
console.log(`I"m ${me} a ${year-birthyear} years ${job}!`);

console.log( "start \n\
    next \n\
    line"
)
console.log(`start
your
project
tomorrow`)

//Decision Making: if/else statement

const age = 25;
const oldEnough = 18;
const passTest = age>=oldEnough;
if(age>=oldEnough){
    console.log(`Damola is old enough to drive 🚗`)
}else{
    console.log(`Sorry Damola, come back after ${oldEnough-age}years 🤔`)
};

const DOB = 1991;
let centuryNew;
if (DOB<=2000){
    console.log(`20th century`)
}else{
    centuryNew = "21st century";
    console.log(centuryNew)
}
