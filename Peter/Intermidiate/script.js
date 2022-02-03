//get data from "json":
const objEmployees = JSON.parse(employees);

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
// II. Data from the object:
for (rows of objEmployees) {
    stacked += `
    <tr>
        <th scope="row">${rows.id}</th>
        <td>${rows.firstName}</td>
        <td>${rows.lastName}</td>
        <td>${rows.email}</td>
        <td>${rows.jobTitle}</td>
        <td>${rows.salary}</td>
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



// `
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>
// `