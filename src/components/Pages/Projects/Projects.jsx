import React from "react";
import uuid from "react-uuid";
import Card from "../../Card/Card";
import projects from "../../../projects.json";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  return (
    <motion.section className="Content__wrapper Content__wrapper--start"
    initial={{transform : "translateX(100%)", opacity : 0}} animate={{transform : "translateX(0%)", opacity: 1}} exit={{transform : "translateX(-100%)", opacity: 0}}>
      <div className="Projects">
        {projects.map((project) => {
          return <Card key={uuid()} data={project} />;
        })}
      </div>
    </motion.section>
  );
}

export default Projects;
