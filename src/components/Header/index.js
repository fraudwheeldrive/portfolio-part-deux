import React, { useState } from "react";

// need buttons for About, Projects, Contact and resume in header

function Header() {
  
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

  // function pageSelected(name) {
  //   console.log(`${name} clicked`)
  // }

  return (
    <header className="flex-row px -1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="racecar">
            {" "}
            🚘
          </span>{" "}
          Portfolio Part Deux
        </a>
      </h2>

      <nav>
        <ul className="flex-row">
          <li className="mx=2">
            <a href="#about">About Me</a>
          </li>
          <li>
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              ></span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
