#! /usr/bin/env node 
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: 'please guesss a number',
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation you guess a right number");
}
else {
    console.log("you guessed a wrong number");
}
