import React from 'react';

function Header(props) {
  const{
    projects= [],
    setPortfolioItem,
    portfolioItem, 
  }= props;


  

  return (
    <header className="flex-row px-1">
    <h2>
      <a data-testid= "link" href= "/">
        <span role="img" aria-label="race car"> 
        {" "}
        🏎️</span>
         Portfolio Part Deux!
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
          <span> Resume </span>
        </li>
        {projects.map((project) => (
          <li 
          className = {`mx-2 ${ portfolioItem.name === project.name && "navActive"}`}
          key={project.name}
     >
       <span
       onClick={() => {
         setPortfolioItem(project)
       }}
       >
         {project.name}
       </span>
        </li>
        ))}

<li className="mx2">
          <span> Contact </span>
        </li>
      </ul>
    </nav>
  </header>
  );
}

export default Header;