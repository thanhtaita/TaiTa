// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import { AiOutlineLike } from "react-icons/ai";
import { FaCommentAlt, FaRegCommentAlt } from "react-icons/fa";
import { TbShare3 } from "react-icons/tb";
import { motion } from "framer-motion";

import article_1 from "../../public/sperm_article1.webp";
import book_1 from "../../public/remember_book1.webp";
import book_2 from "../../public/freak_book1.webp";

import { useState } from "react";

// react-id-swiper
import Swiper from "react-id-swiper";
import "swiper/css";
// import "swiper/css/swiper.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Shares.css";

const SharesVariants = {
  offscreen: {
    y: 30,
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

//slider config options

const HeroSliderConfigs = {
  containerClass: "swiper-container hero-slider",
  parallax: true,
  centeredSlides: true,
  speed: 500,
  spaceBetween: 0,
  effect: "slide",
};

//slider component
const Shares = () => {
  const [parallaxSwiper, setParallaxSwiper] = useState(null);
  const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
  const parallaxOpacity = 0.5;

  return (
    <div className="mt-[4rem] sm:mt-[0rem] mb-[3rem]" id="shares">
      <div className=" w-[100vw] flex flex-row justify-end text-[3.5rem] pr-[2rem] leading-[4rem] mb-[2rem] sm:leading-normal sm:mb-[0rem] text-[4rem] top-[2.5rem] sm:text-[5rem] lg:text-[7rem] 5rem] xl:text-[9.5rem] 2xl:text-[10rem] tracking-tighter text-[#111]">
        <div className="relative text-right w-[100%] sm:w-[75%] ">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0.8 }}
          >
            <motion.div variants={SharesVariants} className="relative z-20">
              WHAT i READ
            </motion.div>
          </motion.div>
          <div className="absolute w-full h-[1.2rem] top-[65%] bg-[#8FFF00] z-10"></div>
        </div>
      </div>
      <Swiper {...HeroSliderConfigs} getSwiper={setParallaxSwiper}>
        {/* 1 */}
        <div className="hero-slide sm:h-[100vh] max-h-[1100px] pb-[2rem] md:pb-[0rem]">
          <div
            className="h-[50vh] sm:h-[50%] w-[100%] md:h-[100%] md:w-[50%] flex flex-col justify-center"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img
              src={book_1}
              alt="image1"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="text-[1.5rem] xl:text-[1.8rem] text-[#111] z-50 w-[90%] sm:w-[70%] xl:w-[50%] pr-[2rem]">
            <a
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#559602]"
              href="https://www.goodreads.com/en/book/show/54895704"
            >
              Remember - Lisa Genova
            </a>
            <div className="flex flex-row text-[0.8rem] gap-[1rem]">
              <div className="p-[0.5rem] bg-[#ddd] rounded-xl">book</div>
              <div className="p-[0.5rem] bg-[#ddd] rounded-xl">
                neuroscience
              </div>
              <div className="p-[0.5rem] bg-[#ddd] rounded-xl">memory</div>
            </div>
            <div className="text-[0.8rem] tracking-wide font-['Satoshi-regular'] mt-[1rem] leading-[1.5rem] pb-[1rem] border-black border-b-[1px]">
              It covers many topics like paying attention, sleeping, forgetting
              mechanism, and many more. Her approach is both accessible and
              thorough, making the science behind memory understandable for all
              readers. Genova delves into how memory is intricately linked to
              our senses and emotions, providing fascinating insights into how
              we can harness this understanding for better recall. She also
              debunks common myths about memory loss and aging, offering a
              hopeful perspective on maintaining cognitive health. Whether
              you&apos;re interested in the science of memory or seeking ways to
              improve your own memory, &apos;Remember&apos; is a compelling read
              that bridges the gap between complex neurological concepts and
              everyday experiences.
            </div>
            {/* <div className="flex flex-row justify-between border-y border-1 border-[#aaa] font-['Satoshi-regular'] py-[0.5rem] px-[1rem] my-[1rem]">
              <div className="flex justify-center items-center gap-1">
                <AiOutlineLike color="#111" size={20} />
                <span className="text-[0.6rem] xl:text-[0.8rem]">Like </span>
                <span className="num-status xl:ml-[0.8rem] text-[0.7rem] xl:text-[0.9rem]">
                  12
                </span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <FaRegCommentAlt color="#111" size={16} />
                <span className="text-[0.6rem] xl:text-[0.8rem]">Comment </span>
                <span className="num-status xl:ml-[0.8rem] text-[0.7rem] xl:text-[0.9rem]">
                  24
                </span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <TbShare3 color="#111" size={20} />
                <span className="text-[0.6rem] xl:text-[0.8rem]">Share </span>
                <span className="num-status xl:ml-[0.8rem] text-[0.7rem] xl:text-[0.9rem]">
                  30
                </span>
              </div>
            </div> */}
            <div className="flex flex-row justify-end">
              <span className="text-[0.7rem] xl:text-[0.8rem]">
                Posted date: 01/14/2024
              </span>
            </div>
          </div>
        </div>
        <div className="hero-slide sm:h-[100vh] max-h-[1100px] pb-[2rem] md:pb-[0rem]">
          <div
            className="h-[50vh] sm:h-[50%] w-[100%] md:h-[100%] md:w-[50%] flex flex-col justify-center"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img
              src={article_1}
              alt="image1"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="text-[1.5rem] xl:text-[1.8rem] text-[#111] z-50 w-[90%] sm:w-[70%]  xl:w-[50%] pr-[2rem]">
            <a
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#559602]"
              href="https://www.wired.com/story/sperm-death-sex-bioethics-conception/"
            >
              Let People Collect Sperm From the Dead - Catriona Morton
            </a>
            <div className="flex flex-row text-[0.8rem] gap-[1rem]">
              <div className="p-[0.5rem] bg-[#ddd] rounded-xl">article</div>
              <div className="p-[0.5rem] bg-[#ddd] rounded-xl">WIRED</div>
              <div className="p-[0.5rem] bg-[#ddd] rounded-xl">bioethics</div>
              <div className="p-[0.5rem] bg-[#ddd] rounded-xl">medical</div>
            </div>
            <div className="text-[0.8rem] tracking-wide font-['Satoshi-regular'] mt-[1rem] leading-[1.5rem] pb-[1rem] border-black border-b-[1px]">
              The article discusses the ethical dilemmas of postmortem sperm
              retrieval (PMSR), a process where sperm is collected from deceased
              males for conception. It highlights a case where a fiancée intends
              to use her late partner&apos;s sperm for IVF, raising questions
              about consent and the ethics of posthumous parenthood. The
              American Society for Reproductive Medicine&apos;s guidelines on
              PMSR emphasize the need for clear consent, but obtaining explicit
              permission is rare. The article examines diverse opinions on the
              subject, including the moral considerations of fatherless
              children, the rights of grieving individuals, and the ethical
              implications of such decisions.
            </div>
            {/* <div className="flex flex-row justify-between border-y border-1 border-[#aaa] font-['Satoshi-regular'] py-[0.5rem] px-[1rem] my-[1rem]">
              <div className="flex justify-center items-center gap-1">
                <AiOutlineLike color="#111" size={20} />
                <span className="text-[0.6rem] xl:text-[0.8rem]">Like </span>
                <span className="num-status xl:ml-[0.8rem] text-[0.7rem] xl:text-[0.9rem]">
                  12
                </span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <FaRegCommentAlt color="#111" size={16} />
                <span className="text-[0.6rem] xl:text-[0.8rem]">Comment </span>
                <span className="num-status xl:ml-[0.8rem] text-[0.7rem] xl:text-[0.9rem]">
                  24
                </span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <TbShare3 color="#111" size={20} />
                <span className="text-[0.6rem] xl:text-[0.8rem]">Share </span>
                <span className="num-status xl:ml-[0.8rem] text-[0.7rem] xl:text-[0.9rem]">
                  30
                </span>
              </div>
            </div> */}
            <div className="flex flex-row justify-end">
              <span className="text-[0.7rem] xl:text-[0.8rem]">
                Posted date: 01/02/2024
              </span>
            </div>
          </div>
        </div>
        <div className="hero-slide sm:h-[100vh] max-h-[1100px] pb-[2rem] md:pb-[0rem]">
          <div
            className="h-[50vh] sm:h-[50%] w-[100%] md:h-[100%] md:w-[50%] flex flex-col justify-center"
            data-swiper-parallax={parallaxAmount}
            data-swiper-parallax-opacity={parallaxOpacity}
          >
            <img
              src={book_2}
              alt="image1"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="text-[1.5rem] xl:text-[1.8rem] text-[#111] z-50 w-[90%] sm:w-[70%]  xl:w-[50%] pr-[2rem]">
            <a
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#559602]"
              href="https://quickread.com/book-summary/think-like-a-freak-534"
            >
              Think Like A Freak - Steven D. Levitt & Stephen J. Dubner
            </a>
            <div className="flex flex-row text-[0.8rem] gap-[1rem]">
              <div className="p-[0.5rem] bg-[#ddd] rounded-xl">book</div>
              <div className="p-[0.5rem] bg-[#ddd] rounded-xl">economics</div>
              <div className="p-[0.5rem] bg-[#ddd] rounded-xl">psychology</div>
              <div className="p-[0.5rem] bg-[#ddd] rounded-xl">science</div>
            </div>
            <div className="text-[0.8rem] tracking-wide font-['Satoshi-regular'] mt-[1rem] leading-[1.5rem] pb-[1rem] border-black border-b-[1px]">
              In &apos;Think Like a Freak,&apos; authors Steven D. Levitt and
              Stephen J. Dubner continue their exploration of unconventional
              problem-solving, building on the principles established in their
              &apos;Freakonomics&apos; series. They encourage readers to embrace
              a new mindset, challenging the status quo, acknowledging the power
              of admitting ignorance, and adopting a child-like curiosity. The
              book emphasizes the significance of understanding incentives,
              leveraging data effectively, and applying simplicity in addressing
              complex issues. It&apos;s a guide for readers to develop a deeper
              understanding of the world by rethinking their approach to
              problem-solving and decision-making, advocating a unique
              perspective on everyday challenges and global issues.
            </div>
            {/* <div className="flex flex-row justify-between border-y border-1 border-[#aaa] font-['Satoshi-regular'] py-[0.5rem] px-[1rem] my-[1rem]">
              <div className="flex justify-center items-center gap-1">
                <AiOutlineLike color="#111" size={20} />
                <span className="text-[0.6rem] xl:text-[0.8rem]">Like </span>
                <span className="num-status xl:ml-[0.8rem] text-[0.7rem] xl:text-[0.9rem]">
                  12
                </span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <FaRegCommentAlt color="#111" size={16} />
                <span className="text-[0.6rem] xl:text-[0.8rem]">Comment </span>
                <span className="num-status xl:ml-[0.8rem] text-[0.7rem] xl:text-[0.9rem]">
                  24
                </span>
              </div>
              <div className="flex justify-center items-center gap-1">
                <TbShare3 color="#111" size={20} />
                <span className="text-[0.6rem] xl:text-[0.8rem]">Share </span>
                <span className="num-status xl:ml-[0.8rem] text-[0.7rem] xl:text-[0.9rem]">
                  30
                </span>
              </div>
            </div> */}
            <div className="flex flex-row justify-end">
              <span className="text-[0.7rem] xl:text-[0.8rem]">
                Posted date: 01/14/2024
              </span>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Shares;
