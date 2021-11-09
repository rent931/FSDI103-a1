console.log("script");
var user="Miguel";
let age=99;//decleration and assign
age=48;
let userName=("Tom");

let student;//decleration
student=true;//assign 

console.log("student");
console.log("Name: " + userName + ",\nAge: " + age + "\nStudent: " + student);

let tmp=`Name: ${userName} \nAge:${age} \nStudent: ${student}`;
console.log(tmp);

//Excercise 1
let numberChildren=1;
let partnerName="Kama";
let geoLocation="Hawaii";
let jobTitle="Financial Engineer"

document.write(`<h3>You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberChildren} kid.`)

let yourName="Miguel";
let userEmail="gg123@gmail.com";
let userPassword="password123";
let nAge="27"
let userLocation="USA";
let userSalary=(10000*12);
let petName="Oliver Stone";
let petAge="2 Years";
let petBreed="Shih Tzu";
let favLocation="dog park";
let birthPlace="Texas";
let numberSiblings="2";
let militaryBranch="Army";
let myHobby="lifting";
let schoolLocation="UH Manoa";
let favCar="Lambo truck";
let dreamVacay="Peru";
let familyOrgin="Spain";
let favFood="Tacos";
let favDrink="Beer";
document.write(`<p>My name is ${yourName}, my email is ${userEmail} and I make ${userSalary} a year.`);
document.write(`<p>My dog's name is ${petName}, he is ${petAge} old. He is a ${petBreed} and he loves to go to the ${favLocation}. `);
document.write(`<p> About friends and Family: Birth place:${birthPlace}, sibilings: ${numberSiblings}, Military branch: ${militaryBranch}, hobby: ${myHobby}, graduated from: ${schoolLocation}, Favorite car: ${favCar}, Dream vacatio: ${dreamVacay}, Family origin: ${familyOrgin}, Favorite food: ${favFood}, Favorite drink: ${favDrink}. `)