import React from "react";
import uuid from "react-uuid";
import { useState } from "react";

import "../Timeline/Timeline.css";

function Timeline({ data }) {

  const [ displayed, setDisplayed ] = useState({ index : 0 });
  const toggleCards = ( index ) => setDisplayed({ index });

  const getIndicators = (indicators) =>
    indicators.map(( item, i ) => {
      let classes = i === displayed.index ? "Timeline__item--selected" : "";
      return <span key={uuid()} className={`Timeline__item ${classes}`.trim()} onClick={ () => toggleCards( i ) }></span>;
    });

  const getItems = (item) =>
    item.map((el) => {
      return <li key={uuid()} className="Timeline__card__item">{el}</li>
    });

  const getCards = (card) =>
    card.map((info, i ) => {
      let classes = i === displayed.index ? "Timeline__card--displayed" : "";
      return (
        <div key={uuid()} className={`Timeline__card ${classes}`.trim()} >
          <h3 className="Timeline__card__title">{info.title}</h3>
          <ul className="Timeline__card__list">{getItems(info.items)}</ul>
        </div>
      );
    });

  return (
    <section className="Timeline">
      <h2 className="Timeline__title">{data.title}</h2>
      <div className="Timeline__indicator">
        <span className="Timeline__bar"></span>
        {getIndicators(data.items)}
      </div>
      {getCards(data.items)}
    </section>
  );
}

export default Timeline;