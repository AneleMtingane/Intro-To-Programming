// If Statements

// let name = "Anele";
// console.log("Hello " + name);
// if (name.length > 7) {
// console.log("Wow, you have a REALLY long name!");
// }

//If....Else Statements

// let name = "Nick";
// console.log("Hello " + name);
// if (name.length > 7) {
//  console.log("Wow, you have a REALLY long name!");
// } else {
//  console.log("Your name isn't very long.");
// }

//Chaining if....Else statements

// let lemonChicken = false;
// let beefWithBlackBean = false;
// let sweetAndSourPork = false;
// if (lemonChicken) {
//  console.log("Great! I'm having lemon chicken!");
// } else if (beefWithBlackBean) {
//  console.log("I'm having the beef.");
// } else if (sweetAndSourPork) {
//  console.log("OK, I'll have the pork.");
// } else {
//  console.log("Well, I guess I'll have rice then.");
// }

// Try It Out

// let name = "Nick";
// if (name === "Anele"){
//     console.log("Hello me");
// } else {
//  console.log("Hello stranger!");
// }

// While Loops

// let sheepCounted = 0;
// while (sheepCounted < 10) {
// console.log("I have counted " + sheepCounted + " sheep!");
//  sheepCounted++;
// }
// console.log("Zzzzzzzzzzz");

//For Loops

// let sheepCounted = 0;
// for(sheepCounted=0; sheepCounted<10;sheepCounted++)
// {console.log("I have counted " + sheepCounted + " sheep!")}

// console.log("Zzzzzzzzzzz");


// let timesToSayHello = 5;
// for (i = 0; i < timesToSayHello; i++) {
//  console.log("Hello!");
// }

//Using For loops with arrays and strings

// let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
// for (i = 0; i < animals.length; i++) {
//  console.log("This zoo contains a " + animals[i] + ".");
// }

// let name = "Anele";
// for (i = 0; i < name.length; i++) {
//  console.log("My name contains the letter " + name[i] + ".");
// }

// for ( x = 2; x < 10000; x = x * 2) {
//     console.log(x);
//    }

//Try It Out

// for ( x = 3; x < 10000; x = x * 3) {
//     console.log(x);
//    }

// let power = 3;

// while (power < 10000) {

// console.log(power);

// power = power*3;

// }

// console.log("Done");

//Programming Challenges

//#1: Awesome Animals

// let animals = ["Cat","Fish","Lemur","Komodo Dragon"]

// for(i = 0; i < animals.length; i++)
// {
// console.log("Awesome " + animals[i]);

// }

//#2: Random String Generator

let alphabet = "abcdefghijklmnopqrstuvwxyz";

// let randomIndex = "";


let randomString = "";
let i = 0;


while (i < 6) {
    
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];

    i++;
}
console.log(randomString);












































































































