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
      title : "Educación",
      items : [
        {
          title : "Coderise Bootcamp | 2018",
          items : [
            "Principios del desarrollo web"
          ]
        },
        {
          title : "SENA CTMA | 2019 - 2022",
          items : [
            "Técnica en diseño e integración multimedia",
            "Tecnología en producción multimedia"
          ]
        }
      ]
    },
    experience : {
      title : "Experiencia",
      items : [
        {
          title : "Marca Creativos SAS | 2022 - Presente",
          items : [
            "Desarrollo de sitios web en Wordpress",
            "Desarrollo de temas para Wordpress",
            "Maquetación de sitios web en Figma"
          ]
        }
      ]
    }
  }

  return(
    <motion.div className={ `Content__wrapper ${ isMobile ? "Content__wrapper--column Content__wrapper--start" : "" }` }
    initial={{transform : "translateX(100%)", opacity : 0}} animate={{transform : "translateX(0%)", opacity: 1}} exit={{transform : "translateX(-100%)", opacity: 0}}>
      <section className={ `Content__section ${ !isMobile ? "Content__section--50" : "" }` }>
        <p className="Content__text">Mi nombre es <strong>Andrés Ospina</strong>, tengo 19 años y soy un <strong>Frontend Developer</strong>. Actualmente vivo en la ciudad de Medellín, Colombia.</p>
        <p className="Content__text">Desde que conocí la programación en el año 2018 gracias al <strong>Bootcamp de Coderise</strong>, me enamoré de este tema. Programar es algo que realmente me hace feliz, tener nuevos retos cada día y aprender cosas nuevas. También me encanta la música, es una de mis grandes aficiones, junto con los videojuegos y la lectura.</p>
        <p className="Content__text">Considero que soy bueno trabajando en equipo, esto debido a que me encanta ayudar cuando está en mi posibilidad, recibir y dar feedback, y aprender en compañía.</p>
      </section>
      <section className={ `Content__section ${ !isMobile ? "Content__section--50" : "" }` }>
        <Timeline data={info.education} />
        <Timeline data={info.experience} />
      </section>  
    </motion.div>
  );
}

export default About;