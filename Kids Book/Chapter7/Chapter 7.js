//Creating a prompt

// let name = prompt("Whats your name?");
// console.log("Hello " + name);

//Using confirm to ask a yes/no question

// let likesCats = confirm("Do you like cats?");
// if (likesCats) {
//  console.log("You're a cool cat!");
// } else {
//  console.log("Yeah, that's fine. You're still cool!");
// }

//Using alerts to give a player information

//alert("JavaScript is awesome!");

//Pseudocode

// Pick a random word
// While the word has not been guessed {
//  Show the player their current progress 
//  Get a guess from the player
//  If the player wants to quit the game {
//  Quit the game
//  }
//  Else If the guess is not a single letter {
//  Tell the player to pick a single letter
//  }
//  Else {
//  If the guess is in the word {
//  Update the player's progress with the guess
//  }
//  }
// }
// Congratulate the player on guessing the word 

//Coding The Game

//Choosing a Random Word

// let words = [
//     "javascript",
//     "monkey",
//     "amazing",
//     "pancake",
//     "fixing",
//     "documents",
//     "dishwasher"

// ];
// let word = words[Math.floor(Math.random() * words.length)];

// // // Creating The Answer Array

// let answerArray = [];
// for (i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }
// let remainingLetters = word.length;

// // //The Game Loop

// // // The game loop
// while (remainingLetters > 0) {

//     // Show the player their progress

//     alert(answerArray.join(" "));

//     // Get a guess from the player

//     let guess = prompt("Guess a letter, or click Cancel to stop playing.");

//     if (guess === null) {
//         // Exit the game loop

//         alert("Sorry to see you quit. The answer was " + word);

//         break;

//     } else if (guess.length !== 1) {
//         alert("Please enter a single letter.");

//     }

//     else {
//         // Update the game state with the guess
//         for (var j = 0; j < word.length; j++) {
//             if (word[j] === guess) {
//                 answerArray[j] = guess;
//                 remainingLetters--;
//             }
//         }
//     }
// }


// // Show the answer and congratulate the player

// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);



//Programming Challenges

//#2: Capital Letters

let words = [
    "javascript",
    "monkey",
    "amazing",
    "pancake"
];

let word = words[Math.floor(Math.random() * words.length)];

// Creating The Answer Array

let answerArray = [];
for (i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;

//LIMITING GUESSES

let numGuesses = word.length;

//The Game Loop

// The game loop
while (remainingLetters > 0 && numGuesses > 0) {

    // Show the player their progress

    alert(answerArray.join(" "));

    // Get a guess from the player

    let guess = prompt("Guess a letter, or click Cancel to stop playing.");

    if (guess === null) {

     alert("Sorry to see you quit. The answer was " + word);
     break;

    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");

    }

    else {

        numGuesses--;

        guess = guess.toLowerCase();

        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}


 alert(answerArray.join(" "));
 alert("Good job! The answer was " + word);
