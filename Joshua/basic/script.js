/*
Basic
Based on the following two Objects definitions:

var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;
print the following message within the browser: My favorite sandwich is a Hamburger which has approximately 260 calories, along with it I enjoy eating Large French Fries which have about 570 calories
*/

var sand = JSON.parse(sandwiches);
console.table(sand);

var fri= JSON.parse(fries);
console.table(fri);

document.getElementById("result").innerHTML+=`My favorite sandwich is a ${sand.sandwich} which has approx. ${sand.calories} calories. Along with it I enjoy eating ${fri.fries_size}, which have around  ${fri.calories} calories.`