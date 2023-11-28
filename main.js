//-------------------To Do List Övning-------------------
const todoList = document.getElementById("todo-list");

//-------------------Fetcha JSON-------------------
async function getData() {
    const response = await fetch("list.json");
    if (response.ok) {
        const json = await response.json();
        const todos = json;
        todos.forEach(task => {
            const listItem = document.createElement('li');
            listItem.textContent = task.task;

//-------------------Complete Click-------------------
            listItem.addEventListener('click', () => {
                task.completed = !task.completed;
                updateTaskStatus(listItem, task.completed);
                logStatus(task);
            });

            updateTaskStatus(listItem, task.completed);

            todoList.appendChild(listItem);
        });
    } else {
        console.log("HTTP-Error: " + response.status);
    }
}
//-------------------Update Console-------------------
function updateTaskStatus(element, completed) {
    element.classList.toggle('completed', completed);
}

function logStatus({ task, completed }) {
    console.log({ task, completed });
}
//-------------------Starta funktionen-------------------
getData();