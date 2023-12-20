function openProjectDetail(project) {
    const listDiv = document.querySelector('.listDiv')
    listDiv.innerHTML = ""
    const toDoList = document.createElement('ul')
    const dialog = document.createElement('dialog')
    const close = document.createElement('button')
    close.textContent = "Close"
    listDiv.appendChild(dialog)
    const projectToDo = project.toDos
    function listLoad() {
        toDoList.innerHTML = ""
        projectToDo.forEach(todo => {
        const toDoItem = document.createElement('li')
        toDoItem.classList.add("todo")
        toDoItem.textContent = `${todo.title} due ${todo.dueDate}`
        toDoItem.addEventListener("click", () => {
            
            dialog.textContent = `title: ${todo.title}, description: ${todo.descript}, Due Date: ${todo.dueDate}, Priority: ${todo.itemPriority}`
            dialog.appendChild(close)
            close.addEventListener("click", () => dialog.close())
            dialog.showModal()
        })
        toDoList.appendChild(toDoItem)
    }
    )}
    listDiv.appendChild(toDoList)

    listLoad()
}

export default openProjectDetail