import { animate, stagger } from 'motion';
import { useMotionAnimate } from 'motion-hooks';
import React,{ useEffect } from 'react';

const Trial = () => {
    const play = () =>
      animate(
        ".listItem",
        { backgroundColor: ["red", "yellow", "green", "blue"] },
        {
          delay: stagger(0.3),
          duration: 2,
          repeat: Infinity,
          direction: "alternate",
          easing: [0.22, 0.03, 0.26, 1],
        }
      );

    return (
      // Replay the animation anytime by calling a function, anywhere
      <div className="App">
        <button className="mx-2 my-7 px-4 py-3 bg-blue-500 w-48">
          Replay
        </button>

        <ul className="list">
          <li className="listItem py-3 px-4 m-2 bg-red-500 w-48 text-center">Item 1</li>
          <li className="listItem py-3 px-4 m-2 bg-red-500 w-48 text-center">Item 2</li>
          <li className="listItem py-3 px-4 m-2 bg-red-500 w-48 text-center">Item 3</li>
        </ul>
      </div>
    );
}

export default Trial
