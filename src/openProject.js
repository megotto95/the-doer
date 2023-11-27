function openProjectDetail(project) {
    const projectDetail = document.querySelector('.details')
    projectDetail.innerHTML = ""
    const projectName = document.createElement('header')
    projectName.textContent = `${project.title}`
    projectDetail.appendChild(projectName)
    const toDoList = document.createElement('ul')
    const projectToDo = project.toDos
    function listLoad() {
        toDoList.innerHTML = ""
        projectToDo.forEach(todo => {
        const toDoItem = document.createElement('li')
        toDoItem.textContent = `${todo.title} due ${todo.dueDate}`
        toDoList.appendChild(toDoItem)
    }
    )}
    projectDetail.appendChild(toDoList)

    const newToDoButton = document.createElement('button')
    newToDoButton.textContent = "Add to-do item"
    projectDetail.appendChild(newToDoButton)
    newToDoButton.addEventListener("click", () => {
        const title = prompt("to-do title")
        const date = prompt('What is the due date?')
        const desc = prompt('Short description')
        const priority = prompt ('Priority 1 - 5')
        project.newToDo(title, desc, date, priority)
        listLoad()
    })

    listLoad()
}

export default openProjectDetail