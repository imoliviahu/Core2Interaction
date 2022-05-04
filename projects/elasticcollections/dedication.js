let container = document.querySelector(".container");

async function getData() { let response = await fetch('https://api.airtable.com/v0/appXdzIdAo46CAxO9/Table%201?api_key=keyuVrE4kiHC0DAL9'); 
                           let data = response.json(); 
                           return data; }

getData().then(data => { makeList(data.records) });

function makeList(records) { 
  for(let i = 0; i < records.length; i++) { 
    let dedication = records[i].fields.dedication;
    let listItem = document.createElement('div'); 
    let dedicationType = records[i].fields.dedicationtype;
    listItem.classList.add(dedicationType);
    listItem.innerHTML = dedication;
    container.appendChild(listItem);
}}

function filterItems(dedicationtype) {
  let container = document.querySelector(".container");
  for(let i = 0; i < container.children.length; i++) {
    container.children[i].style.display = "none";
  }
  // show the one that has this year
  let dedicationTypes = document.querySelectorAll(dedicationtype);
  console.log(dedicationTypes);
  dedicationTypes.forEach(thing => {
  thing.style.display = "block";
  
  })}