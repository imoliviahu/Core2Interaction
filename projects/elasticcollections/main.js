let container = document.querySelector(".container");

async function getData() { let response = await fetch('https://api.airtable.com/v0/appXdzIdAo46CAxO9/Table%201?api_key=keyuVrE4kiHC0DAL9'); 
let data = response.json(); 
return data; }

getData().then(data => { makeList(data.records) });

function makeList(records) { 
  for(let i = 0; i < records.length; i++) { 
    let isbn = records[i].fields.isbn;
    let year = records[i].fields.year;
    let listItem = document.createElement('div'); 
    listItem.classList.add("isbn");
    listItem.innerHTML = isbn;
    listItem.classList.add("y" + year);

    container.appendChild(listItem);
  }
}

function filterItems(year) {
  let container = document.querySelector(".container");
  for(let i = 0; i < container.children.length; i++) {
    container.children[i].style.display = "none";
  }
  // show the one that has this year
  let years = document.querySelectorAll(".y" + year);
  console.log(years);
  years.forEach(thing => {
  thing.style.display = "block";
  
  })
}
