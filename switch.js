
const day = "Tuesday";
switch (day) {
    case "Monday" :
        console.log("I will pray and fast")
        break;
    case "Tuesday" :
        console.log("I will come to the hub")
        break;
    case "Wednesday" :
        console.log("I will go to my Mom's shop")
        break;
    case "Thursday" :
        console.log("I will fast and pray")
        break;
    case "Friday" :
        console.log("I will go for Jumaa't ")
        break;
    case "Saturday" :
        console.log("House Chores")
        break;
    case "Sunday" :
        console.log("Sleep and Movies")
        break;
    default :
    console.log("Not the right input")
}

if( day === "Monday"){
    console.log(`I will pray & fast`)
}else if (day === "Tuesday"){
    console.log(`I will come to the hub`)
}else if(day ==="Wednesday"){
    console.log(`I will go to my mom's shop`)
}else if(day ==="Thursday"){
    console.log(`I wil fast & pray`)
}else if(day === "Friday"){
    console.log(`I will go for Jumaa't`)
}else if(day ==="Saturday"){
    console.log(`House Chores`)
}else if(day ==="Sunday"){
    console.log("Sleep & Movie");
}else{
    console.log("not the right input")
}
   
// statement
// let Y = 23;
// age = 23
// if(age>=18){
//     console.log("you are full age");
// }else{
//     console.log("you are not a full age");
// }
// console.log(`I am a beginner in web dev $ {if(age>=18)}`);

// const Check = age>=18? "You are a Full age": "You are not a Full age";
// console.log(Check)

// const Age = 23;
// let School;
// if(age>=18){
//     School = "active"; 
// }else{
//     School = "Inactive"
// }
// const age = 23;
// const session = age>=18 ? "Eligible For School": "Not eligible for school"
// console.log(`You are ${age>=18 ? "Eligible For School": "Not eligible for school"`}`);


const age = 23
age>=18? console.log("I am a Full Age."): console.log("I am not a Full Age");
const me = age>=18? "I am a Full Age.": "I am not a Full Age";
console.log (me);

const bill = 40
const tip = bill>=50 && bill <=300? bill *0.15: bill * 0.20;
console.log(`The bill was ${bill}, the tip as ${tip} and the total value is ${bill + tip}`)