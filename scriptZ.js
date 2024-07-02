"use strict"
//Function Declaration
console.log(calcAge1 (1996));
function calcAge1 (birthyear){
    return 2024 - birthyear
}
//function expression
const calcAge2 = function (birthyear){
    const age2 = 2024 - birthyear;
    return age2;
}
const check = calcAge2( 1996);
console.log(check);

const calcAge3 = birthyear => {
    return 2024 - birthyear;
}
console.log(calcAge3 (1996));

const yearsUntilRetirement = (birthyear, firstName) => {
    const age3 = 2024 - birthyear;
    const retirement = 60 - age3;
    return `${firstName} has ${retirement} yerars until retirement`;
}
console.log(yearsUntilRetirement(1996, "Zainab"));
console.log(yearsUntilRetirement(2006,"Damola"));
console.log(yearsUntilRetirement(2008, "Sodiq"));
console.log(yearsUntilRetirement(2010, "Hamdan"));

function cutPepper(rodo){
    return rodo *4;
}
function hotPepper(cameroon,nigeria){
    const checkCameroon = cutPepper (cameroon);
    const checkNigeria = cutPepper(nigeria);
    const hottest = `with my findings & research i can deduce that Cameroon has ${checkCameroon} pepper, while Nigeria has ${checkNigeria} pepper`
    return hottest
}
console.log(hotPepper(20,30));

const students = ["Sodiq", "Zainab", "Opeyemi", "Balogun", "Olanipekun", "Damola", "Hamdan","Paul", "Giwa", "Olorunshola", "Moyosore", "Salaudeen" ]
console.log (students [0]);
console.log (students[3]);
console.log(students[5]);
console.log(students.length);
console.log(students[students.length - 1]);
function calcAge (birthyear){
    return 2024 - birthyear;
}
//Array []
const years = [2006, 1996, 2005, 2004, 1998]
console.log(calcAge (years[0]));
console.log(calcAge (years[1]));
console.log(calcAge (years[2]));
console.log(calcAge (years[3]));
console.log(calcAge (years[4]));
const ages = [calcAge (years[0]), calcAge (years[1]), (calcAge (years[2])), (calcAge (years[3])), (calcAge (years[4]))]
console.log (ages);

// Assignment
const calcAveragescoredolphin = [(44+23+71)/3]; 
console.log(calcAveragescoredolphin);
const calcAveragescorekoala = [(55+54+49)/3];
console.log(calcAveragescorekoala);

function calcAvg(Score){
    return Score*2;
}
/*function Avgscores(Dolphins,Koalas){
    const scoreDolphins = 46;
    const scorekoalas = 52.67;
    const team = `With my calculation I can prove that neither ${scoreDolphins} or ${scorekoalas} has at least double the average of the other team`
    return team
}
console.log()/*/

const calcAverage = (a,b,c) => (a+b+c)/3;
console.log(calcAverage(5,10,15));
let scoreDolphins = calcAverage(44,23,71);
let scorekoalas = calcAverage(55,54, 49);
console.log(scoreDolphins, scorekoalas)


function checkWinner (avgDolphins, avgKoalas){
    if (avgDolphins >=2* avgKoalas){
        console.log(`Dolphins wins🎉 with (${avgDolphins} versus ${avgKoalas})`);
    }else if (avgKoalas >= 2* avgDolphins){
        console.log(`Koalas wins 🎉 with (${avgKoalas} versus ${avgDolphins})`);
    }else{
        console.log(`Nobody wins🤦‍♀️`);
    }
}
scoreDolphins = calcAverage(85,54,41);
scorekoalas = calcAverage(23,34,27);
console.log(scoreDolphins, scorekoalas)

const scores = checkWinner(scoreDolphins, scorekoalas);

//Array methods
const friends = ["Hamdan", "Damola", "Sodiq","Opeyemi" ]
console.log(friends)
//Add Elements
const pushed = friends.push("paul");
console.log(friends);

const ushift = friends.unshift ("Mahmoud");
console.log(friends);

const shifted = friends.shift();
console.log(friends);
const popped = friends.pop();
console.log(friends);
console.log(friends.indexOf ("Opeyemi"));
console.log(friends.indexOf ("Sodiq"));
console.log(friends.indexOf ("Damola"));
console.log(friends.indexOf ("Hamdan"));
console.log(friends.includes("Opeyemi"));
console.log(friends.includes("Sodiq"));
console.log(friends.includes("Damola"));
console.log(friends.includes("Hamdan"));
console.log(friends.includes("Paul"));
if (friends.includes ("Mahmoud")){
    console.log("Yay! you have a friend called Opeyemi")
}else{
    console.log("You don't have that name on your friend's list");
}

//Assignment//
const bill=100
function calcTip(bill){
    const tip = bill>=50 && bill<=300?bill*0.15: bill *0.20;
    return tip
}
//console.log(`The bill was ${bill}, the tip as ${calcTip} and i total value is ${bill + calcTip}`)
console.log(calcTip(100))

const Bill1 = [125, 555, 44] 
console.log(Bill1)
const tip1 = [calcTip(125), calcTip(555), calcTip(44)]
console.log(tip1)
const total= [Bill1[0]+tip1[0], Bill1[1]+tip1[1], Bill1[2]+tip1[2]
] 
console.log(total)

const MahmoudArray = [
    'Abdulmajeed',
    'Mahmoud',
    2024-1996,
    'Programmer',
    'Teacher',
    ['Sodiq', 'Damola', 'Opeyemi']
];
console.log(MahmoudArray);
console.log(MahmoudArray[0])
console.log(MahmoudArray[2])

const Mahmoud = {
    firstName: 'Abdulmajeed',
    lastName: 'Mahmoud',
    age: 2024-1996,
    firstJob: 'Programmmer',
    lastJob: 'Teacher',
    friends: ['Sodiq', 'Damola', 'Opeyemi']
};
console.log(Mahmoud);
console.log(Mahmoud.firstName);
console.log(Mahmoud.age);
//Bracket
console.log(Mahmoud["lastName"]);
console.log(Mahmoud["lastJob"]);
const nameKey = 'Name';
console.log(Mahmoud["last" + nameKey]);
console.log(Mahmoud["first" + nameKey]);

Mahmoud.location = "Nigeria";
Mahmoud["twitter"] = "@Aladagbangba";
console.log(Mahmoud);

const wantToKnow = prompt("What do you want to know about Mahmoud? Choose from the following: firstName, lastName, age, firstJob, lastJob, friends, location twitter")
if (Mahmoud[wantToKnow]){
    console.log(Mahmoud[wantToKnow]);
}else{
    console.log("Nay! Attention!!!🤔, you have entered the wrong output please kindly choose from the following: firsrName, lastName, age, firstJob, lastJob, friends, location & twitter, Thank You!!!");
}
// const bestFriend Opeyemi
console.log(`${Mahmoud["firstName"]} has ${Mahmoud.friends.length}  friends and ${Mahmoud.friends[2]} is my bestfriend`)

const fullName = MarkMiller
const MarkMillers Mass = 78kg
co