/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */
//ES Modules Syntax

import { getSign, getZodiac } from "horoscope";

//commonJS syntax
//const moment = require("moment");

const inputDay = Number(process.argv[2]);
const inputMonth = Number(process.argv[3]);
const inputYear = Number(process.argv[4]);

async function birthSigns() {
  const astrologySign = getSign({ inputMonth, inputDay });

  const chineseZodiac = getZodiac(inputYear);

  console.log(
    `Your astrological sign is ${astrologySign} and your zodiac sign is ${chineseZodiac}`
  );
}

birthSigns();
