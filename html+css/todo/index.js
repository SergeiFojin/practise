const addTaskButton = document.querySelector('.main-form-button');
const newTaskForm = document.querySelector('.main-form-text');
const mainList = document.querySelector('.main-list');
const emptyList = document.createElement('div');
let todos = JSON.parse(localStorage.getItem('todoTasks'));


const checkEmptyList = () => {
    if (mainList.children.length === 0) {
        emptyList.classList.add('empty-title');
        emptyList.innerHTML = `<p>The list is empty! Create a new task!</p>`;
        mainList.append(emptyList);
    }
}

const renderList = () => {
    for(let i = 0; i < todos.length; i++) {
        const newTask = document.createElement('div');
        newTask.classList.add('main-list-elem');
        newTask.innerHTML = `
                       <div class="main-list-elem-item">
                           <input class="main-list-elem-item-checkbox" type="checkbox" id="${todos[i].id}">
                           <label class="main-list-elem-item-checkmark"  for="${todos[i].id}"></label>
                       </div>
                       <input class="main-list-elem-input" type="text" id="${todos[i].id}" value="${todos[i].value}">
                       <button class="main-list-elem-remove" id="${todos[i].id}"><img class="main-list-elem-remove-img" id="${todos[i].id}" src="source/plus.png"/></button>
        `;
        if(todos[i].completed === true) {
            newTask.classList.add('completed');
            newTask.children[0].children[0].setAttribute('checked', true);
            newTask.children[1].setAttribute('disabled', true);
        }
        mainList.append(newTask);
    }
    emptyList.remove();
}


const addTask = () => {
    mainList.innerHTML = '';

    if (newTaskForm.value === '') {
        alert('New task is empty! Write a new task!');
    } else {
        if (todos.length === 0) {
            todos.push({id: `${Date.now()}`, value: newTaskForm.value, completed: false});
        } else {
            let test = [];
            todos.map((item, index, array) => {
                if (item.completed === true) {
                    test = todos.splice(index, array.length - index);
                }
            })
            todos.push({id: `${Date.now()}`, value: newTaskForm.value, completed: false});
            todos = [...todos, ...test]
        }
        newTaskForm.value = '';
    }

    localStorage.setItem('todoTasks', JSON.stringify(todos));
}

const changeTask = (e) => {
    if (e.target.classList.contains('main-list-elem-input')) {
        for (let i = 0; i < todos.length; i++) {
            if(todos[i].id === e.target.id) {
                todos[i].value = e.target.value;
            }
        }
    }
    localStorage.setItem('todoTasks', JSON.stringify(todos));
}

const completingTask = (e) => {
    const task = e.target.parentNode.parentNode;
    if (e.target.classList.contains('main-list-elem-item-checkbox')) {
        task.classList.toggle('completed');
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === e.target.id) {
                todos[i].completed = true;
                let completedTask = todos.splice(i, 1);
                todos.push(completedTask[0]);
            }
        }
        task.children[1].setAttribute('disabled', true);
        mainList.children[mainList.children.length-1].after(task);

        if (!(task.classList.contains('completed'))) {
            for (let i = 0; i < todos.length; i++) {
                if (todos[i].id === e.target.id) {
                    todos[i].completed = false;
                    let completedTask = todos.splice(i, 1);
                    todos.unshift(completedTask[0]);
                }
            }
            task.children[1].removeAttribute('disabled');
            mainList.children[0].before(task);
        }
    }
    localStorage.setItem('todoTasks', JSON.stringify(todos));
}

const removeTask = (e) => {
    const task = e.target.parentNode.parentNode;
    if (e.target.classList.contains('main-list-elem-remove-img')) {
        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === e.target.id) {
                todos.splice(i, 1);
            }
        }
        task.remove();
        checkEmptyList()
    }
    localStorage.setItem('todoTasks', JSON.stringify(todos));
}



if (addTaskButton) {
    addTaskButton.addEventListener('click', function(e) {
        addTask()
        renderList()
        checkEmptyList()
    })
}


if (mainList) {
    mainList.addEventListener('input', changeTask)
    mainList.addEventListener('click', completingTask)
    mainList.addEventListener('click', removeTask)
}


renderList()
checkEmptyList()


