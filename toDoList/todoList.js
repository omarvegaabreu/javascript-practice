var todos = ["buy a new turtle"];

var input = prompt("What would you like to do ?");

while (input !== "quit") {
  if (input === "list") {
    listTodos();
  } else if (input === "new") {
    addTodo();
  } else if (input === "delete") {
    //ask for index of todo to be deleted
    deleteItem();
  }
  input = prompt("What would you like to do ?");
}
console.log("OK YOU QUIT THE APP!!");

function listTodos() {
  console.log("*************");
  todos.forEach(function(todo, i) {
  console.log(i + ":" + todo);
  console.log("*************");
  });
}

function addTodo() {
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
}

function deleteItem() {
  var index = prompt("What index do you want to delete ?");
  // delete that todo
  todos.splice(index, 1);
}
