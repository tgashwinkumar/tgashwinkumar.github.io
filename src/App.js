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

/*
Pirandanaal Vaazhtukal Aadhi!!
Thanks for that one month of offline college and full time of patting! 
If you hadn't been there, I would missed a lot of fun and would have never realised drinking can be so much fun
Buy me a lots of food and pat me more! <3
*/
