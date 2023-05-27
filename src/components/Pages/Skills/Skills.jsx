import React from "react";
import uuid from "react-uuid";
import Item from "../../Item/Item";
import { motion } from "framer-motion";

import "./Skills.css";

function Skills() {
  const items = [
    {
      items: [["/img/html.png", "/img/css.png", "/img/js.png"], ["/img/figma.png"]],
      text: "I aldready know",
    },
    {
      items: [
        ["/img/php.png", "/img/mysql.png", "/img/wordpress.png"],
        ["/img/github.png", "/img/react.png"],
      ],
      text: "I'm still learning",
    },
    {
      items: [["/img/nodejs.png", "/img/laravel.png"]],
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
