//get data from "json":
var objBooks = JSON.parse(books);

//bind output
const output = document.getElementById("output");

//output as cards: 
// I. fixed Table Head
let stacked = `
`
// II. Data from the object:
for (rows of objBooks) {
    stacked += `
    <div class="card my-3 p-3" style="width: 18rem;">
        <img src="${rows.img}" class="card-img-top" height="350" alt="...">
        <div class="card-body px-2 pb-0">
            <h5 class="card-title3">${rows.title}</h5>
            <p class="card-text"><hr>from ${rows.author}</p>
        </div>
    </div>`
  }

// III. End of tableLayout: 
stacked += `

    `

// IV. Output on html
console.log(stacked)
output.innerHTML = stacked
