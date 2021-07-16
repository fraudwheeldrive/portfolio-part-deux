import React, { useState } from 'react';

// import photo from "../../assets/images/hero-bg.jpg"


const  ProjectList = ({ category }) => {

const [portfolioItems] =useState([
    
{
name:"Run Buddy",
category:"portfolio",
description: " run buddy app",
},
{
    name:"Covid Now!",
    category:"portfolio",
    description: "group project 1",
},
{
    name:"Super-Hip!",
    category:"portfolio",
    description: "group project 2",
},
{
    name:"E-Commerce Backend",
    category:"portfolio",
    description: " express js",
},
{
    name:" Regex Tutorial",
    category:"portfolio",
    description: "Regex Tutorial: how to find an email ",
},
{
    name:"My Resume",
    category:"resume",
    description: "a link to my resume and linkedIn",
},
]);

const currentPortfolioItem = portfolioItems.filter((portfolioItem) => portfolioItem.category === category);


  return (
    <div>
       <div className="flex-row">
        {currentPortfolioItem.map((image, i) => (
          <img
            src={require(`../../assets/images/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectList;