(()=>{"use strict";!function(){const t=(()=>{const t=[{title:"Your Project"}];return{getProjectList:()=>t,addProject:e=>{const o={title:e};t.push(o)}}})(),e=document.createElement("button"),o=document.querySelector("#content"),n=document.createElement("div"),c=document.createElement("div");function d(){o.innerHTML="",n.classList.add("header"),n.textContent="Your To-Do Projects",o.appendChild(n),c.classList.add("project");const d=t.getProjectList();console.log(d),d.forEach((t=>{const e=document.createElement("div");e.classList.add("project"),e.textContent=`${t.title}`,o.appendChild(e)})),e.textContent="New Project",o.appendChild(e)}d(),e.addEventListener("click",(()=>("hello",t.addProject("hello"),void d())))}()})();