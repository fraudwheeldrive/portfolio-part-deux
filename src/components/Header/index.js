import React from 'react';

function Header() {

  return (
    <header>
    <h2>
      <a href="/">
        <span role="img" aria-label="race car"> 🏎️</span> Portfolio Part Deux!
      </a>
    </h2>
    <nav>
        {/* need to link the below to render on click */}
      <ul className= "flex-row">
        <li className="mx-2">
          <a href="#about">
            About me
          </a>
        </li>
        <li className="mx2">
          <span>Resume</span>
        </li>
      <li className ="mx-2">Portfolio</li>
      <li className ="mx-2">Contact</li> 
      </ul>
    </nav>
  </header>
  );
}

export default Header;