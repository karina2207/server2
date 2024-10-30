# Random Data Generator

A simple library for generating random data such as names, numbers, and dates.

## Installation

```bash
npm install random-data-generator




const { getRandomName, getRandomNumber, getRandomDate } = require('random-data-generator');

console.log(getRandomName());
console.log(getRandomNumber(1, 100));
console.log(getRandomDate(new Date(2020, 0, 1), new Date()));