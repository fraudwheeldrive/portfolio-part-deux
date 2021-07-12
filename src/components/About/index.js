import React from 'react';
import samCat from '../../assets/images/sam.jpg'


function About() {
  return (
  <div>
   <h2>about</h2> 
   <img src={samCat} alt= "a cat named sam" ></img>
   <p> Stuff about me </p>
  </div>

    
  );
}

export default About;