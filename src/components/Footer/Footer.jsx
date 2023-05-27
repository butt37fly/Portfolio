import React from "react";
import uuid from "react-uuid";
import Icon from "../Icon/Icon";
import "./Footer.css";

function Footer() {
  const links = {
    left: [
      {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/butt37fly/",
      },
      {
        name: "Behance",
        link: "https://www.behance.net/b37tterfly",
      },
      {
        name: "Github",
        link: "https://github.com/butt37fly",
      },
    ],
    right: [
      {
        name: "Telegram",
        link: "https://t.me/butt37fly",
      },
      {
        name: "Mail",
        link: "mailto:amospina423@gmail.com",
      },
    ],
  };

  const getLinks = (items) =>
    items.map((item) => {
      return (
        <a key={uuid()} className="Footer__link" href={item.link} target="_blank">
          <Icon modifier={`Icon--${item.name}`} name={item.name} />
        </a>
      );
    });

  return (
    <footer className="Footer">
      <section className="Footer__section">{getLinks(links.left)}</section>
      <section className="Footer__section">{getLinks(links.right)}</section>
    </footer>
  );
}

export default Footer;
