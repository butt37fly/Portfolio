import React from "react";
import uuid from "react-uuid";
import Item from "../../Item/Item";
import { motion } from "framer-motion";

import "./Skills.css";

function Skills() {
  const items = [
    {
      items: [["portfolio/img/html.png", "portfolio/img/css.png", "portfolio/img/js.png"], ["portfolio/img/figma.png"]],
      text: "I aldready know",
    },
    {
      items: [
        ["portfolio/img/php.png", "portfolio/img/mysql.png", "portfolio/img/wordpress.png"],
        ["portfolio/img/github.png", "portfolio/img/react.png"],
      ],
      text: "I'm still learning",
    },
    {
      items: [["portfolio/img/nodejs.png", "portfolio/img/laravel.png"]],
      text: "I wanna learn",
    },
  ];

  return (
    <motion.div className="Content__wrapper"
      initial={{transform : "translateX(100%)", opacity : 0}} animate={{transform : "translateX(0%)", opacity: 1}} exit={{transform : "translateX(-100%)", opacity: 0}}>
      <section className="Content__section">
        {items.map(({ items, text }) => {
          return (
            <div key={uuid()} className="Section-skill">
              <div className="Section-skill__wrapper">
                {items.map((images) => {
                  return <Item key={uuid()} icons={images} />;
                })}
              </div>
              <span className="Section-skill__text">{text}</span>
            </div>
          );
        })}
      </section>
    </motion.div>
  );
}

export default Skills;
