import React from 'react'
import SubHeading from './SubHeading';

const AboutMe = ({className}) => {
    return (
      <section className={`${className} bg-gradient-to-r from-blizzard-blue to-turquoise-blue w-screen overflow-hidden flex flex-col justify-center items-start p-10 z-10`}>
        <SubHeading text={"About Me"} type={"blue"}/>
      </section>
    );
}

export default AboutMe
