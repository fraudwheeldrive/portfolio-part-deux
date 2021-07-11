import React from "react";
import photo from "../../assets/images/run-buddy.PNG"

function Portfolio (props) {

    const portfolioItem ={
        name: "HTML and CSS",
        description:
        "projects whose main focus was HTML and CSS",
     
    };


    return (
        <section>
            <h1>{portfolioItem.name}</h1>
            <p>{portfolioItem.description}</p>
            <div>
                <img src={photo} alt= " run buddy app, first HTML assignment"
                className="img-thumbnail mx 1"/>
            </div>
        </section>
    );

}

export default Portfolio();