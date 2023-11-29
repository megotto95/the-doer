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
            const newToDo = function(title, desc, date, priority) {
                const addedToDo = createToDo(title, desc, date, priority)
                console.log(addedToDo)
                toDos.push(addedToDo)
                console.log(toDos)
                }
            return {title, toDos, newToDo}
        }
    return {getProjectList, addProject}
}


function addStorage(projectlist) {
    localStorage.setItem("projectList", JSON.stringify(projectlist))
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
    const listDiv = document.createElement('div')
    
    
    let projectList = projectActions.getProjectList()
    projectList.push(projectActions.addProject("General To-Dos"))
    pageLoad()

    function pageLoad() {
        if (localStorage.getItem("projectList") !== null){
        let projectListString = localStorage.getItem("projectList")
        projectList = JSON.parse(projectListString)
        projectList.forEach((project) => {
            project.newToDo = function(title, desc, date, priority) {
                const addedToDo = createToDo(title, desc, date, priority)
                console.log(addedToDo)
                project.toDos.push(addedToDo)
                console.log(project.toDos)
        } })
        }
        content.innerHTML = ""
        sidebar.innerHTML = ""
        header.classList.add('header')
        header.textContent= "Your To-Do Projects"
        content.appendChild(header)
        Project1.classList.add('project')
        sidebar.classList.add('sidebar')
        projectDetails.classList.add('details')
        listDiv.classList.add('listDiv')
        content.appendChild(sidebar)
        content.appendChild(projectDetails)

       
        console.log(projectList)
        console.log(typeof(projectList))

        projectList.forEach((project, index) => {
        const projectDiv = document.createElement('div')
        projectDiv.classList.add('project')
        projectDiv.dataset.index = index
        projectDiv.textContent = `${project.title}`
        projectDiv.addEventListener('click', () => {
            projectDetails.innerHTML = ""
            const projectHeader = document.createElement('div')
            projectHeader.textContent = `${project.title}`
            projectDetails.appendChild(projectHeader)
            projectDetails.appendChild(listDiv)
            openProject(project)
            const newToDoButton = document.createElement('button')
            newToDoButton.textContent = "Add to-do item"
            projectDetails.appendChild(newToDoButton)
            newToDoButton.addEventListener("click", () => {
                const title = prompt("to-do title")
                const date = prompt('What is the due date?')
                const desc = prompt('Short description')
                const priority = prompt ('Priority 1 - 5')
                project.newToDo(title, desc, date, priority)
                addStorage(projectList)
                openProject(project)
            })
            }
            )
        sidebar.appendChild(projectDiv)
        } )
        

        
        projectButton.textContent = "New Project"
        
        sidebar.appendChild(projectButton)

    }

    function projectAddClick() {
        const projectName = prompt("Enter Project Name")
        const newProject = projectActions.addProject(projectName)
        projectList.push(newProject)
        addStorage(projectList)
        pageLoad()
    }




    projectButton.addEventListener("click", () => projectAddClick())



}

screenController()