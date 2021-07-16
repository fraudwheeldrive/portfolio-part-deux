import React from 'react';
import samCat from '../../assets/images/sam.jpg'


function About() {
  return (

  <section>
   <h2 id="about">About Me</h2> 
   <img src={samCat} alt= "a cat named sam" ></img>
   <p> Stuff about me </p>
  </section>

    
  );
}

export default About;