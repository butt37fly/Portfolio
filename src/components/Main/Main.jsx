import React from "react";
import AnimatedRoutes from "../AnimatedRoutes/AnimatedRoutes";
import Background from "../Background/Background";

import "../Main/Main.css";

function Main() {
  return (
    <main className="Content">
      <AnimatedRoutes />
      <Background />
    </main>
  );
}

export default Main;
