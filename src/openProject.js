function openProjectDetail(project) {
    const projectDetail = document.querySelector('.details')
    projectDetail.innerHTML = ""
    const projectName = document.createElement('header')
    projectName.textContent = `${project.title}`
    projectDetail.appendChild(projectName)
    const toDoList = document.createElement('ul')
    const projectToDo = project.toDos
    projectToDo.forEach(todo => {
        const toDoItem = document.createElement('li')
        toDoItem.textContent = `${todo.title} due ${todo.dueDate}`
        toDoList.appendChild(toDoItem)
    }
    )
    projectDetail.appendChild(toDoList)
}

export default openProjectDetail