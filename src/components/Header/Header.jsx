import { useState } from "react";
import CustomLink from "../CustomLink/CustomLink";

import "./Header.css";

function Header() {
  const [ screenSize, setScreenSize ] = useState( window.innerWidth );
  window.addEventListener( "resize", () => { setScreenSize( window.innerWidth ) });
  
  const isMobile = screenSize <= 768;
  const navLinks = [
    {
      name: 'home', 
      text : '',
      iconName : 'House',
      target : '/'
    }, 
    {
      name: 'about-me', 
      text : isMobile ? '' : 'About Me',
      iconName : isMobile ? "About" : "Arrow",
      target : '/about-me'
    }, 
    {
      name: 'skills', 
      text : isMobile ? '' : 'Skills',
      iconName : isMobile ? "Skills" : "Arrow",
      target : '/skills'
    }, 
    {
      name: 'projects', 
      text : isMobile ? '' : 'Projects',
      iconName : isMobile ? "Projects" : "Arrow",
      target : '/projects'
    }
  ];
  const classes = {
    Header : isMobile ? "Header-mobile" : "Header",
    Wrapper : isMobile ? "Header__wrapper-mobile" : "Header__wrapper",
  }

  return( 
    <header className={classes.Header}>
      <nav className={classes.Wrapper}>
        {
          navLinks.map( ( { name, text, iconName, target } ) => {
            return <CustomLink key={name} text={text} iconName={iconName} target={target}/>
          })
        }
      </nav>
    </header>
  )
}

export default Header;
