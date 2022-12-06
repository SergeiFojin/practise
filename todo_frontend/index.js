import { addTaskRequest, changeTaskRequest, deleteTaskRequest } from "./API/axios.js";
const addTaskButton = document.querySelector('.main-form-button');
const newTaskForm = document.querySelector('.main-form-text');
const mainList = document.querySelector('.main-list');
const emptyList = document.createElement('div');
let todos = [];

const checkEmptyList = () => {
    if (mainList.children.length === 0) {
        emptyList.classList.add('empty-title');
        emptyList.innerHTML = `<p>The list is empty! Create a new task!</p>`;
        mainList.append(emptyList);
    }
}

const renderList = () => {
    axios.get('http://localhost:4000/')
        .then(function (response) {
            todos = response.data;

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
        })
        .catch(function(error) {
            console.log(error)
        })
}


const addTask = () => {
    axios.get('http://localhost:4000/')
        .then(function (response) {
            todos = response.data;
            mainList.innerHTML = '';

            if (newTaskForm.value === '') {
                alert('New task is empty! Write a new task!');
            } else {
                if (todos.length === 0) {
                    todos.push({id: `${Date.now()}`, value: newTaskForm.value, completed: false});
                } else {
                    let completedTasks = [];

                    todos.forEach((item, index, array) => {
                        if (item.completed) {
                            completedTasks = todos.splice(index, array.length - index);
                        }
                    })

                    todos = [...todos, {id: `${Date.now()}`, value: newTaskForm.value, completed: false}, ...completedTasks]
                }
                addTaskRequest(`${Date.now()}`, newTaskForm.value, false);
                newTaskForm.value = '';
            }

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

                if (item.completed) {
                    newTask.classList.add('completed');
                    newTask.children[0].children[0].setAttribute('checked', true);
                    newTask.children[1].setAttribute('disabled', true);
                }

                mainList.append(newTask);
                emptyList.remove();
            })
        })
        .catch(function(error) {
            console.log(error)
        })
}

const changeTask = (e) => {
    if (e.target.classList.contains('main-list-elem-input')) {
        changeTaskRequest(`${e.target.id}`, `${e.target.value}`, false);
    }
}

const completeTask = (e) => {
    const task = e.target.parentNode.parentNode;
    if (e.target.classList.contains('main-list-elem-item-checkbox')) {
        task.classList.toggle('completed');
        task.children[1].setAttribute('disabled', true);
        mainList.children[mainList.children.length-1].after(task);

        if (!(task.classList.contains('completed'))) {
            task.children[1].removeAttribute('disabled');
            mainList.children[0].before(task);
        }
        changeTaskRequest(`${e.target.id}`, `${e.target.parentNode.nextElementSibling.value}`, true);
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
        checkEmptyList();
    })
}

if (mainList) {
    mainList.addEventListener('change', changeTask);
    mainList.addEventListener('click', completeTask);
    mainList.addEventListener('click', removeTask);
}

renderList();
checkEmptyList();
