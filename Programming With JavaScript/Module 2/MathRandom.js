// generate decimal number between 0 and 0.99
var decimal = Math.random();
console.log(decimal);
// log the value of decimal multiplied by 10
console.log(decimal * 10);
// integer value
console.log(Math.round(decimal*10));

// round up any decimal number
var rounded1 = Math.ceil(0.0001);
var rounded2 = Math.ceil(0.5);
var rounded3 = Math.ceil(0.99);
var rounded4 = Math.ceil(1.01);
var rounded5 = Math.ceil(1.5);
var rounded6 = Math.ceil(2.99);
console.log(rounded1,rounded2,rounded3,rounded4,rounded5,rounded6);

var rounded1 = Math.round(0.0001);
var rounded2 = Math.round(0.5);
var rounded3 = Math.round(0.99);
var rounded4 = Math.round(1.01);
var rounded5 = Math.round(1.5);
var rounded6 = Math.round(2.99);
console.log(rounded1,rounded2,rounded3,rounded4,rounded5,rounded6);

var rounded1 = Math.floor(0.0001);
var rounded2 = Math.floor(0.5);
var rounded3 = Math.floor(0.99);
var rounded4 = Math.floor(1.01);
var rounded5 = Math.floor(1.5);
var rounded6 = Math.floor(2.99);
console.log(rounded1,rounded2,rounded3,rounded4,rounded5,rounded6);

var rounded1 = Math.trunc(0.0001);
var rounded2 = Math.trunc(0.5);
var rounded3 = Math.trunc(0.99);
var rounded4 = Math.trunc(1.01);
var rounded5 = Math.trunc(1.5);
var rounded6 = Math.trunc(2.99);
console.log(rounded1,rounded2,rounded3,rounded4,rounded5,rounded6);