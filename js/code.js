/* The Drive-Rite Insurance Company provides automobile insurance policies for drivers. Code the following:
A program that accepts insurance policy data, including a policy number, customer last name, customer first name, birth date,
premium due date (month, day, and year), and number of at-fault driver accidents in the last three years.
Calculate customer age and set monthly insurance premium using the following criteria:
Base price = $100
Age >15 && < 30 = + $20
Age >= 30 && < 45 +10
Age >=60 +30
Each at-fault accident = + 50
Use proper recursion looping and input validation/sanitization.
*/

"use strict";
const PROMPT = require('readline-sync');
let ageYear, policy, lastName, firstName, birthDay, birthMonth, birthYear, currentMonth, currentDay, currentYear, accident, accidentPrice, dueDate, agePrice, finalPrice;
const basePrice = 100;
const accidentThing = 50;

function main() {
    setPolicy();
    setLastName();
    setFirstName();
    setBirth();
    setDate();
    setDueDate();
    setAgePrice(ageYear);
    setAccidentPrice();
    setFinalPrice();
    printResults();
}

main();

function setPolicy() {
    policy = PROMPT.question('\n What is the policy number for your insurance? ');
}

function setLastName() {
    lastName = PROMPT.question('\n What is the last name on the insurance policy? ');
}

function setFirstName() {
    firstName = PROMPT.question('\n And what is the first name on the policy? ');
}

function setBirth() {
    birthMonth = PROMPT.question('\n What month were you born in? ');
    birthDay = PROMPT.question('\n What day? ');
    birthYear = PROMPT.question('\n And what year? ');
}

function setDate() {
    currentMonth = PROMPT.question('\n What is the month currently? ');
    currentDay = PROMPT.question('\n What is the day currently? ');
    currentYear = PROMPT.question('\n What is the current year? ');
    ageYear = currentYear - birthYear;
}

function setAgePrice(ageYear) {
    if (ageYear >= 15 && ageYear < 30) {
        return agePrice = 20;
    } else if (ageYear >= 30 && ageYear < 45) {
        return agePrice = 10;
    } else if (ageYear >= 45 && ageYear < 60) {
        return agePrice = 15;
    } else if (ageYear >= 60) {
        return agePrice = 30;
    }
}

function setAccidentPrice() {
    accident = PROMPT.question('\n How many at-fault accidents have you had? ');
    accidentPrice = accident * accidentThing;
}

function setDueDate() {
    dueDate = PROMPT.question('\n What is the due date of your insurance policy? ');
}

function setFinalPrice() {
    finalPrice = basePrice + agePrice + accidentPrice;
}

function printResults() {
    console.log("\n Greetings " + firstName + " " + lastName + ". You are " + ageYear + " years old. Your policy number is " + policy + ". Your policy is due on the " + dueDate + ".");
    console.log("\n The final price for your insurance policy is " + finalPrice + ".");
}