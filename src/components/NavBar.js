import { animate, stagger, timeline } from "motion";
import React, { useState, useEffect } from "react";
import CustomColors from "../utils/Customcolors";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      animate(
        ".block-box",
        {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
        { duration: 0.5 }
      );
      timeline(
        [
          [".block1", { y: 6 }],
          [".block1", { rotate: "45deg" }],
        ],
        { duration: 0.5 }
      );
      animate(
        ".block2",
        {
          opacity: 0,
        },
        { duration: 0.5 }
      );
      timeline(
        [
          [".block3", { y: -6 }],
          [".block3", { rotate: "-45deg" }],
        ],
        { duration: 0.5 }
      );
      timeline(
        [
          [
            ".nav-body",
            {
              scaleX: 1,
              transformOrigin: "right",
              // borderRadius: "0%",
            },
            { easing: [0.65, 0.1, 0.94, 0.41], duration: 0.5 },
          ],
          [
            ".btn",
            {
              z: 1,
              opacity: 1,
            },
            {
              easing: [0.25, 0.46, 0.45, 0.94],
              at: "+.2",
              delay: stagger(0.1, {}),
            },
          ],
        ],
        {}
      );
    } else {
      animate(
        ".block-box",
        {
          backgroundColor: CustomColors.blush,
          boxShadow: "10px 10px 20px rgba(0,0,0,.3)",
        },
        { duration: 0.5 }
      );
      timeline(
        [
          [".block1", { rotate: "0deg" }],
          [".block1", { y: 0 }],
        ],
        { duration: 0.5 }
      );
      animate(
        ".block2",
        {
          opacity: 1,
        },
        { duration: 0.5 }
      );
      timeline(
        [
          [".block3", { rotate: "0deg" }],
          [".block3", { y: 0 }],
        ],
        {}
      );
      timeline(
        [
          [
            ".btn",
            {
              z: 600,
              opacity: 0,
            },
            {
              easing: [0.55, 0.085, 0.68, 0.53],
              delay: stagger(0.1, {}),
              direction: "reverse",
            },
          ],
          [
            ".nav-body",
            {
              scaleX: 0,
              transformOrigin: "right",
              // borderRadius: "100%",
            },
            { easing: [0.08, 0.88, 0.4, 0.9], duration: 0.5 },
          ],
        ],
        {}
      );
    }
  }, [isOpen]);

  return (
    <nav className="z-50 h-screen w-screen absolute top-0 left-0 right-0 bottom-0">
      <button
        className="z-20 block-box fixed top-9 right-9 space-y-1 rounded-full w-16 h-16 bg-black flex justify-center items-center flex-col"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="block1 w-7 h-0.5 bg-white"></div>
        <div className="block2 w-7 h-0.5 bg-white"></div>
        <div className="block3 w-7 h-0.5 bg-white"></div>
      </button>
      <div
        className="nav-body p-16 md:p-18 flex justify-center flex-col items-start space-y-6 fixed top-0 right-0 h-full w-full md:w-2/6 bg-gradient-to-bl from-blush to-turquoise-blue"
        style={{ boxShadow: "-7px 0 20px rgba(10,10,10,.3)" }}
      >
        <NavBarButton id="0" name="About Me" />
        <NavBarButton id="1" name="Projects" />
        <NavBarButton id="2" name="Lab" />
        <NavBarButton id="3" name="Resume" />
        <NavBarButton id="4" name="Contact Me" />
      </div>
    </nav>
  );
};

export default NavBar;

const NavBarButton = ({ name, id }) => {
  const [isHover, setIsHover] = useState(false);
  const [isDown, setIsDown] = useState(false);

  useEffect(() => {
    if (isDown) {
      animate(
        `.btn-${id}`,
        {
          // rotateX: "-30deg",
          y: 5,
        },
        {
          duration: 0.2,
        }
      );
    } else if (isHover) {
      animate(
        `.btn-${id}`,
        {
          // rotateX: "-30deg",
          y: 2,
        },
        {
          duration: 0.2,
        }
      );
    } else {
      animate(
        `.btn-${id}`,
        {
          // rotateX: "0deg",
          y: 0,
        },
        {
          duration: 0.2,
        }
      );
    }
  }, [id, isHover, isDown]);

  return (
    <button
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onMouseDown={() => {
        setIsDown(true);
      }}
      onMouseUp={() => {
        setIsDown(false);
      }}
      className={`btn btn-${id} cursor-pointer transition-colors duration-200 text-white px-6 py-3 text-4xl md:text-5xl font-bold rounded-lg transform hover:text-gray-300`}
    >
      <p>{name}</p>
    </button>
  );
};
