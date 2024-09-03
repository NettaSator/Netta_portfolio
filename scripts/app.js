const projects = [
  {
    id: 1,
    title: "Project 1"
    content: "Lorem Ipsum",
    createdAt: new Date();
    imgUrl: "https://images.unsplash.com/photo-1724590391555-e4d81815e0af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
  {
    id: 2,
    title: "Project 2"
    content: "Lorem Ipsum",
    createdAt: new Date();
    imgUrl: "https://images.unsplash.com/photo-1724590391555-e4d81815e0af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
]

const renderProjects = () =>{
  const projectGrid = document.getElementById("projects");
  
  if(projectGrid){
    projectGrid.innerHTML = null;
    projecs.forEach((element) =>{
      const link = `./projectdetails.html?id=${element.id}`;
      const card = createCard(element,"col-6",link);
      projectGrid.appendChild(card);
    });
  }
  
}


/*const renderBlogDetails = () => {
  const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const blogId = urlParams.get("id");
if(blogId){
  const blog = blogPosts.find((blog) => blog.id == blogId)
  console.log(blog);

  const blogImg = document.getElementById("blog-img");
  blogImg.src = blog.imgUrl;

  const blogTitle = document.getElementById("blog-title");
  blogTitle.innerText = blog.title;

  const blogReadingTime = document.getElementById("blog-reading-time");
  blogReadingTime.innerText = getMinsToRead(blog.content) + "min";

  const blogCreated = document.getElementById("blog-created-at");
  blogCreated.innerText = blog.createdAt;

  const blogContent = document.getElementById("blog-content");
  blogCreated.innerText = blog.content;


}

}*/



//renderBlogDetails();

  const createCard = (element,colClass,link) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList = "colClass";

  const card = document.createElement("div");
  card.classList = "card";

  const img = document.createElement("img");
  img.classList = "card-img-top";
  img.src = element.imgUrl;
  img.alt = element.title;

  const cardBody = document.createElement("div");
  cardBody.classList = "card-body";

  const title = document.createElement("h5");
  title.innerText = element.title;
  title.classList = "card-title";

  const paragraph = document.createElement("p");
  paragraph.classList = "card-text";
  paragraph.innerText = element.content;

  const button = document.createElement("a");
  button.classList = "btn btn-primary";
  button.innerText = "View";
  button.href = link;

  cardBody.appendChild(title);
  cardBody.appendChild(paragraph);
  cardBody.appendChild(button);

  card.appendChild(img);
  card.appendChild(cardBody);
  cardDiv.appendChild(card);

  return cardDiv;
}


renderProjects();

/*const getDate = () => {
  document.getElementById("date");
  console.log(document.getElementById("date"))
}*/

const loadHtml = async (elementId, filePath) => {
    try {
      const response = await fetch(filePath);

      if(!response.ok) {
        throw new Error ("File not found:" + filePath);
      }

      const htmlContent = await response.text();

      const element = document.getElementById(elementId);

      if(!element){
        throw new Error ("Element not found:" + elementId);
      }

      element.innerHTML = htmlContent;

      if(elementId == "footer") {
        console.log(document.getElementById("date"));
      }

    } catch (error) {
      console.error(error);
    }
}

const loadHeader = async () => {
  await loadHtml("header", "../components/header.html")
}

const loadFooter = async () => {
  await loadHtml("footer", "../components/footer.html")
  const footerSpan = document.getElementById("date");
  footerSpan.innerText = new Date().getFullYear();
}



await loadHeader();
await loadFooter();
