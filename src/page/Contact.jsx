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
          className="absolute leading-[4rem] top-[2.5rem] text-[4rem] sm:text-[5rem] lg:text-[7rem] xl:text-[9.5rem] 2xl:text-[10rem] tracking-tighter "
        >
          STAY CONNECTED
        </motion.div>
      </motion.div>
      <div className="pt-[13rem] flex flex-col gap-[3rem] items-center md:block">
        <div className="md:w-[50%] md:absolute md:top-[25vh] xl:top-[28vh] md:left-[15vw]">
          <Ask />
        </div>
        <div className="text-[0.8rem] absolute bottom-[0.5rem] right-[1.5rem]">
          TAITA11.WORK@GMAIL.COM
        </div>
      </div>
    </div>
  );
};
export default Contact;
