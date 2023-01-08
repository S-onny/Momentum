const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoInput = todoForm.querySelector("input");
let todos = [];


function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    todos = todos.filter(todo => todo.id !== parseInt(li.id));
    li.remove();
    saveTodos();
}

function paintTodo(todoValue) {
    const li = document.createElement("li");
    li.id = todoValue.id;
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = todoValue.text;
    const button = document.createElement("button");
    button.innerText = "Done!";
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const todoValue = todoInput. value;
    todoInput.value = "";
    const newTodoValueObj = {
        text: todoValue,
        id: Date.now()
    };
    todos.push(newTodoValueObj);
    paintTodo(newTodoValueObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem("todos");

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo); 
}