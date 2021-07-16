import React from 'react';


// need buttons for About, Projects, Contact and resume in header



const navBar = [
  {
    name: "portfolio",
    description: "portfolio of my projects",
  },
  {
    name: "resume",
    description: "link to my resume and linkedIn",
  },
]

function Header() {

  function pageSelected(name) {
    console.log(`${name} clicked`)
  }
  


  return (
    
  <header>
    <h2>
    <a href ="/">
      <span role="img" aria-label="racecar">🚘</span> Portfolio Part Deux
    </a>
    </h2>

    <nav>
      <ul className="flex-row">
        <li className="mx=2">
          <a href="#about">
            About Me
          </a>
        </li>
        <li>
          <span>Contact</span>
        </li>
        {navBar.map((sitePage)=> (
          <li
          className="mx-1"
          key={sitePage.name}
          >
            <span onClick={() => pageSelected(sitePage.name)} >
            {sitePage.name}
                          </span>
          </li>
        ))}
      </ul>
    </nav>
  </header>
  

    
  );
}

export default Header;