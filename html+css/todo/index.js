const addTaskButton = document.querySelector('.main-form-button');
const newTaskForm = document.querySelector('.main-form-text')
const mainList = document.querySelector('.main-list');
const emptyList = document.createElement('div');

if (mainList.children.length === 0) {
    emptyList.classList.add('empty-title');
    emptyList.innerHTML = `<p>The list is empty! Create a new task!</p>`;
    mainList.append(emptyList);
}

if (addTaskButton) {
    addTaskButton.addEventListener('click', function(e) {
        if (newTaskForm.value === '') {
            alert('New task is empty! Write a new task!');
            return;
        }

        let newTask = document.createElement('div');
        newTask.classList.add('main-list-elem');
        newTask.innerHTML = `
                       <div class="main-list-elem-item">
                           <input class="main-list-elem-item-checkbox" type="checkbox" id="${Date.now()}">
                           <label class="main-list-elem-item-checkmark"  for="${Date.now()}"></label>
                       </div>
                       <input class="main-list-elem-input" type="text" value="${newTaskForm.value}">
                       <button class="main-list-elem-remove"><img class="main-list-elem-remove-img" src="source/plus.png"/></button>
        `;
        mainList.append(newTask);
        newTaskForm.value = '';
        emptyList.remove();
    })
}

if (mainList) {
    mainList.addEventListener('click', function(e) {
        let task = e.target.parentNode.parentNode;
        if (e.target.classList.contains('main-list-elem-item-checkbox')) {
            task.classList.toggle('completed');
            task.children[1].setAttribute('disabled', true);
            mainList.children[mainList.children.length-1].after(task);
            if (!(task.classList.contains('completed'))) {
                mainList.children[0].before(task);
                task.children[1].removeAttribute('disabled');
            }
        }

        if (e.target.classList.contains('main-list-elem-remove-img')) {
            task.remove();
            if (mainList.children.length === 0) {
                emptyList.classList.add('empty-title');
                emptyList.innerHTML = `<p>The list is empty! Create a new task!</p>`;
                mainList.append(emptyList);
            }
        }
    })
}
