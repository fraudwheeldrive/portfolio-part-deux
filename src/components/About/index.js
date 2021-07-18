import React from 'react';
import samCat from '../../assets/samcat/sam.jpg'


function About() {
  return (

  <section>
   <h2 id="about">About Me</h2> 
   <img src={samCat} alt= "a cat named sam" ></img>
   <p> Welcome to my Portfolio. I am Andrew Core i am currently in the midst of a fullstack web development course.
     It has been a challenge balancing a fulltime job with this course and the other parts of life 
     that get in the way. I hope you can enjoy poking around here seeing some of the projects i have
     completed. Thank you.   </p>
  </section>

    
  );
}

export default About;