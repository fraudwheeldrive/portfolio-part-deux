import React from 'react';
import Header from './components/Header';
import About from './components/About';
import ContactMe from './components/Contact';

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <ContactMe></ContactMe>
        <About></About>
      </main>
    </div>
  );
}

export default App;