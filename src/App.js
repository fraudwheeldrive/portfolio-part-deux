import React, {useState} from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';



function App() {


  const [projects] = useState([
    {
        name: "HTML and CSS",
        description:
        "projects whose main focus was HTML and CSS",
      },
    {
      name: "Frontend Javascript",
        description:
        "projects whose main focus was Javascript",
    },
    {
      name: "Backend Javascript",
        description:
        "projects whose main focus was backend development using javascript",
    },
    {
      name: "MERN Stack ",
      description:
    " projects whose main focus was the MERN Stack",
    },
    { 
    name: "Group Projects",
    description:
    "Cumulative projects incorporating multiple programming languages and theories ",
    },
      
  
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
      <Portfolio></Portfolio>
      <About></About>
      <ContactMe></ContactMe>
    </main>
    
  </div>
);

}
export default App;