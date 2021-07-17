import React from "react";

// need buttons for About, Projects, Contact and resume in header

function Header(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    setContactSelected
  } = props;
  

  // const handleClick = (item) => {
  //   console.log(item);
  //   return item;
  // };



  return (
    <header className="flex-row px -1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="racecar">
            🚘
          </span>
          Portfolio Part Deux
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx=2">
            <a data-testid ="#about" href="#about" onClick={() =>setContactSelected(false)} >
              About Me
              </a>
          </li>

          <li className={"mx-2"}>
            <span onClick={() => setContactSelected(false)}>Portfolio</span>
          </li>


          <li className={"mx-2"}>
            <span onClick={() => setContactSelected(true)}>Resume</span>
          </li>

            <li className={"mx-2"}>
            <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>

        




          {categories.map((category) => (
            <li
              className={`mx-1${
                currentCategory.name === category.name
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
