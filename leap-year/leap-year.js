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

console.log("hello world!");

const check2000 = moment([2000]).isLeapYear();
console.log("is 2000 a leap year?", check2000);

const check2001 = moment([2001]).isLeapYear(); // false
console.log("is 2001 a leap year?", check2001);

const check2100 = moment([2100]).isLeapYear(); // false
console.log("is 2100 a leap year?", check2100);
