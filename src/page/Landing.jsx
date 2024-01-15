import "./Landing.css";
import { useState, useEffect, useRef } from "react";
const texts = [
  "Hi, there! My name is Tai and I am a software engineer based in Chicago, Illinois. I'm currently a senior at the University of Illinois at Chicago.",
  "Aware of the transformative power of technology and determined to make a difference in the world, I am passionate about creating software that enhances educational equality.",
  "I'm also aware of the importance of understanding inner-self to know what I want, and how I contribute to this world.",
  "I think many of us would agree that we live in a world where we're constantly running, changing, and adapting to new challenges, often without recognizing our true desires.",
  "I believe that investing the effort to understand ourselves is immensely worthwhile, and I'm on my way to make it easier for everybody to do so.",
];

const Landing = () => {
  const [count, setCount] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval after 4 seconds");
      const textElement = document.getElementById("text-animate");
      textElement.classList.add("hidden");
      textElement.classList.remove("lineUp");
      setCount((prevCount) => (prevCount + 1) % texts.length);
      textElement.classList.remove("hidden");
      textElement.classList.add("lineUp");
    }, 6000); // Match this duration with your animation duration
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="about"
      className="relative h-[100vh] w-[100vw] overflow-hidden bg-[#f2f5f3] z-20 pb-[65rem] md:pb-[70rem] xl:pb-[0rem]"
    >
      <div className="absolute top-[-2rem] left-[2vw]">
        <div className="text-[7rem] text-center sm:text-[9rem] md:text-[11rem] xl:text-[15rem] overflow-hidden">
          TAITA
        </div>
        <div className="grid grid-rows-3 grid-flow-col gap-2">
          <a
            href="#about"
            className="flex items-center text-[1rem] md:text-[1.2rem] xl:text-[1.5rem] tracking-tight relative  overflow-hidden transition-all duration-500 before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-transparent before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full hover:before:bg-black pl-[0.5rem]"
          >
            <span className="relative z-10">ABOUT</span>
          </a>
          <a
            href="#projects"
            className="flex items-center text-[1rem] md:text-[1.2rem] xl:text-[1.5rem] tracking-tight bg-[#8FFF00] rounded border border-black relative overflow-hidden transition-all duration-500 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-transparent before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full hover:before:bg-black pl-[0.5rem]"
          >
            <span className="relative z-10">PROJECTS</span>
          </a>
          <a
            href="#shares"
            className="flex items-center text-[1rem] md:text-[1.2rem] xl:text-[1.5rem] tracking-tight relative overflow-hidden transition-all duration-500 before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-transparent before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full hover:before:bg-black pl-[0.5rem]"
          >
            <span className="relative z-10">SHARES</span>
          </a>
          <a
            href="#ask"
            className="flex items-center text-[1rem] md:text-[1.2rem] xl:text-[1.5rem] tracking-tight border border-black relative overflow-hidden transition-all duration-500 before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-transparent before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full hover:before:bg-black pl-[0.5rem]"
          >
            <span className="relative z-10">ASK</span>
          </a>
          <a
            href="#contact"
            className="flex items-center text-[1rem] md:text-[1.2rem] xl:text-[1.5rem] tracking-tight relative overflow-hidden transition-all duration-500 before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-transparent before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full hover:before:bg-black pl-[0.5rem]"
          >
            <span className="relative z-10">CONTACT</span>
          </a>
          <div></div>
          <div></div>
          <a
            href="https://drive.google.com/file/d/1aYRxYmTTTjLBairgDDoDDxw6aGWktf8Z/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-[1rem] md:text-[1.2rem] xl:text-[1.5rem] tracking-tight relative overflow-hidden transition-all duration-500 before:absolute before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-transparent before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full hover:before:bg-black pl-[0.5rem]"
          >
            <span className="relative z-10 underline">.RESUME</span>
          </a>
        </div>
      </div>
      {/* <div className="absolute right-[-10vw]">
        <Spline scene="https://prod.spline.design/YHssogvGQ6t8cTHD/scene.splinecode" />
      </div> */}
      <div className="absolute left-[1vw] top-[1vh] mt-[7rem] w-[95vw] xl:w-[60vw] sm:mt-[9rem] md:mt-[11rem] xl:mt-[17rem] h-[1px] bg-black"></div>
      <div className="absolute left-[90vw] xl:left-[55vw] 2xl:left-[50vw] mt-[1rem] h-[30vh] xl:h-[60vh] xl:h-[53vh] w-[1px] bg-black"></div>
      <div
        id="text-animate"
        ref={textRef}
        className="lineUp absolute w-[18em] font-['Satoshi-light'] sm:w-[25rem] md:w-[40rem] xl:w-[35rem] left-[3rem] top-[48rem] sm:top-[53rem] md:top-[57rem] xl:top-[70vh] xl:left-[20vw] text-[1rem] md:text-[1rem] tracking-widest leading-normal text-center"
      >
        <p>{texts[count]}</p>
      </div>
      <div className="absolute h-[25rem] sm:h-[30rem] w-[100vw] top-[18rem] sm:top-[20rem] md:top-[25rem] xl:h-[100%] xl:w-[38%] xl:top-0 xl:right-0 z-50 overflow-hidden rounded">
        <div className="absolute flex flex-row  tracking-wide text-[0.8rem] gap-5 md:text-[1.2rem] md:gap-14 top-[0rem] left-[1rem] md:left-[5rem] md:w-[60rem] xl:w-[40rem] xl:text-[1.2rem] xl:gap-10 xl:top-[20rem] xl:left-[-17.5rem] xl:rotate-90 text-black z-50 overflow-visible">
          <span>software-engineer</span>
          <span>frontend-developer</span>
          <span>fullstack-developer</span>
        </div>
        <div className="bg-landing-image h-[90%] bottom-0 w-[100%] xl:bottom-auto xl:h-full xl:w-[90%] right-0 absolute"></div>
      </div>
    </div>
  );
};

export default Landing;
