import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div className="relative w-[100%] h-[100%] ">
      <div className="line_container">
        <div className="separator"></div>
        <div className="separator"></div>
        <div className="separator"></div>
      </div>
      <main className="relative">
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;
