import Ask from "./Ask";
import { motion } from "framer-motion";

const ContactVariants = {
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

const Contact = () => {
  return (
    <div
      id="contact"
      className="mt-[-5rem] sm:mt-[0rem] relative pb-[5rem] md:pb-[0rem] md:h-screen md:w-screen bg-[#f2f5f3]"
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.div
          variants={ContactVariants}
          className="absolute leading-[4rem] top-[2.5rem] text-[4rem] sm:text-[5rem] lg:text-[7rem] 5rem] xl:text-[9.5rem] 2xl:text-[10rem] tracking-tighter "
        >
          STAY CONNECTED
        </motion.div>
      </motion.div>
      <div className="pt-[13rem] flex flex-col gap-[3rem] items-center md:block">
        <div className="h-[40vh] md:h-[60%] md:w-[50%] md:absolute md:top-[25vh] xl:top-[28vh] md:left-[15vw]">
          <Ask />
        </div>
        <div className="flex flex-col items-start w-[80vw] md:w-[25vw] md:absolute md:top-[30vh] xl:top-[38vh] md:right-[15vw] z-50">
          <div className="border border-[1px] border-[#111] border-opacity-50 w-full "></div>
          <div className="">MY SOCIALS</div>
          <div className="flex flex-col leading-[3.5rem] md:leading-[2.5rem] lg:leading-[3.5rem] tracking-tighter">
            <a
              href="https://www.linkedin.com/in/taita/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded relative overflow-hidden transition-all duration-500 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-transparent before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full hover:before:bg-black hover:transform hover:skew-x-[15deg]"
            >
              <span className="relative z-10 text-[3.5rem] md:text-[3rem] lg:text-[4rem] tracking-tighter">
                LINKEDIN
              </span>
            </a>
            <a
              href="https://www.instagram.com/_takid_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded relative overflow-hidden transition-all duration-500 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-transparent before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full hover:before:bg-[black] hover:transform hover:skew-x-[15deg]"
            >
              <span className="relative z-10 text-[3.5rem] md:text-[3rem] lg:text-[4rem] tracking-tighter">
                INSTAGRAM
              </span>
            </a>
            <a
              href="https://www.facebook.com/tai.ta.9277/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded relative overflow-hidden transition-all duration-500 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-transparent before:transition-all before:duration-500 hover:text-white hover:before:left-0 hover:before:w-full hover:before:bg-black hover:transform hover:skew-x-[15deg]"
            >
              <span className="relative z-10 text-[3.5rem] md:text-[3rem] lg:text-[4rem] tracking-tighter">
                FACEBOOK
              </span>
            </a>
          </div>
        </div>
        <div className="text-[0.8rem] absolute bottom-[0.5rem] right-[1.5rem]">
          TAITA11.WORK@GMAIL.COM
        </div>
      </div>
    </div>
  );
};
export default Contact;
