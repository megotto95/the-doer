function openProjectDetail(project) {
    const projectDetail = document.querySelector('.details')
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


    listLoad()
}

export default openProjectDetail