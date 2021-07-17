import React, { useState } from 'react';
import Header from './components/Header'
import About from './components/About'
import ProjectsGallery from './components/ProjectsGallery'
import ContactMe from './components/ContactMe'
import Resume from './components/Resume'
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: "portfolio",
      description: "portfolio of my projects",
    },
    {
      name: "resume",
      description: "link to my resume and linkedIn",
    },
  ]);

  
  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  return (
  <div>
    <Header
    categories={categories}
    setCurrentCategory={setCurrentCategory}
    currentCategory={currentCategory}>
    </Header>
    <main>
    <ContactMe></ContactMe>
    <ProjectsGallery currentCategory={currentCategory}></ProjectsGallery> 
    <About></About>

 <Resume></Resume>
 </main>
  </div>

    
  );
}

export default App;