import React from "react";
import uuid from "react-uuid";
import Icon from "../Icon/Icon";

import "../Card/Card.css";

function Card({ data }) {
  const getTags = (tags) =>
    tags.map((tag) => {
      return (
        <p key={uuid()} className="Card__tag">
          {tag}
        </p>
      );
  });

  const getSources = (sources) =>
    sources.map((item) => {
      return (
        <a key={uuid()} href={item.Link} className="Card__link" target="_blank" rel="noreferrer">
          <img className="Card__source" src={item.Image} alt={item.Name} />
        </a>
      );
  });

  return (
    <article className="Card">
      <a href={data.Link} className="Card__thumbnail" target="_blank" rel="noreferrer" >
        <div className="Card__overlay">
          <Icon name={"Link"}/>
        </div>
        <img className="Card__img" src={data.Image} alt={data.Name} />
      </a>
      <div className="Card__info">
        <h3 className="Card__title">{data.Name}</h3>
        <time className="Card__date">{data.Date}</time>
        <div className="Card__meta">
          <span className="Card__tags">{getTags(data.Tags)}</span>
        </div>
        <div className="Card__sources">{getSources(data.Sources)}</div>
      </div>
    </article>
  );
}

export default Card;
