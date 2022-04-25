let container = document.querySelector(".container");

async function getData() { let response = await fetch('https://api.airtable.com/v0/appXdzIdAo46CAxO9/Table%201?api_key=keyuVrE4kiHC0DAL9'); 
                           let data = response.json(); 
                           return data; }

getData().then(data => { makeList(data.records) });

function makeList(records) { 
  for(let i = 0; i < records.length; i++) { 
    let isbn = records[i].fields.isbn;
    let year = records[i].fields.year;
    let bookTitle = records[i].fields.booktitle;
    let author = records[i].fields.author;
    let dedication = records[i].fields.dedication;
    let listItem = document.createElement('div'); 
    listItem.classList.add(year);
    listItem.classList.add("isbn");
    listItem.classList.add("bookTitle");
    listItem.classList.add("author");
    listItem.classList.add("dedication");
    listItem.innerHTML = isbn;
    listItem.innerHTML = bookTitle;
    listItem.innerHTML = author;
    listItem.innerHTML = dedication;
    container.appendChild(listItem);
  
    
}}