const taskInput = document.getElementById('taskInput');
const btn = document.getElementById('btn');
const taskList = document.getElementById('taskList');

btn.addEventListener('click', function() {
    const taskText = taskInput.value;

    if (taskInput !== '') {
        const newTask = document.createElement('li');
        newTask.innerHTML = taskText;

        taskList.appendChild(newTask);
        taskInput.value = '';

        // Silme düğmesi
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Sil';
        deleteButton.classList.add('delete-button');

        taskList.appendChild(deleteButton);

        deleteButton.addEventListener('click', function() {
            newTask.remove();
            deleteButton.remove();
        })
    }
})

