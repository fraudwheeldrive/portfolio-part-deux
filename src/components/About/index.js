import React from "react"
import backgroundImg from "../../assets/images/Rollingshot.jpg";

function About() {
    return (
     
  <section className="my 5">
    <h1 id="about">Who Am I?</h1>
    <img src={backgroundImg} className="my-2" style={{ width: "100%" }} alt="background"/>
  </section>
    );
  }
  
export default About 


