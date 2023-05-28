import React from "react";
import uuid from "react-uuid";
import "../Item/Item.css";

function Item({ icons }) {
  return (
    <div className="Item">
      {icons.map((iconName) => {
        return <img key={uuid()} className="Item__img" src={iconName} alt={`${iconName} icon`} lazy={"true"} />;
      })}
    </div>
  );
}

export default Item;
