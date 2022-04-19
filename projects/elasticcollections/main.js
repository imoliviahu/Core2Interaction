console.log("is our script file working?")

const div = document.querySelector('div');

async function getIsbn() { let response = await fetch('https://api.airtable.com/v0/appXdzIdAo46CAxO9/Table%201?api_key=key8oTvj12iE0HViu'); 
                           let data = response.json(); 
                           return data; }

getIsbn().then(data => { makeList(data.records) });

function makeList(records) { 
  for(let i = 0; i < records.length; i++) { 
    let book = records[i].fields.isbn; 
    let listItem = document.createElement('div'); 
    listItem.appendChild(document.createTextNode(book)); 
    div.appendChild(listItem); } }