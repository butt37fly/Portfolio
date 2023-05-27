import React from "react";
import CustomLink from "../CustomLink/CustomLink";

import "./Header.css";

function Header() {

  const navLinks = [
    {
      name: 'home', 
      text : '',
      iconName : 'House',
      target : '/'
    }, 
    {
      name: 'about-me', 
      text : 'About Me',
      iconName : 'Arrow',
      target : '/about-me'
    }, 
    {
      name: 'skills', 
      text : 'Skills',
      iconName : 'Arrow',
      target : '/skills'
    }, 
    {
      name: 'projects', 
      text : 'Projects',
      iconName : 'Arrow',
      target : '/projects'
    }
  ];

  return (
    <header className="Header">
      <nav className="Header__wrapper">
        {
          navLinks.map( ( { name, text, iconName, target } ) => {
           return <CustomLink key={name} text={text} iconName={iconName} target={target}/>
          })
        }
      </nav>
    </header>
  );
}

export default Header;
