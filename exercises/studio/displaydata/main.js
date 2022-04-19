
let books = [
  {year: "2010", amount: 1},
  {year: "2011", amount: 1},
  {year: "2012", amount: 1},
  {year: "2013", amount: 0},
  {year: "2014", amount: 1},
  {year: "2015", amount: 2},
  {year: "2016", amount: 2},
  {year: "2017", amount: 0},
  {year: "2018", amount: 5},
  {year: "2019", amount: 1},
  {year: "2020", amount: 2},
  {year: "2021", amount: 9},
  ];

  // One: Use the amount to indicate how big each circle is

// First show all the flowers and create divs for each of them
let container = document.querySelector(".shelf");
// create a counter variable that will give us each flowers number in the array
let i = 0;

function displayBooks(book) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let bookDiv = container.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("book");
  // adds a specific class to each new div
  newItem.classList.add("book" + [i]);
  // places the flower name and amount to the div
  bookDiv.innerHTML = book.year + " – " + book.amount;
  // sets height of flower to the amount. try changing height to width, or padding
  bookDiv.style.width = book.amount + "100px";
  console.log(book);
}
// loops through the flowers and runs the displayFlowers function for each one
books.forEach(displayBooks);