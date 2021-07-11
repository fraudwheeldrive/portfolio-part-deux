import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import ContactMe from './components/ContactMe';
import Portfolio from './components/Portfolio';



function App() {


  const [projects] = useState([
    {
        name: "HTML and CSS",
        description:"projects whose main focus was HTML and CSS",
        photo:"../../assets/images/run-buddy.PNG"
        
      },
    {
      name: "Frontend Javascript",
        description: "projects whose main focus was Javascript",
        photo:"../../assets/images/run-buddy.PNG"
    },
    {
      name: "Backend Javascript",
        description: "projects whose main focus was backend development using javascript",
        photo:"../../assets/images/run-buddy.PNG"
    },
    {
      name: "MERN Stack ",
      description: "projects whose main focus was the MERN Stack",
      photo:"../../assets/images/run-buddy.PNG"
    },
    { 
    name: "Group Projects",
    description: "Cumulative projects incorporating multiple programming languages and theories ",
    photo:"../../assets/images/run-buddy.PNG"
    }    
      ]);
  
    const [portfolioItem, setPortfolioItem] = useState(projects[0]);


return (
  <div>
    <Header
    projects={projects}
    setPortfolioItem ={setPortfolioItem}
    portfolioItem={portfolioItem}
    ></Header>
    <main>
      <About></About>
      <ContactMe></ContactMe>
      <Portfolio portfolioitem = {projects[0]}></Portfolio>
    </main>
    
{/* map */}

  </div>
);

}
export default App;


/*  */