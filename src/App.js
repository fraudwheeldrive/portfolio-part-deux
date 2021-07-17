import React, { useState } from 'react';
import Header from './components/Header'
import About from './components/About'
import ProjectsGallery from './components/ProjectsGallery'
import ContactMe from './components/ContactMe'

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

  const [contactSelected,setContactSelected] = useState(false);


  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  return (
  <div>
    <Header
    categories={categories}
    setCurrentCategory={setCurrentCategory}
    currentCategory={currentCategory}
    contactSelected={contactSelected}
    setContactSelected={setContactSelected}>
    </Header>
    <main>
    {!contactSelected ? (
  <>
    <ProjectsGallery currentCategory={currentCategory}></ProjectsGallery>
    <About></About>
  </>
) : (
    <ContactMe></ContactMe>
  )}

 </main>
  </div>

    
  );
}

export default App;