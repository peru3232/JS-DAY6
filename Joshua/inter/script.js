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

let mydata = JSON.parse(employees); // convert string into an object

for (let i = 0; i < mydata.length; i++) {
    document.getElementById("results").innerHTML +=
        `
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        <div class="col">
          <div class="card">
          <div class="card-body">
            <h5 class="card-title">${mydata[i].firstName} ${mydata[i].lastName}</h5>
            <p class="card-text">Job title: ${mydata[i].jobTitle}</p>
            <p class="card-text">Salary: ${mydata[i].salary}</p>
            <p class="card-text">Email: ${mydata[i].emailAddress}</p>
            <small class="text-muted">Employee #: ${mydata[i].userId}</small>
            </div>
            </div>
          </div>
        </div>
        `;
}


