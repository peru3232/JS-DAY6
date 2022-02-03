//given variables:
var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

//bind output
const output = document.getElementById("output");

//parse variables to objects
const objSandwich = JSON.parse(sandwiches);
const objFries = JSON.parse(fries);

//create and output the text
output.innerHTML = `My favorite sandwich is a ${objSandwich.sandwich} which has approximately ${objSandwich.calories} calories, along with it I enjoy eating ${objFries.fries_size} which have about ${objFries.calories} calories.`