import ToDo from "./createToDo"

const createToDo = ToDo


const projects = () => {
    const projectList = [{title: 'Your Project'}]
    const getProjectList = () => projectList
    const addProject = (title) => {
        const newProject = {
            title: title

        }
        projectList.push(newProject)
    }
    return {getProjectList, addProject}

}




function addToDo() {
    const list = []

    const newToDo = (item) => {
    const addedToDo = createToDo(item)
    list.push(list)
    console.log(list)
    }
    return {newToDo, list}
}



function screenController() {
    const projectActions = projects()
    const projectButton = document.createElement('button')
    const content = document.querySelector("#content")
    const header = document.createElement('div')
    const Project1 = document.createElement('div')
    pageLoad()

    function pageLoad() {
        content.innerHTML = ""
        header.classList.add('header')
        header.textContent= "Your To-Do Projects"
        content.appendChild(header)
        Project1.classList.add('project')
        
        
        const projectList = projectActions.getProjectList()
        console.log(projectList)
        projectList.forEach((project) => {
        const projectDiv = document.createElement('div')
        projectDiv.classList.add('project')
        projectDiv.textContent = `${project.title}`
        content.appendChild(projectDiv)
        } )
        

        
        projectButton.textContent = "New Project"
        
        content.appendChild(projectButton)

    }

    function projectAddClick(projectName) {
        projectActions.addProject(projectName)
        pageLoad()
    }

    projectButton.addEventListener("click", () => projectAddClick('hello'))



}

screenController()