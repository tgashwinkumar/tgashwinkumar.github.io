import Link from "next/link";
import { FaGithub, FaInstagram, FaLink, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <nav className="bg-white z-30 fixed px-28 flex items-center justify-between w-full space-x-2 py-2 pb-4">
        <h1 className="font-poppins flex-1 font-extrabold text-3xl text-gray-800">
          tgashwinkumar<span className="text-gray-600 text-5xl">.</span>{" "}
        </h1>
        <ul className="flex space-x-8">
          <li className="text-gray-700 hover:text-gray-500 transition-all cursor-pointer">
            About
          </li>
          <li className="text-gray-700 hover:text-gray-500 transition-all cursor-pointer">
            Projects
          </li>
          <li className="text-gray-700 hover:text-gray-500 transition-all cursor-pointer">
            Publications
          </li>
          <li className="text-gray-700 hover:text-gray-500 transition-all cursor-pointer">
            Resume
          </li>
        </ul>
        <div className="flex-1 flex items-center justify-end">
          <button className="px-4 py-2 border rounded-md border-gray-600 text-gray-700 font-semibold">
            Let's Chat
          </button>
        </div>
      </nav>
      <section className="font-raleway relative flex min-h-screen flex-col space-y-12 items-center px-24 bg-white">
        <div className="h-8"></div>
        <IntroSection />
        <ProjectSection />
        <PublicationsSection />
        <ResumeSection />
        <div className="h-12"></div>
      </section>
      <footer className="bg-gray-900 w-full px-24 py-8">
        @tgashwinkumar
      </footer>
    </main>
  );
}

const IntroSection = () => {
  return (
    <div className="grid grid-cols-5 w-full gap-4">
      <div className="col-span-3 bg-red-400 rounded-xl p-12 flex flex-col">
        <p className="text-4xl font-bold font-sans text-black">
          Hey, I'm Ashwin Kumar!
        </p>
        <p className="text-xl  text-gray-900 mt-8">
          I'm a Full Stack Developer and AI enthusiast based in{" "}
          <i>Madurai, India</i>. Driven by impact and adrenaline, I am always
          looking for new opportunities to learn and grow. I have worked on
          numerous projects and internships in the field of AI, Web Development
          and Blockchain, and I intent to keep the streak going with much more
          challenges.
        </p>
        <div className="flex-1"></div>
        <div className="grid grid-cols-2 w-full">
          <div className="">
            <p className="text-lg text-gray-800">Phone number</p>
            <p className="text-black text-lg font-semibold">+91 96596 04838</p>
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
      <div className=" relative col-span-2 bg-blue-400 h-[36rem] [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%)] rounded-xl flex items-end">
        <div className="flex flex-col w-full items-center">
          <p className="italic font-bold text-7xl opacity-100">
            tgashwinkumar.
          </p>
          <p className="italic font-bold text-7xl opacity-90">tgashwinkumar.</p>
          <p className="italic font-bold text-7xl opacity-80">tgashwinkumar.</p>
          <p className="italic font-bold text-7xl opacity-70">tgashwinkumar.</p>
          <p className="italic font-bold text-7xl opacity-60">tgashwinkumar.</p>
          <p className="italic font-bold text-7xl opacity-50">tgashwinkumar.</p>
          <p className="italic font-bold text-7xl opacity-40">tgashwinkumar.</p>
          <p className="italic font-bold text-7xl opacity-30">tgashwinkumar.</p>
          <p className="italic font-bold text-7xl opacity-20">tgashwinkumar.</p>
          <p className="italic font-bold text-7xl opacity-10">tgashwinkumar.</p>
        </div>
        <img
          src={"/me.png"}
          className="absolute left-0 right-0 bottom-0 w-full h-auto filter grayscale drop-shadow-[-8px_0px_8px_rgba(96,_165,_250,_1)]"
        />
      </div>
    </div>
  );
};

const ProjectSection = () => {
  return (
    <div className="grid grid-cols-4 w-full gap-4 text-black">
      <h1 className="text-6xl font-extrabold w-full py-4">Projects.</h1>
      <ProjectCard color="#ffadad" title="Project 1" text="This is a project" />
      <ProjectCard
        color="#ffd6a5"
        title="Project 2"
        text="This is a project. This is a project. This is a project"
      />
      <ProjectCard color="#fdffb6" title="Project 3" text="This is a project" />
      <ProjectCard color="#caffbf" title="Project 4" text="This is a project" />
      <ProjectCard color="#9bf6ff" title="Project 5" text="This is a project" />
    </div>
  );
};

const ProjectCard = ({
  color,
  title,
  text,
  githubLink = "",
  hrefLink = "aa",
}) => {
  return (
    <div
      style={{ background: `${color}` }}
      className="w-full rounded-lg flex flex-col justify-between p-8"
    >
      <div className="">
        <h1 className="text-2xl text-black font-bold">{title}</h1>
        <h2 className="text text-gray-800">{text}</h2>
      </div>
      <div className="flex items-center space-x-2 mt-8">
        <p className="text-sm">View it in </p>
        <Link href={githubLink}>
          <FaGithub className="h-6 w-6 text-black" />
        </Link>
        {hrefLink && (
          <Link href={hrefLink}>
            <FaLink className="h-6 w-6 text-black" />
          </Link>
        )}
      </div>
    </div>
  );
};

const PublicationsSection = () => {
  return (
    <div className="w-full space-y-4">
      <h1 className="text-6xl text-black font-extrabold w-full py-4 text-center ">
        Publications.
      </h1>
      <div className="grid grid-cols-2 w-full space-x-4">
        <div className="bg-slate-300 w-full min-h-40 rounded-lg p-8 flex flex-col justify-between">
          <div className="">
            <h1 className="text-2xl text-black font-bold">Publication 1</h1>
            <h2 className="text text-gray-600 italic">
              Lorem Ipsum Conference 2018
            </h2>
            <div className="mt-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ultricies, nisi ac mollis tincidunt, arcu odio tincidunt purus,
              nec ultricies sapien odio sit amet libero. Nulla facilisi. Nulla
            </div>
          </div>
          <button className="mt-12 text-black font-mono w-fit pb-1 border-b-black hover:border-b-2 border-dashed">
            Download PDF
          </button>
        </div>
        <div className="bg-slate-300 w-full min-h-40 rounded-lg p-8 flex flex-col justify-between">
          <div className="">
            <h1 className="text-2xl text-black font-bold">Publication 1</h1>
            <h2 className="text text-gray-600 italic">
              Lorem Ipsum Conference 2018
            </h2>
            <div className="mt-8 text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ultricies, nisi ac mollis tincidunt, arcu odio tincidunt purus,
              nec ultricies sapien odio sit amet libero. Nulla facilisi. Nulla
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ultricies, nisi ac mollis tincidunt, arcu odio tincidunt purus,
              nec ultricies sapien odio sit amet libero. Nulla facilisi. Nulla
            </div>
          </div>
          <button className="mt-12 text-black font-mono w-fit pb-1 border-b-black hover:border-b-2 border-dashed">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

const ResumeSection = () => {
  return (
    <div className="relative rounded-lg bg-blue-300 text-black w-full p-8 flex items-center justify-between">
      <div className="absolute h-full [background:linear-gradient(to_right,rgba(147,197,253,0)_0%,rgba(147,197,253,0.9)_20%,rgba(147,197,253,0.9)_80%,rgba(147,197,253,0)_100%)] w-full right-0"></div>
      <div className="absolute w-full h-full space-x-6 flex flx-col items-center justify-center">
        <h1 className="text-2xl font-bold">Get my resume </h1>
        <button className="bg-white text-black font-semibold text-xl shadow-xl p-2 px-6 rounded-md">
          Download
        </button>
      </div>
      <div className="flex flex-wrap gap-y-2 gap-x-3 items-center justify-center w-full">
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
