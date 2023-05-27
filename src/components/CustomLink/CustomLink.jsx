import React from "react";
import Icon from "../Icon/Icon";
import { NavLink } from "react-router-dom";

import "../CustomLink/CustomLink.css";

function CustomLink({ iconName, text, target, modifier }) {

  const getClasses = (text, iconName, isActive, modifier) => {
    let customLinkClass = "CustomLink ";

    customLinkClass += iconName ? "CustomLink--has-icon" : "";
    customLinkClass += !text && iconName ? " CustomLink--only-icon" : "";
    customLinkClass += isActive ? " CustomLink--active" : "";
    customLinkClass += modifier ? ` ${modifier}` : "";

    return customLinkClass.trim();
  };

  const setIcon = (iconName) => {
    return iconName ? <Icon name={iconName} /> : false;
  };

  return (
    <NavLink to={target} className={( { isActive } ) => { return getClasses( text, iconName, isActive, modifier); }} >
      <span className="CustomLink__text">{ text }</span>
      { setIcon(iconName) }
    </NavLink>
  );
}

export default CustomLink;
