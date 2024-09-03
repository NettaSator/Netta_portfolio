import {getFeaturedProjects} from "../pages/projects.js"
import { createCard } from "./utils.js";


const renderProjectsSection = () => {
  const featuredProjects = getFeaturedProjects();
console.log(featuredProjects);
const projectGrid = document.getElementById("projectsGrid");
featuredProjects.forEach((project) => {
  const card = createCard(project.imgUrl,project.title,content,"col-4",link);
  projectGrid.appendChild(card);
})

}

renderProjectsSection();