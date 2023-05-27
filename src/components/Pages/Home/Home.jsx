import React from "react";
import CustomLinks from "../../CustomLink/CustomLink";
import { motion } from "framer-motion";

import './Home.css';

function Home(){
  return(
    <motion.div className="Content__wrapper Content__wrapper--column"
    initial={{transform : "translateX(100%)", opacity : 0}} animate={{transform : "translateX(0%)", opacity: 1}} exit={{transform : "translateX(-100%)", opacity: 0}}>
      <section className="Content__section">
        <img className="Content__img" src={'portfolio/img/descarga.png'} alt="Andrés Ospina" width="500px" height="500px"/> 
        <h1 className="Content__title"> Frontend Developer </h1>
        <h2 className="Content__subtitle"> Andrés Ospina, 19 yo. </h2>
      </section>
      <section className="Content__section Content__section--50">
        <p className="Content__text">Hello!, this is my personal portfolio, where i'm going to introduce myself and show you my abilities and the projects where i had worked. I hope you enjoy this.</p>
        <CustomLinks text={"Next"} iconName={"Arrow"} target={"/about-me"} modifier="CustomLink--auto"/>
      </section>
    </motion.div>
  );
}

export default Home;