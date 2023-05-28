import { useState } from "react";
import Timeline from "../../Timeline/Timeline";
import { motion } from "framer-motion";

import './About.css';

function About(){
  const [ screenSize, setScreenSize ] = useState( window.innerWidth );
  window.addEventListener( "resize", () => { setScreenSize( window.innerWidth ) });
  
  const isMobile = screenSize <= 768;

  const info = {
    education : {
      title : "Education",
      items : [
        {
          title : "Coderise Bootcamp | 2018",
          items : [
            "Web programmings principles"
          ]
        },
        {
          title : "SENA CTMA | 2019 - 2022",
          items : [
            "Technique in development and multimedia integration",
            "Tecnology in multimedia production"
          ]
        }
      ]
    },
    experience : {
      title : "Experience",
      items : [
        {
          title : "Marca Creativos SAS | 2022 - 2023",
          items : [
            "Website layout building in Figma",
            "Website development in Wordpress",
            "Custom theme development in Wordpress"
          ]
        }
      ]
    }
  }

  return(
    <motion.div className={ `Content__wrapper ${ isMobile ? "Content__wrapper--column Content__wrapper--start" : "" }` }
    initial={{transform : "translateX(100%)", opacity : 0}} animate={{transform : "translateX(0%)", opacity: 1}} exit={{transform : "translateX(-100%)", opacity: 0}}>
      <section className={ `Content__section ${ !isMobile ? "Content__section--50" : "" }` }>
        <p className="Content__text">As i said before, My name is <strong>Andrés Ospina</strong>, i’m 19 yo and i’m a <strong>Frontend Developer</strong>. I live in Medellín, Colombia.</p>
        <p className="Content__text">Since i discover the programming in 2018 throgh the <strong>Coderise Bootcamp</strong>, i felt in love with this topic. Coding things really make me happy, getting new challens everyday and learning new stuff. I love to listen music too, this is one of my biggest passions, whit the videogames and the books.</p>
        <p className="Content__text">I considere that i’m good at teamworking, bcs i like to help other people, being helped, and above all, learning with others.</p>
      </section>
      <section className={ `Content__section ${ !isMobile ? "Content__section--50" : "" }` }>
        <Timeline data={info.education} />
        <Timeline data={info.experience} />
      </section>  
    </motion.div>
  );
}

export default About;