import React from "react"
import photo from "../../assets/images/hero-bg.jpg";

function Projects(props) {
  const currentProject ={
    title: "Run Buddy",
    details:"a simple HTML and CSS site built for a running and exercise application",
  };
  
    return (
 <section>
   <h1>{currentProject.title}</h1>
   <p>{currentProject.details}</p>
   <div>
     <img src={photo}
     alt="run buddy project"
     className="img-thumbnail.mx1" />
   </div>
 </section>
    );
  }
  
  export default Projects;