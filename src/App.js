import React from 'react';
import About from './components/About'
import ContactMe from './components/ContactMe'
import Header from './components/Header'
import Projects from './components/Projects'
import Resume from './components/Resume'
import './App.css';

function App() {



  return (
  <div>
    <Header></Header>
    <main>
<ContactMe></ContactMe>
<Projects></Projects> 
 <Resume></Resume>
 <About></About>
 </main>
  </div>

    
  );
}

export default App;