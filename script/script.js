//window.localStorage.clear()

const form = document.getElementById('task-add');
let taskList = [];

document.addEventListener("DOMContentLoaded", function(evt) {
    let data = localStorage.getItem('taskList');
    if (data !== '' && data !== null) {
        taskList = JSON.parse(data)
    };
    for (const task of taskList) {
    createNewTask(task);
    }
})

function createNewTask(obj) {
    const itemTask = document.createElement('li')
    itemTask.classList.add('list-item')
    const itemText = document.createElement('p')
    itemText.classList.add('list-item__text')
    const itemCheckbox = document.createElement('input')
    itemCheckbox.classList.add('list-item__check')
    itemText.textContent = obj.task
    itemCheckbox.type = 'checkbox'
    itemCheckbox.value = obj.check
    itemTask.prepend(itemText)
    itemTask.append(itemCheckbox) 
    document.getElementById('task-list').prepend(itemTask)
}

function addNewTask() {
    const errorMessage = document.querySelector('.errorMessage')
    errorMessage.textContent = ''
    let newTask = document.getElementById('task-input').value;
    if (newTask == '') {
        errorMessage.textContent = "Напишите задачу";
        return;
    } 

    let newCheck = false;
    let taskObj = {
        task: newTask,
        check: newCheck
    }

    taskList.push(taskObj)
    localStorage.setItem('taskList', JSON.stringify(taskList))
    createNewTask(taskObj)
    document.getElementById('task-input').value =''
};

function clearAllTasks(){
    localStorage.removeItem('taskList');
    taskList = [];
    document.getElementById('task-list').innerHTML =''
}

