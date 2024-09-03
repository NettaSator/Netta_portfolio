import {getFeaturedProjects} from "../pages/projects.js"
import { createCard } from "./utils.js";
import { getLatestBlogPosts } from "../pages/blog.js";


const renderProjectsSection = () => {
  const featuredProjects = getFeaturedProjects();
console.log(featuredProjects);
const projectGrid = document.getElementById("projectsGrid");
featuredProjects.forEach((project) => {
  const card = createCard(project.imgUrl,project.title,content,"col-4",link);
  projectGrid.appendChild(card);
})

}

const renderLatestBlogPostsSection = () => {
  const latestBlogPosts = getLatestBlogPosts();
console.log(latestBlogPosts);
const blogGrid = document.getElementById("blogGrid");
latestBlogPosts.forEach((blogPost) => {
  const card = createCard(blogPost.imgUrl,project.title, blogPost.content,"col-4",link);
  blogGrid.appendChild(card);
})
}

renderProjectsSection();
renderLatestBlogPostsSection();