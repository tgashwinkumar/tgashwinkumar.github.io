import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

const ThisIs = ({className}) => {
  useEffect(() => {
    const instance = new Typewriter("#typewriter", {
      strings: [
        "Web Developer",
        "UI/UX Designer",
        "Machine Learning Enthusiast",
        "Quizzer",
      ],
      autoStart: true,
      loop: true,
    });
    instance.changeCursor("<strong>|</strong>");
  });

  return (
    <section className={`${className} h-screen w-screen overflow-hidden flex flex-col justify-center items-start p-10 z-0`}>
      <div className="ml-4 md:ml-6 font-cursive text-2xl md:text-4xl">
        This is
      </div>
      <div className="font-bold font-head md:font-extrabold h-12 md:h-28 text-4xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-blush to-turquoise-blue filter drop-shadow-lg">
        tgashwinkumar
      </div>
      <p className="flex">
        <span className="w-24 ml-0 md:ml-4 font-cursive text-2xl md:text-4xl">
          I am a
        </span>
        <span
          className="m-0 p-0 text-2xl md:text-4xl font-body"
          id="typewriter"
        ></span>
      </p>
    </section>
  );
};

export default ThisIs;
