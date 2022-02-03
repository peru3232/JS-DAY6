/*
Advanced
Book List

Create an external JSON file that will contain the data( e.g. 
  `{'title': 'Javascript for Dummies',
   'author': 'Dummy Dumb Dumb',
   'read': 'false'
  }`
Iterate through the array of books. For each book, create a <p> element with the book title and author and append it to the page.
Each book should have an image cover.
Change the style of the book depending on whether you have read it or not.
*/


/*
let booksParsed = JSON.parse(books); // convert string into an array of objects


if (booksParsed[i].read = "true") {
    for (let i = 0; i < booksParsed.length; i++) {
        document.getElementById("results").innerHTML +=
            `    
            <div class="col">
              <div class="card h-100">
              <div class="card-body text-success">
                <img src="${booksParsed[i].img}" class="card-img-top">
                <h5 class="card-title">${booksParsed[i].title}</h5>
                <p class="card-text">by: ${booksParsed[i].author}</p>
                <p class="card-text">Read ${booksParsed[i].read}</p>
                </div>
                </div>        
            </div>
            `;
            
 } } else {
    for (let i = 0; i < booksParsed.length; i++) {
        document.getElementById("results").innerHTML +=
            `    
            <div class="col">
              <div class="card h-100">
              <div class="card-body text-danger">
                <img src="${booksParsed[i].img}" class="card-img-top">
                <h5 class="card-title">${booksParsed[i].title}</h5>
                <p class="card-text">by: ${booksParsed[i].author}</p>
                <p class="card-text">Read ${booksParsed[i].read}</p>
                </div>
                </div>        
            </div>
            `;
    }
}
*/


let booksParsed = JSON.parse(books); // convert string into an array of objects

for (let i = 0; i < booksParsed.length; i++) {
//var read = booksParsed[i].read;

if (booksParsed[i].read == "true")  {
        document.getElementById("results").innerHTML +=
            `    
            <div class="col">
              <div class="card h-100">
              <div class="card-body text-success">
                <img src="${booksParsed[i].img}" class="card-img-top">
                <h5 class="card-title">${booksParsed[i].title}</h5>
                <p class="card-text">by: ${booksParsed[i].author}</p>
                <p class="card-text">Read ${booksParsed[i].read}</p>
                </div>
                </div>        
            </div>
            `;
 } else {
        document.getElementById("results").innerHTML +=
            `    
            <div class="col">
              <div class="card h-100">
              <div class="card-body text-danger">
                <img src="${booksParsed[i].img}" class="card-img-top">
                <h5 class="card-title">${booksParsed[i].title}</h5>
                <p class="card-text">by: ${booksParsed[i].author}</p>
                <p class="card-text">Read ${booksParsed[i].read}</p>
                </div>
                </div>        
            </div>
            `;
    }
}



 /*

for (let i = 0; i < booksParsed.length; i++) {
    document.getElementById("results").innerHTML +=
        `    
        <div class="col">
          <div class="card h-100">
          <div class="card-body">
            <img src="${booksParsed[i].img}" class="card-img-top">
            <h5 class="card-title">${booksParsed[i].title}</h5>
            <p class="card-text">by: ${booksParsed[i].author}</p>
            <p class="card-text">Read ${booksParsed[i].read}</p>
            </div>
            </div>        
        </div>
        `;
}

*/