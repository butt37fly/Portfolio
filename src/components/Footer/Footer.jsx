import uuid from "react-uuid";
import Icon from "../Icon/Icon";
import Data from "../../contact.json" 

import "./Footer.css";

function Footer() {
  const links = {
    left: [ Data.Linkedin, Data.Behance, Data.Github ],
    right: [ Data.Telegram, Data.Mail ]
  };

  const getLinks = (items) =>
    items.map((item) => {
      return (
        <a key={uuid()} className="Footer__link" href={item.link} target="_blank" rel="noreferrer">
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
