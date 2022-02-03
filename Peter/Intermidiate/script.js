//get data from "json":
const arrEmployees = JSON.parse(employees);

//bind output
const output = document.getElementById("output");

//output as tableLayout: 
// I. fixed Table Head
let stacked = `
<table class="table table-striped">
  <thead class="bg-primary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email address</th>
      <th scope="col">Job Title</th>
      <th scope="col">Salary</th>
    </tr>
  </thead>
  <tbody class="bg-warning">`
// II. Data from the objects:
for (obj of arrEmployees) {
    stacked += `
    <tr>
        <th scope="row">${obj.id}</th>
        <td>${obj.firstName}</td>
        <td>${obj.lastName}</td>
        <td>${obj.email}</td>
        <td>${obj.jobTitle}</td>
        <td>${obj.salary}</td>
    </tr>`
}

// III. End of tableLayout: 
stacked += `
    </tbody>
    </table>
    `

// IV. Output on html
// console.log(stacked)
output.innerHTML = stacked
