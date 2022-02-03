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
        `;
}

for (let i = 0; i < mydata.length; i++) {
  document.getElementsByTagName("tbody")[0].innerHTML +=
    `<tr>
  <th scope="row">${mydata[i].userId}</th>
  <td>${mydata[i].firstName}</td>
  <td>${mydata[i].lastName}</td>
  <td>${mydata[i].jobTitle}</td>
  <td>${mydata[i].salary}</td>
  <td>${mydata[i].emailAddress}</td>
</tr>`
}




