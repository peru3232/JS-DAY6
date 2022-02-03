//get data from "json":
var arrBooks = JSON.parse(books);

//bind output
const output = document.getElementById("output");

//output as cards: 
// I. fixed Table Head
let stacked ='' //actual no header

// II. Data from the object:
for (obj in arrBooks) {
    stacked += `
    <div class="card my-3 p-3 books" id="${obj}" style="width: 18rem;">
        <img src="${arrBooks[obj].img}" class="card-img-top" height="350" alt="...">
        <div class="card-body px-2 pb-0">
            <h5 class="card-title3">${arrBooks[obj].title}</h5>
            <p class="card-text"><hr>from ${arrBooks[obj].author}</p>
        </div>
    </div>`
}


// IV. Output on html
// console.log(stacked);
output.innerHTML = stacked;

//get access to all cards
const arrCards = document.getElementsByClassName("books");

//toggle on arraydata true <-> false and background  white <-> gray
function toggleReadProperty() {
    if (!arrBooks[this.id].read){
        this.style.background = 'gray';
        arrBooks[this.id].read = true;
    } else {
        this.style.background = 'white';
        arrBooks[this.id].read = false;
    }
}

//add event listener to all cards
for (obj of arrCards) {
    obj.addEventListener("click", toggleReadProperty);
}
