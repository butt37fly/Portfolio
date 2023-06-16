import CustomLinks from "../../CustomLink/CustomLink"
import { motion } from "framer-motion"
import { useState } from "react";

import './Home.css';

function Home(){
  const [ screenSize, setScreenSize ] = useState( window.innerWidth );
  window.addEventListener( "resize", () => { setScreenSize( window.innerWidth ) });
  
  const isMobile = screenSize <= 768;

  return(
    <motion.div className="Content__wrapper Content__wrapper--column"
    initial={{transform : "translateX(100%)", opacity : 0}} animate={{transform : "translateX(0%)", opacity: 1}} exit={{transform : "translateX(-100%)", opacity: 0}}>
      <section className="Content__section">
        <img className="Content__img" src={'portfolio/img/PFP.png'} alt="Andrés Ospina" width="500px" height="500px"/> 
        <h1 className="Content__title"> Frontend Developer </h1>
        <h2 className="Content__subtitle"> Andrés Ospina, 19 años. </h2>
      </section>
      <section className={ `Content__section ${ !isMobile ? "Content__section--50" : "" }` }>
        {/* <p className="Content__text Content__text--center "></p> */}
        <CustomLinks text={"Empezar"} iconName={"Arrow"} target={"/projects"} modifier="CustomLink--auto"/>
      </section>
    </motion.div>
  );
}

export default Home;