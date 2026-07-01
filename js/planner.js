var tasks = [];

function addTask() {
    var input = document.getElementById('taskInput');
    var taskText = input.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    tasks.push({ text: taskText, completed: false });
    input.value = '';
    renderTasks();
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function renderTasks() {
    var list = document.getElementById('taskList');
    list.innerHTML = '';

    for (var i = 0; i < tasks.length; i++) {
        var li = document.createElement('li');
        li.className = 'task-item' + (tasks[i].completed ? ' completed' : '');

        li.innerHTML =
            '<span onclick="toggleTask(' + i + ')">' + tasks[i].text + '</span>' +
            '<button onclick="deleteTask(' + i + ')">Delete</button>';

        list.appendChild(li);
    }
}
