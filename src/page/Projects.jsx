import { motion } from "framer-motion";
import "./Projects.css";
import img1 from "../../public/scavengerhunt11.webp";
import img2 from "../../public/healthsystem12.webp";
import img3 from "../../public/musicrecommendation12.webp";
import img4 from "../../public/studyspot12.webp";
import img5 from "../../public/mindmove12.webp";
import img6 from "../../public/ikigai12.webp";
import img7 from "../../public/crashvisuals12.webp";
import img8 from "../../public/theUni12.webp";

const ProjectVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 2,
    },
  },
};

const Projects = () => {
  return (
    <div
      id="projects"
      className="relative bg-[#f2f5f3] z-20 mt-[-3rem] sm:mt-[0rem]"
    >
      <div className="flex flex-col sm:flex-row xl:gap-4">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
        >
          <motion.div
            variants={ProjectVariants}
            className="text-[4rem] sm:text-[5rem] lg:text-[7rem] 5rem] xl:text-[9.5rem] 2xl:text-[10rem] tracking-tighter mt-[-3rem]"
          >
            PROJECTS
          </motion.div>
        </motion.div>
        <span className="flex flex-row items-end pr-[5rem] text-[1rem] px-[1rem] -mt-[1rem] pb-[1.8rem] md:pb-[2rem] lg:pb-[2.5rem] xl:text-[1.2rem] xl:pb-[3.3rem]">
          <span className="bg-[#8FFF00] rounded">
            . together we achieve more
          </span>
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-2 sm:mt[0rem] xl:mt-[-2rem]">
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className=" group bg-custom-image h-[50vh] relative transition-all duration-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:transition-all after:duration-500 text-transparent hover:text-white hover:text-opacity-85  hover:after:h-full after:bg-transparent hover:after:bg-black hover:after:bg-opacity-50 hover:after:z-10 flex flex-col justify-center items-center "
        >
          <div className="flex flex-col justify-center items-center gap-4 font-['Satoshi-light'] w-[80%] z-40">
            <span className="font-['Satoshi-bold'] text-[1rem] sm:text-[1.5rem]">
              Scavenger Hunt
            </span>
            <span className="text-center text-[0.7rem] sm:text-[1rem]">
              a game-style web application, transforms traditional scavenger
              hunts into an immersive digital experience, perfect for
              individuals, families, and groups. Your go-to platform for
              engaging hunts.
            </span>
            <span className="text-[0.6rem] sm:text-[0.8rem]">
              ( under development )
            </span>
            <a
              href="https://play-scavenger-hunt.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90 text-[#8FFF00] text-[0.8rem] text-[1.2rem]"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img2})` }}
          className="group bg-custom-image h-[50vh] relative overflow-hidden transition-all duration-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:transition-all after:duration-500 text-transparent hover:text-white hover:text-opacity-85  hover:after:h-full after:bg-transparent hover:after:bg-black hover:after:bg-opacity-50 hover:after:z-10 flex flex-col justify-center items-center "
        >
          <div className="flex flex-col justify-center items-center gap-4 font-['Satoshi-light'] w-[80%] z-50">
            <span className="font-['Satoshi-bold']  text-[1rem] sm:text-[1.5rem]">
              Health System
            </span>
            <span className="text-center text-[0.7rem] sm:text-[1rem]">
              This health system app allows patients to manage appointments,
              nurses to control their schedules, and admins to oversee staff and
              patient details, with real-life applicable constraints.
            </span>
            <a
              href="https://github.com/thanhtaita/HealthSystem"
              target="_blank"
              rel="noopener noreferrer"
              className="underline opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90 text-[#8FFF00] text-[0.8rem] text-[1.2rem]"
            >
              Visit Github
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img3})` }}
          className="group bg-custom-image h-[50vh] relative overflow-hidden transition-all duration-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:transition-all after:duration-500 text-transparent hover:text-white hover:text-opacity-85  hover:after:h-full after:bg-transparent hover:after:bg-black hover:after:bg-opacity-50 hover:after:z-10 flex flex-col justify-center items-center "
        >
          <div className="flex flex-col justify-center items-center gap-4 font-['Satoshi-light'] w-[80%] z-50">
            <span className="font-['Satoshi-bold']  text-[1rem] sm:text-[1.5rem]">
              Maybe You Like
            </span>
            <span className="text-center text-[0.7rem] sm:text-[1rem]">
              The project aims to develop a predictive app using the Spotify
              API, analyzing users&apos; listening histories and preferences to
              forecast their liking for selected songs.
            </span>
            <a
              href="https://github.com/thanhtaita/MaybeYouLike"
              target="_blank"
              rel="noopener noreferrer"
              className="underline opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90 text-[#8FFF00] text-[0.8rem] text-[1.2rem]"
            >
              Visit Github
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img4})` }}
          className=" group bg-custom-image h-[50vh] relative transition-all duration-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:transition-all after:duration-500 text-transparent hover:text-white hover:text-opacity-85  hover:after:h-full after:bg-transparent hover:after:bg-black hover:after:bg-opacity-50 hover:after:z-10 flex flex-col justify-center items-center "
        >
          <div className="flex flex-col justify-center items-center gap-4 font-['Satoshi-light'] w-[80%] z-40">
            <span className="font-['Satoshi-bold']  text-[1rem] sm:text-[1.5rem]">
              Study Spot
            </span>
            <span className="text-center text-[0.7rem] sm:text-[1rem]">
              an automated grading platform, uses ChatGPT to evaluate
              assignments, matching them against rubrics to grade and provide
              detailed feedback on students&apos; strengths and weaknesses.
            </span>
            <a
              href="https://studyspot-pi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90 text-[#8FFF00] text-[0.8rem] text-[1.2rem]"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img5})` }}
          className=" group bg-custom-image h-[50vh] relative transition-all duration-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:transition-all after:duration-500 text-transparent hover:text-white hover:text-opacity-85  hover:after:h-full after:bg-transparent hover:after:bg-black hover:after:bg-opacity-50 hover:after:z-10 flex flex-col justify-center items-center "
        >
          <div className="flex flex-col justify-center items-center gap-4 font-['Satoshi-light'] w-[80%] z-40">
            <span className="font-['Satoshi-bold']  text-[1rem] sm:text-[1.5rem]">
              Mindmove
            </span>
            <span className="text-center text-[0.7rem] sm:text-[1rem]">
              an online platform designed to serve as a hub for a dancing
              academy. It provides individuals with the opportunity to register
              for dancing classes and workshops. A game is also included to
              demonstrate a learning technique, which boosts the website&apos;s
              interactivity.
            </span>
            <a
              href="https://github.com/thanhtaita/MindMove"
              target="_blank"
              rel="noopener noreferrer"
              className="underline opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90 text-[#8FFF00] text-[0.8rem] text-[1.2rem]"
            >
              Visit Github
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img6})` }}
          className=" group bg-custom-image h-[50vh] relative transition-all duration-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:transition-all after:duration-500 text-transparent hover:text-white hover:text-opacity-85  hover:after:h-full after:bg-transparent hover:after:bg-black hover:after:bg-opacity-50 hover:after:z-10 flex flex-col justify-center items-center "
        >
          <div className="flex flex-col justify-center items-center gap-4 font-['Satoshi-light'] w-[80%] z-40">
            <span className="font-['Satoshi-bold']  text-[1rem] sm:text-[1.5rem]">
              Ikigai
            </span>
            <span className="text-center text-[0.7rem] sm:text-[1rem]">
              This website presents to viewers Ikigai, an ancient Japanese
              philosophy that helps shape the Japanese people&apos;s ideology in
              terms of having a complete life with the awareness of presence.
            </span>
            <a
              href="https://thanhtaita.github.io/Ikigai/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90 text-[#8FFF00] text-[0.8rem] text-[1.2rem]"
            >
              Visit Site
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img7})` }}
          className=" group bg-custom-image h-[50vh] relative transition-all duration-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:transition-all after:duration-500 text-transparent hover:text-white hover:text-opacity-85  hover:after:h-full after:bg-transparent hover:after:bg-black hover:after:bg-opacity-50 hover:after:z-10 flex flex-col justify-center items-center "
        >
          <div className="flex flex-col justify-center items-center gap-4 font-['Satoshi-light'] w-[80%] z-40">
            <span className="font-['Satoshi-bold']  text-[1rem] sm:text-[1.5rem]">
              Chicago Crash Visuals
            </span>
            <span className="text-center text-[0.7rem] sm:text-[1rem]">
              {" "}
              This webpage shows some visualizations of the Chicago crash data.
              Some visualizations are interactive, allowing users to see the
              correlation between different attributes of the data.
            </span>
            <a
              href="https://github.com/thanhtaita/CrashVisualization/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90 text-[#8FFF00] text-[0.8rem] text-[1.2rem]"
            >
              Visit Github
            </a>
          </div>
        </div>
        <div
          style={{ backgroundImage: `url(${img8})` }}
          className=" group bg-custom-image h-[50vh] relative transition-all duration-500 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:transition-all after:duration-500 text-transparent hover:text-white hover:text-opacity-85  hover:after:h-full after:bg-transparent hover:after:bg-black hover:after:bg-opacity-50 hover:after:z-10 flex flex-col justify-center items-center "
        >
          <div className="flex flex-col justify-center items-center gap-4 font-['Satoshi-light'] w-[80%] z-40">
            <span className="font-['Satoshi-bold']  text-[1rem] sm:text-[1.5rem]">
              theUni
            </span>
            <span className="text-center text-[0.7rem] sm:text-[1rem]">
              A platform for students to post their public schedule to find
              study buddies. Students who don&apos;t know each other still can
              work together. This helps build connections in class as well as on
              campus
            </span>
            <span className="text-[0.6rem] sm:text-[0.8rem]">
              ( under development )
            </span>
            <a
              href="https://github.com/thanhtaita/theUni/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90 text-[#8FFF00] text-[0.8rem] text-[1.2rem]"
            >
              Visit Github
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
