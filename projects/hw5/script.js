var ul = document.querySelector("ul");

async function getTodos() {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/todos");
    let data = response.json();
    return data;
  }

  getTodos().then((response) => {
    console.log(response);
    var text="";
    response.forEach(element => {
    var todos = document.createElement("p");
    var text = document.createTextNode(element.title);
    if (element.completed == true) {
        todos.style.color = "white";
        todos.style.textDecoration = "line-through";
    } else {
        todos.style.color = "hotpink";
    }

    var result = document.getElementById("result");
    todos.appendChild(text);
    result.appendChild(todos);
    });
})

getTodos();

