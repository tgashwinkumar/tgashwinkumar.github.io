import React from "react";
import AboutMe from "./components/AboutMe";
import NavBar from "./components/NavBar";
import ThisIs from "./components/ThisIs";
import "./styles/tailwind.css";

function App() {
  return (
    <React.Fragment>
      <div className="min-h-screen w-screen m-0 p-0 overflow-x-hidden flex flex-col bg-whitesmoke">
      <div className="bg-radial-red radial-1 hidden md:block"></div>
      <div className="bg-radial-blue radial-2 hidden md:block"></div>
        <NavBar />
        <ThisIs className="" />
        <AboutMe className="" />
      </div>
    </React.Fragment>
  );
}

export default App;
