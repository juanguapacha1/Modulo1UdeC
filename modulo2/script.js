let tasks = [];

function addTask() {
    let taskInput = document.getElementById('taskInput');
    let descriptionInput = document.getElementById('descriptionInput');
    let newTask = {
        task: taskInput.value,
        description: descriptionInput.value,
        completed: false
    };
    tasks.push(newTask);

    const tasktable = document.getElementById('taskTable');
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${tasks.length}</td>
        <td>${newTask.task}</td>
        <td>${newTask.description}</td>
        <td><input type="checkbox" ${newTask.completed ? "checked" : ""} onchange="toggleTask(${tasks.length - 1}, this.checked)"></td>
        <td><button onclick="deleteTask(${tasks.length - 1})">Delete</button></td>`
        ;
    tasktable.appendChild(fila);


    taskInput.value = "";
    descriptionInput.value = "";

    console.log(tasks);
}

function toggleTask(index, checked) {
    tasks[index].completed = checked;
}

function renderTasks() {
    const tasktable = document.getElementById('taskTable');
    tasktable.innerHTML = "";

    tasks.forEach((task, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${task.task}</td>
            <td>${task.description}</td>
            <td><input type="checkbox" ${task.completed ? "checked" : ""} 
                       onchange="toggleTask(${index}, this.checked)"></td>
            <td><button onclick="deleteTask(${index})">Delete</button></td>
        `;
        tasktable.appendChild(fila);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function showCompletedTasks() {
    const tasktable = document.getElementById('taskTable');
    tasktable.innerHTML = "";

    tasks
        .filter(task => task.completed)
        .forEach((task, index) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${index + 1}</td>
                <td>${task.task}</td>
                <td>${task.description}</td>
                <td><input type="checkbox" checked disabled></td>
                <td><button disabled>Delete</button></td>
            `;
            tasktable.appendChild(fila);
        });
}

function showAllTasks() {
    renderTasks();
}
renderTasks();



