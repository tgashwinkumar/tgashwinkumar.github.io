"use client"; // This is a client component 👈🏽

import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaInstagram, FaLink, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-screen">
      <NavBar />
      <section className="font-raleway relative flex min-h-screen flex-col space-y-12 items-center px-4 w-full lg:px-24 bg-white">
        <div className="h-4 lg:h-8"></div>
        <IntroSection />
        <ProjectSection />
        <PublicationsSection />
        <ResumeSection />
        <div className="h-12"></div>
      </section>
      <footer className="bg-gray-900 w-full px-24 py-8 text-center">
        @tgashwinkumar - Last Updated: May 2024
      </footer>
    </main>
  );
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="lg:bg-white z-30 fixed lg:px-28 lg:py-4 flex flex-col lg:flex-row lg:items-center justify-between w-full lg:space-x-2 lg:pb-4">
      <div
        className={`flex flex-1 justify-between items-center bg-white py-2 px-4 lg:p-0`}
      >
        <h1 className="font-poppins lg:flex-1 font-extrabold text-xl lg:text-3xl text-gray-800">
          tgashwinkumar
          <span className="text-gray-600 text-5xl leading-3">.</span>{" "}
        </h1>
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
          {isOpen ? (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              className="menu w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              className="menu w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`${
          isOpen
            ? "[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] "
            : "[clip-path:polygon(0%_0%,100%_0%,100%_0%,0%_0%)] lg:[clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)]"
        } bg-white px-4 pb-4 lg:pb-0 border-b-gray-200 border-b lg:border-none lg:px-0 lg:bg-transparent shadow-lg z-30 lg:shadow-none transition-all duration-200  lg:pt-0 lg:flex space-y-2 lg:space-y-0 lg:space-x-8`}
      >
        <Link
          href="/#about"
          scroll={true}
          className="text-gray-700 hover:text-gray-500 transition-all cursor-pointer"
        >
          About
        </Link>
        <Link
          href="/#projects"
          scroll={true}
          className="text-gray-700 hover:text-gray-500 transition-all cursor-pointer"
        >
          Projects
        </Link>
        <Link
          href="/#publications"
          scroll={true}
          className="text-gray-700 hover:text-gray-500 transition-all cursor-pointer"
        >
          Publications
        </Link>
        <Link
          href="/#resume"
          scroll={true}
          className="text-gray-700 hover:text-gray-500 transition-all cursor-pointer"
        >
          Resume
        </Link>
      </ul>
      <div className="flex-1 hidden lg:flex items-center justify-end">
        <button className="px-4 py-2 border rounded-md border-gray-600 text-gray-700 font-semibold">
          Let's Chat
        </button>
      </div>
    </nav>
  );
};

const IntroSection = () => {
  return (
    <div id="about" className="flex flex-col lg:grid lg:grid-cols-5 w-full gap-4">
      <div className="w-full lg:col-span-3 bg-red-400 rounded-xl p-8 py-12 lg:p-12 flex flex-col justify-between">
        <div className="">
          <p className="text-4xl font-bold font-sans text-black">
            Hey, I'm Ashwin Kumar!
          </p>
          <p className="text-xl  text-gray-900 mt-8">
            I'm a Full Stack Developer and AI enthusiast based in{" "}
            <i>Madurai, India</i>. Driven by impact and adrenaline, I am always
            looking for new opportunities to learn and grow. I have worked on
            numerous projects and internships in the field of AI, Web
            Development and Blockchain, and I intent to keep the streak going
            with much more challenges.
          </p>
        </div>
        {/* <div className="h-12 lg:h-[10vh]"></div> */}
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            <div className="">
              <p className="text-lg text-gray-800">Phone number</p>
              <p className="text-black text-lg font-semibold">
                +91 96596 04838
              </p>
            </div>
            <div className="">
              <p className="text-lg text-gray-800">Email</p>
              <p className="text-black text-lg font-semibold">
                tgashwinkumar@gmail.com
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-800 py-4">You can also find me at</p>
          <div className="flex space-x-4 items-center justify-start">
            <FaLinkedin className="h-8 w-8 text-black" />
            <FaGithub className="h-8 w-8 text-black" />
            <FaInstagram className="h-8 w-8 text-black" />
          </div>
        </div>
      </div>
      <div className="relative w-full lg:col-span-2 bg-blue-400 h-full pt-24 [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] rounded-xl flex flex-col justify-end">
        <div className="absolute left-0 right-0 bottom-0 flex flex-col space-y-1 w-full items-center">
          {Array.from({ length: 10 }, (_, i) => 100 - i * 10).map((oval) => (
            <p
              className="italic font-bold text-6xl lg:text-[4.5vw] lg:leading-[4.5vw] opacity-100"
              style={{ opacity: `${oval / 100}` }}
            >
              tgashwinkumar.
            </p>
          ))}
        </div>
        <img
          src={"/me.png"}
          className="w-full h-auto filter grayscale drop-shadow-[-8px_0px_8px_rgba(96,_165,_250,_1)] "
        />
      </div>
    </div>
  );
};

const ProjectSection = () => {
  const ColorsList = [
    "#ffadad",
    "#ffd6a5",
    "#fdffb6",
    "#caffbf",
    "#9bf6ff",
    "#a0c4ff",
    "#bdb2ff",
    "#ffc6ff",
  ];

  const ProjectsList = [
    {
      title: "ltransf",
      text: "A Python library for Symbolic Laplace Transformations",
      githubLink: "https://github.com/tgashwinkumar/ltransf",
    },
    {
      title: "Basic Raytracer",
      text: "Inspired by Peter Shirley's Raytracing in a Weekend, A raytracer written in C++",
      githubLink: "https://github.com/tgashwinkumar/raytracer-basic",
    },
    {
      title: "Spiel Game Engine",
      text: " A C++ Library for building 2D Games with basic functionalities. ",
      githubLink: "https://github.com/tgashwinkumar/spiel-sdk",
    },
    {
      title: "cra-template-tailwindcss-react",
      text: "A custom Create-react-app template that wraps TailwindCSS and PostCSS ",
      githubLink:
        "https://github.com/tgashwinkumar/cra-template-tailwindcss-react",
      hrefLink: "https://www.npmjs.com/package/cra-template-tailwindcss-react",
    },
    {
      title: "Kriya 2023",
      text: "Official Website for Kriya 2023 - Annual Technical Symposium of PSG Tech",
      githubLink: "https://github.com/jeyam03/kriya-frontend-sdk",
      hrefLink: "https://kriya.psgtech.ac.in/",
    },
    {
      title: "Best Outgoing Student Awards",
      text: "Application portal for PSG Tech's Best Outgoing Student Awards",
      githubLink: "https://github.com/PSG-BOGS/kooratalvar-website-sdk",
      hrefLink: "https://bogs.psgtech.ac.in/",
    },
    {
      title: "Research Conclave",
      text: "Manuscript submission portal for PSG Tech's Research Conclave",
      hrefLink: "https://manuscript.psgtech.ac.in/",
    },
    {
      title: "ICAMM 2023",
      text: "Official Conference Website for International Conferenceon Applied Mathematical Models",
      githubLink: "https://github.com/tgashwinkumar/icamm2023-react-sdk",
      hrefLink: "https://tgashwinkumar.github.io/icamm2023-react-sdk/",
    },
    {
      title: "KMap Solver",
      text: "A simple Java Library for handling Karnaugh Maps",
      githubLink: "https://github.com/tgashwinkumar/kmap-solver",
    },
  ];

  return (
    <div id="projects" className="flex flex-col lg:grid grid-cols-4 w-full gap-4 text-black">
      <h1 className="text-6xl font-extrabold w-full py-4 text-center lg:text-left">Projects.</h1>
      {ProjectsList.map(({ title, text, githubLink, hrefLink }, index) => (
        <div
          style={{ background: `${ColorsList[index % ColorsList.length]}` }}
          className="w-full rounded-lg flex flex-col justify-between p-8"
        >
          <div className="">
            <h1 className="text-2xl text-black font-bold">{title}</h1>
            <h2 className="text text-gray-800">{text}</h2>
          </div>

          {(githubLink || hrefLink) && (
            <div className="flex items-center space-x-2 mt-8">
              <p className="text-sm">View it in </p>
              {githubLink && (
                <Link href={githubLink}>
                  <FaGithub className="h-6 w-6 text-black" />
                </Link>
              )}
              {hrefLink && (
                <Link href={hrefLink}>
                  <FaLink className="h-6 w-6 text-black" />
                </Link>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const PublicationsSection = () => {
  return (
    <div id="publications" className="w-full space-y-4">
      <h1 className="text-6xl text-black font-extrabold w-full py-4 text-center">
        Publications.
      </h1>
      <div className="flex flex-col lg:grid grid-cols-2 w-full gap-4">
        <div className="bg-slate-300 w-full min-h-40 rounded-lg p-8 flex flex-col justify-between">
          <div className="">
            <h1 className="text-2xl text-black font-bold">
              A Framework for Smart CSS
            </h1>
            <h2 className="text text-gray-600 italic">
              International Conference on High Performance and Intelligent
              Computing 2022
            </h2>
            <div className="mt-8 text-gray-800">
              Cascading Style sheet (CSS) has been an integral part of all the
              websites that we visit in our day-to-day life. Thanks to that, we
              have reached a state of developing masterly crafted websites which
              are more or less similar to the graphics seen in films. It brings
              to a point of creating the most optimal and developer-friendly CSS
              framework. This paper aims to describe the features and discuss
              the working of such a framework. There are many popular and
              established libraries that are used by the current frontend
              developers and this paper compares those libraries towards a
              better framework.
            </div>
          </div>
          <Link
            target="_blank"
            href="/A Framework for Smart CSS.pdf"
            className="mt-12 text-black font-mono w-fit pb-1 border-b-black hover:border-b-2 border-dashed"
          >
            Download PDF
          </Link>
        </div>
        <div className="bg-slate-300 w-full min-h-40 rounded-lg p-8 flex flex-col justify-between">
          <div className="">
            <h1 className="text-2xl text-black font-bold">
              Strike Price Recommendations for NIFTY 50 Index Options
            </h1>
            <h2 className="text text-gray-600 italic">
              International Conference for Smart Systems for Electrical ,
              Electronics, Communication and Computer Engineering 2024
              <i>(yet ot appear)</i>
            </h2>
            <div className="mt-8 text-gray-800">
              The burgeoning complexity and inherent uncertainty of stock market
              trading strategies, particularly for Index Options, necessitates
              the need for innovative solutions. Deep learning techniques hold
              immense promise in navigating this dynamic landscape, offering
              potent tools for optimizing option selections and strike prices.
              This project delves into the potential of harnessing a novel
              Convolutional Neural Network (CNN) architecture to predict optimal
              price ranges for the NIFTY 50 index, thereby enhancing the
              effectiveness of index options trading strategies. Drawing upon
              historical data and rigorous empirical analysis, this study
              demonstrates the feasibility of this approach, achieving an
              accuracy rate of 63.22%. Beyond improved forecasting accuracy, the
              system also provides actionable buy or sell recommendations,
              empowering investors to navigate the options market with greater
              confidence and precision.
            </div>
          </div>
          <Link
            target="_blank"
            href="/Strike Price Recommendations for NIFTY 50 Index Options IEEE Paper - Unblinded.pdf"
            className="box-border mt-12 text-black font-mono w-fit pb-1 hover:border-b-black hover:border-b-2 border-dashed"
          >
            Download PDF
          </Link>
        </div>
      </div>
    </div>
  );
};

const ResumeSection = () => {
  return (
    <div id="resume" className="relative rounded-lg bg-blue-300 text-black w-full p-8 flex items-center justify-between">
      <div className="absolute h-full [background:linear-gradient(to_right,rgba(147,197,253,0)_0%,rgba(147,197,253,0.9)_20%,rgba(147,197,253,0.9)_80%,rgba(147,197,253,0)_100%)] w-full right-0"></div>
      <div className="relative lg:absolute w-full h-full space-y-4 lg:space-y-0 lg:space-x-6 flex flex-col lg:flex-row items-center justify-center">
        <h1 className="text-2xl font-bold">Get my resume </h1>
        <Link
          href="/Resume.pdf"
          target="_blank"
          className="bg-white text-black font-semibold text-xl shadow-xl p-2 px-6 rounded-md"
        >
          Download
        </Link>
      </div>
      <div className="hidden lg:flex flex-wrap gap-y-2 gap-x-3 items-center justify-center w-full">
        {[
          "Python",
          "C++",
          "Java",
          "Javascript",
          "Typescript",
          "Rust",
          "Object Segmentation",
          "Natural Language Processing",
          "OpenCV",
          "Flask",
          "Pytorch",
          "Flutter",
          "NodeJS",
          "ReactJS",
          "Django",
          "OpenGL",
          "Git & Github",
          "CMake",
          "Figma",
          "Research Formulation",
          "Paper Drafting",
          "Presentation Skills",
          "Problem Solving",
          "Agile Development",
          "Leadership",
          "Public Speaking",
          "Documentation writing",
        ].map((skill) => (
          <div className="px-4 text-sm py-2 rounded-md bg-blue-500 text-white">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};
