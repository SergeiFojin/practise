import { getTasksRequest, addTaskRequest, changeTaskRequest, deleteTaskRequest } from "./API/axios.js";
const addTaskButton = document.querySelector('.main-form-button');
const newTaskForm = document.querySelector('.main-form-text');
const mainList = document.querySelector('.main-list');
const emptyList = document.createElement('div');
let tasks = null;

getTasksRequest().then(data => {
    tasks = data;
    renderList(tasks);
})

const checkEmptyList = () => {
    if (mainList.children.length === 0) {
        emptyList.classList.add('empty-title');
        emptyList.innerHTML = `<p>The list is empty! Create a new task!</p>`;
        mainList.append(emptyList);
    }
}

const renderList = (todos) => {
            mainList.innerHTML = '';

            todos.forEach(item => {
                const newTask = document.createElement('div');
                newTask.classList.add('main-list-elem');
                newTask.innerHTML = `
                       <div class="main-list-elem-item">
                           <input class="main-list-elem-item-checkbox" type="checkbox" id="${item.id}">
                           <label class="main-list-elem-item-checkmark"  for="${item.id}"></label>
                       </div>
                       <input class="main-list-elem-input" type="text" id="${item.id}" value="${item.value}">
                       <button class="main-list-elem-remove" id="${item.id}"><img class="main-list-elem-remove-img" id="${item.id}" src="source/plus.png"/></button>
                `;

                if (item.completed === true) {
                    newTask.classList.add('completed');
                    newTask.children[0].children[0].setAttribute('checked', true);
                    newTask.children[1].setAttribute('disabled', true);
                }

                mainList.append(newTask);
                emptyList.remove();
            })
    checkEmptyList()
}

const addTask = () => {
    if (newTaskForm.value === '') {
        alert('New task is empty! Write a new task!');
    } else {
        addTaskRequest(`${Date.now()}`, newTaskForm.value, false)
            .then(data => {
                tasks = data;
                renderList(tasks);
            })
        newTaskForm.value = '';
    }
}

const changeTask = (e) => {
    if (e.target.classList.contains('main-list-elem-input')) {
        changeTaskRequest(`${e.target.id}`, `${e.target.value}`,false);
    }
}

const completeTask = (e) => {
    const task = e.target.parentNode.parentNode;
    if (e.target.classList.contains('main-list-elem-item-checkbox')) {
        task.classList.toggle('completed');
        let completed = true;
        task.children[1].setAttribute('disabled', true);

        if (!(task.classList.contains('completed'))) {
            completed = !completed;
            task.children[1].removeAttribute('disabled');
        }

        changeTaskRequest(`${e.target.id}`, `${e.target.parentNode.nextElementSibling.value}`,true, completed)
            .then(data => {
                tasks = data;
                renderList(tasks);
            })
    }
}

const removeTask = (e) => {
    const task = e.target.parentNode.parentNode;
    if (e.target.classList.contains('main-list-elem-remove-img')) {
        task.remove();
        checkEmptyList();
        deleteTaskRequest(`${e.target.id}`);
    }
}


if (addTaskButton) {
    addTaskButton.addEventListener('click', function(e) {
        addTask();
    })
}

if (mainList) {
    mainList.addEventListener('change', changeTask);
    mainList.addEventListener('click', completeTask);
    mainList.addEventListener('click', removeTask);
}
