document.getElementById("addTask").addEventListener("click", function () {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskInput.value.trim() !== "") {
    const li = document.createElement("li");
    li.innerHTML = `<span>${taskInput.value.trim()}</span>
                <div class='btn-group'>
                    <button class='editTask'> Edit</button>
                    <button class='doneTask'> Complete</button>
                    <button class='deleteTask'> Delete</button>
                </div>
                `;
    tasklist.appendChild(li);
    taskInput.value = "";
    }
});

document.getElementById("tasklist").addEventListener("click", function (e) {
    const deleteBtn = e.target.classList.closest("deleteTask");
        if (deleteBtn) {
    deleteBtn.closest("li").remove();
    return;
}
    const doneBtn = e.target.classList.closest("doneTask");
        if (doneBtn) {
    doneBtn.closest("li").classList.toggle("done");
    return;
        }
});
