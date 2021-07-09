import React from 'react';
import './index.css';
import './App.css';
import About from './components/About';
import backGroundImg from './assets/images/Rollingshot.jpg';

function App() {
  return (
    <About>
<section className="my 5">
  <h1 id="about">Who Am I?</h1>
  <img src={backGroundImg} className="my-2" style={{ width: "100%" }} alt="background"/>
</section>
</About>
  );
}

export default App;
