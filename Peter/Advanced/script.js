//get data from "json":
var arrBooks = JSON.parse(books);

//bind output
const output = document.getElementById("output");

//output as cards: 
// I. fixed Table Head
let stacked = `
`
// II. Data from the object:
for (obj of arrBooks) {
    stacked += `
    <div class="card my-3 p-3 books" style="width: 18rem;">
        <img src="${obj.img}" class="card-img-top" height="350" alt="...">
        <div class="card-body px-2 pb-0">
            <h5 class="card-title3">${obj.title}</h5>
            <p class="card-text"><hr>from ${obj.author}</p>
        </div>
    </div>`
  }

// III. End of tableLayout: 
stacked += `
    `

// IV. Output on html
// console.log(stacked);
output.innerHTML = stacked;

//get access to all cards
const arrCards = document.getElementsByClassName("books");

function changeReadProperty() {
    this.style.background = 'gray';
}

for (obj of arrCards) {
    obj.addEventListener("click", changeReadProperty);
}