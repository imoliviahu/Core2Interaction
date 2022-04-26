// console.log("is our script file working?");

// let container = document.querySelector(".container");

// async function getData() { let response = await fetch('https://api.airtable.com/v0/appXdzIdAo46CAxO9/Table%201?api_key=keyuVrE4kiHC0DAL9'); 
//                            let data = response.json(); 
//                            return data; }

// getData().then(data => { makeList(data.records) });

// function makeList(records) { 
//   for(let i = 0; i < records.length; i++) { 
//     let isbn = records[i].fields.isbn;
//     let year = records[i].fields.year;
//     let listItem = document.createElement('div'); 
//     listItem.classList.add(year);
//     listItem.classList.add("isbn");
//     listItem.innerHTML = isbn;
//     container.appendChild(listItem);
// }}

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
    listItem.classList.add(year);

    if(year !== "1902") {
      listItem.classList.add("hidden");
    } else if (year === "1902") {
      listItem.classList.add("show");
    }

    container.appendChild(listItem);
  }}

  function filterItems(string) {
    let container = document.querySelector(".container");
    
    if(string === "1902") {
      let years = container.querySelectorAll(".show");
      years.forEach(thing => {
        console.log(thing);
        // thing.style.display = "block";
      })
    } else if(string !== "1902") {
      let years = container.querySelectorAll(".hidden");
      years.forEach(thing => {
        console.log(thing);
        thing.style.display = "none";
      })
    }
      
}

// let container = document.querySelector("container");

// let Airtable = require("airtable");
// console.log(Airtable);

// let base = new Airtable({apiKey:"keyuVrE4kiHC0DAL9"}).base(
//   "appXdzIdAo46CAxO9"
// );
// base("books").select({}).eachPage(gotPageOfBooks, gotAllBooks);

// var books = [];

// function gotPageOfBooks(records, fetchNextPage) {
//   console.log("gotPageOfBooks()");
//   books.push(...records);
//   fetchNextPage();
// }

// function gotAllBooks(err) {
//   console.log("gotAllBooks()");

//   if (err) {
//     console.log("error loading books");
//     console.error(err);
//     return;
//   }

//   consoleLogBooks();
//   showBooks();
// }

// function consoleLogBooks() {
//   console.log("consoleLogBooks()");
//   books.forEach((book) => {
//     console.log("Book:", book);
//   });
// }

// function showBooks() {
//   console.log("showBooks()");
//   books.forEach((book) => {

//     let isbnNumber = document.createElement("div");
//     isbnNumber.innerText = book.fields.isbn;
//     container.div.appendChild(isbnNumber);

//   });