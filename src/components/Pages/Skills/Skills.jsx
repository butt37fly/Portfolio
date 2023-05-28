import React from "react";
import uuid from "react-uuid";
import Item from "../../Item/Item";
import { motion } from "framer-motion";

import "./Skills.css";

function Skills() {
  const items = [
    {
      items: [
        [
          "portfolio/img/html.png",
          "portfolio/img/css.png",
          "portfolio/img/js.png",
        ],
        ["portfolio/img/figma.png"],
      ],
    },
    {
      items: [
        [
          "portfolio/img/php.png",
          "portfolio/img/mysql.png",
          "portfolio/img/wordpress.png",
        ],
        ["portfolio/img/github.png", "portfolio/img/react.png"],
      ],
    },
    {
      items: [["portfolio/img/nodejs.png", "portfolio/img/laravel.png"]],
    },
  ];

  return (
    <motion.div
      className="Content__wrapper"
      initial={{ transform: "translateX(100%)", opacity: 0 }}
      animate={{ transform: "translateX(0%)", opacity: 1 }}
      exit={{ transform: "translateX(-100%)", opacity: 0 }}
    >
      <section className="Content__section">
        <div className="Skill">
          <div className="Skill__bar">

          </div>
          {items.map(({ items }, i ) => {
            return (
              <div key={uuid()} className="Skill__wrapper" style={ { "--delay" : `${i * .25}s` } } >
                {items.map((images) => {
                  return <Item key={uuid()} icons={images} />;
                })}
              </div>
            );
          })}
        </div>
      </section>
    </motion.div>
  );
}

export default Skills;
