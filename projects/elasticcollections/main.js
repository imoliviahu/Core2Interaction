console.log("is our script file working?");

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
    listItem.classList.add(year);
    listItem.classList.add("isbn");
    listItem.innerHTML = isbn;
    container.appendChild(listItem);
}}




// async function getData() { let response = await fetch('https://api.airtable.com/v0/appXdzIdAo46CAxO9/Table%201?api_key=keyuVrE4kiHC0DAL9'); 
// let data = response.json(); 
// return data; }

// getData().then(data => { makeList(data.records) });

// function makeList(records) { 
// for(let i = 0; i < records.length; i++) { 
// let isbn = records[i].fields.isbn;
// let year = records[i].fields.year;
// let listItem = document.createElement('div'); 
// listItem.classList.add("isbn");
// listItem.innerHTML = isbn;
// listItem.setAttribute('data-year',year )
// container.appendChild(listItem); 

// let yearItem = document.createElement('div');
// yearItem.setAttribute('data-year', year);
// yearItem.classList.add("yearslist");
// yearItem.innerHTML = year;

// // This will make each year clickable
// yearItem.addEventListener('click', function(event) {
// let year = this.dataset.year;
// console.log(year);
// let records = document.getElementsByClassName('isbn');

// for (let i = 0 ;i < records.length;i++){
// if (year != (records[i].dataset.year)){
// records[i].classList.toggle("hidden");
// }
// }
// })
// yearContainer.appendChild(yearItem);
// } }
  

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