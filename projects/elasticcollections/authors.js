
console.log("is our script file working?");

let div = document.querySelector('div');
let container = document.querySelector(".container")

async function getData() { let response = await fetch('https://api.airtable.com/v0/appXdzIdAo46CAxO9/Table%201?api_key=keyuVrE4kiHC0DAL9'); 
                           let data = response.json(); 
                           return data; }

getData().then(data => { makeList(data.records) });


function makeList(records) { 
    for(let i = 0; i < records.length; i++) { 

        let listItem = document.createElement('div');

        let bookTitle = records[i].fields.booktitle;
        
        let author = records[i].fields.author;

        listItem.innerHTML = bookTitle + '<br>' + ' by ' + '<br>' + author;
        container.appendChild(listItem);
} }