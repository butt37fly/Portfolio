import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


import Home from "../Pages/Home/Home"
import About from "../Pages/About/About"
import Skills from "../Pages/Skills/Skills"
import Projects from "../Pages/Projects/Projects"

function AnimatedRoutes(){
  const location = useLocation();

  return(
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}/>
          <Route path="/about-me" element={<About />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/projects" element={<Projects />}/>
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;