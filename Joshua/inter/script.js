/*
Intermediate
Create a JSON file which contains the following details per employee:

Unique ID
First Name
Last Name
Email address
Job Title
Salary
Fill the JSON file with meaningful data for 10 Employees. Print each employee's details in a table which will look representative and easily readable for the management team.


*/

/*
let mydata = JSON.parse(employees); // convert string into an object

console.log(mydata); // prints converted object into the console

// Prints data from Object1

document.getElementById('results').innerHTML += "My name is " + mydata[0].firstName + " and I am working as a " +

    mydata[0].jobTitle + "<hr>";

// Prints data from Object2

document.getElementById('results').innerHTML += "My name is " + mydata[1].firstName + " and I am working as an " +

    mydata[1].jobTitle + "<hr>";

//Prints data from Object3

document.getElementById('results').innerHTML += "My name is " + mydata[2].firstName + " and I am working as an " +

    mydata[2].jobTitle + "<hr>";
*/


let mydata = JSON.parse(employees); // convert string into an object

/*
for (let i = 0; i < mydata.length; i++) {

    document.getElementById('results').innerHTML += `My name is ${mydata[i].firstName} and I am working as a ${mydata[i].jobTitle}<hr>`;

    }
*/

    for (let i = 0; i < mydata.length; i++) {

        document.getElementsByClassName('employeeNumber').innerHTML += `${mydata[0].userId}`;
    
        }
    