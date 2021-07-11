import React from "react"
import backgroundImg from "../../assets/images/Rollingshot.jpg";

function About() {
    return (
  <section className="my 5">
    <h1 id="about">About Myself</h1>
    <img src={backgroundImg} className="my-2" style={{ width: "100%" }} alt="background"/>
    <div className="my-2">
      <p>
        I am Andrew core, a former IT operations analyst turned ecommerce performance car part sales guru. Looking to build
        on my IT skillset honed on the mainframe of the corporate world i decided upgrade my skillset to assist me 
        in growing a small performance car parts business. It was with this goal i decided to start on the quest of programming and web
        development. Please take a look around this portfolio and browse thru some of the projects I have completed. 
      </p>
    </div>
  </section>
    );
  }
  
export default About 


