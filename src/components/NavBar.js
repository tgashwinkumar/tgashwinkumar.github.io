import { animate, timeline } from "motion";
import React, { useState, useEffect } from "react";

const NavBar = () => {
  return (
    <React.Fragment>
      <DesktopNavBar className={"visible md:visible"} />
      {/* <MobileNavBar className={"visible md:invisible"} /> */}
    </React.Fragment>
  );
};

export default NavBar;

const DesktopNavBar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      timeline(
        [
          [".block1", { y: 12 }],
          [".block1", { rotate: "45deg" }],
        ],
        {}
      );
      animate(".block2", {
        opacity: 0,
      });
      timeline(
        [
          [".block3", { y: -12 }],
          [".block3", { rotate: "-45deg" }],
        ],
        {}
      );
    } else {
      timeline(
        [
          [".block1", { rotate: "0deg" }],
          [".block1", { y: 0 }],
        ],
        {}
      );
      animate(".block2", {
        opacity: 1,
      });
      timeline(
        [
          [".block3", { rotate: "0deg" }],
          [".block3", { y: 0 }],
        ],
        {}
      );
    }
  }, [isOpen]);

  return (
    <nav className={`h-screen w-screen ${className}`}>
      <button
        className="fixed top-9 right-9 space-y-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="block1 w-9 h-1 bg-black"></div>
        <div className="block2 w-9 h-1 bg-black"></div>
        <div className="block3 w-9 h-1 bg-black"></div>
      </button>
    </nav>
  );
};

const MobileNavBar = ({ className }) => {
  return <nav className={` ${className}`}>mobile</nav>;
};
