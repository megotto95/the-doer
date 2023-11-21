import ToDo from "./createToDo"
import openProjectDetail from "./openProject"
import "./style.css"

const createToDo = ToDo
const openProject = openProjectDetail

const projects = function(){
    const projectList = []
    const getProjectList = () => projectList
    function addProject(projTitle) {   
            const title = projTitle
            const toDos = []
            function newToDo(title) {
                const addedToDo = createToDo(title, 'desc', 'date', 'priority')
                console.log(addedToDo)
                toDos.push(addedToDo)
                console.log(toDos)
                }
            return {title, toDos, newToDo}
        }
    return {getProjectList, addProject}
}




function screenController() {
    const projectActions = projects()
    
    const projectButton = document.createElement('button')
    const content = document.createElement("div")
    content.id = "content"
    const body = document.querySelector('body')
    body.appendChild(content)
    const sidebar = document.createElement('div')
    const header = document.createElement('div')
    const Project1 = document.createElement('div')
    const projectDetails = document.createElement('div')
    const projectList = projectActions.getProjectList()
    projectList.push(projectActions.addProject("General To-Dos"))
    pageLoad()

    function pageLoad() {
        const projectList = projectActions.getProjectList()
        content.innerHTML = ""
        sidebar.innerHTML = ""
        header.classList.add('header')
        header.textContent= "Your To-Do Projects"
        content.appendChild(header)
        Project1.classList.add('project')
        sidebar.classList.add('sidebar')
        projectDetails.classList.add('details')
        content.appendChild(sidebar)
        content.appendChild(projectDetails)
       
        console.log(projectList)

        projectList.forEach((project, index) => {
        const projectDiv = document.createElement('div')
        projectDiv.classList.add('project')
        projectDiv.dataset.index = index
        projectDiv.textContent = `${project.title}`
        projectDiv.addEventListener('click', () => 
            openProject(project))
        sidebar.appendChild(projectDiv)
        } )
        

        
        projectButton.textContent = "New Project"
        
        sidebar.appendChild(projectButton)

    }

    function projectAddClick() {
        const projectName = prompt("Enter Project Name")
        const newProject = projectActions.addProject(projectName)
        projectList.push(newProject)
        pageLoad()
    }

    function projectAddItem(e) {
        const index = e.target.dataset.index
        const newItem = projectList[index].newToDo(projectList[index].title)
        projectList[index].toDos.push(newItem)
        console.log(projectList[index])
        pageLoad()
    }


    projectButton.addEventListener("click", () => projectAddClick())



}

screenController()