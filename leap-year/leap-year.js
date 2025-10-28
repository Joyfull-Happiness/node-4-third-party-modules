/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
------------------------------ */

//ES Modules Syntax
import moment from "moment";

//commonJS syntax
//const moment = require("moment");

const input = process.argv[2];

console.log("hello world!");

const check2000 = moment([2000]).isLeapYear(); //true
console.log("is 2000 a leap year?", check2000);

const check2001 = moment([2001]).isLeapYear(); // false
console.log("is 2001 a leap year?", check2001);

const check2100 = moment([2100]).isLeapYear(); // false
console.log("is 2100 a leap year?", check2100);

// check if the year is a leap year (moment gives true or false)
const checkLeapYear = moment([input]).isLeapYear();

// show the result using if/else
if (checkLeapYear) {
  console.log(`${input} is a leap year`);
} else {
  console.log(`${input} is not a leap year`);
}
