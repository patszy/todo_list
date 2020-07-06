let todoForm = null, todoSearch = null, todoList = null;

dateBuilder = (date) => {
    let month = date.getMonth()+1, day = date.getDate(), hour = date.getHours(), minute = date.getMinutes(), dateText = null;

    (month < 10) ? month = `0${month}` : false;
    (day < 10) ? day = `0${day}` : false;
    (hour < 10) ? hour = `0${hour}` : false;
    (minute < 10) ? minute = `0${minute}` : false;

    dateText = `${day}/${month}/${date.getFullYear()} ${hour}:${minute}`;

    return dateText;
}

addTask = (content) => {
    const todo = document.createElement("div");
    todo.classList.add("todo-item");

    const todoBar = document.createElement("div");
    todoBar.classList.add("todo-item-bar");

    const todoDate = document.createElement("h3");
    const date = dateBuilder(new Date());
    todoDate.classList.add("todo-item-date");
    todoDate.innerText = date;

    const todoDelete = document.createElement("button");
    todoDelete.classList.add("button");
    todoDelete.classList.add("todo-item-delete");
    todoDelete.setAttribute("title", "Delete task");
    todoDelete.innerHTML = '<i class="fas fa-times-circle"></i>';

    todoBar.appendChild(todoDate);
    todoBar.appendChild(todoDelete);

    const todoText = document.createElement("div");
    todoText.classList.add("todo-item-text");
    todoText.innerText = content;

    todo.appendChild(todoBar);
    todo.appendChild(todoText);

    todoList.append(todo);
}

deleteTask = () => {

}

document.addEventListener('DOMContentLoaded', () => {
    todoForm = document.getElementById('todoForm');
    todoList = document.getElementById('todoList');
    todoSearch = document.getElementById('todoSearch');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const textarea = document.getElementById('todoMessage');

        if(textarea.value !== '') {
            addTask(textarea.value);
            textarea.value = '';
        }
    });

    todoList.addEventListener('click', (event) => {
        if(event.target.closest(".todo-item-delete") !== null){
            event.target.closest(".todo-item").remove();
        }
    });

    todoSearch.addEventListener('keyup', (event) => {
        const items = document.querySelectorAll(".todo-item");
        items.forEach(item => {
            if(item.querySelector(".todo-item-text").innerText.toLowerCase().includes(event.target.value.toLowerCase())) {
                item.style.setProperty("display", "");
            } else item.style.setProperty("display", "none");
        });
    });
});