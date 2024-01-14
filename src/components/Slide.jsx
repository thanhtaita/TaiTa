import { SwiperSlide } from "swiper/react";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import img1 from "../../public/img_placeholder.jpeg";

const Slide = ({ img, title, description }) => {
  console.log(img);
  console.log(title);
  console.log(description);
  return (
    <SwiperSlide className="relative">
      <div
        style={{ backgroundImage: img1 }}
        className="group slide-image bg-center bg-no-repeat bg-cover rounded-lg bg-custom-image h-[66.67%] w-full relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:transition-all after:duration-500 text-transparent 
            after:rounded-lg hover:text-white hover:text-opacity-85  hover:after:h-full after:bg-transparent hover:after:bg-black hover:after:bg-opacity-50 hover:after:z-10 flex flex-col justify-center items-center text-[1rem]"
      >
        <div className="flex flex-col justify-center items-center gap-4 font-['Satoshi-light'] w-[80%] z-50">
          <span className="text-center z-50">{description}</span>
          <a
            href=""
            className="underline opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90 text-[#8FFF00] z-50"
          >
            {title}
          </a>
          <div className="flex justify-center items-center w-full z-50 gap-10">
            <div className="flex justify-center items-center gap-2">
              <AiFillLike
                color="white"
                className=" opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90"
                size={21}
              />
              <span>12</span>
            </div>
            <div className="flex justify-center items-center gap-2">
              <FaCommentAlt
                color="white"
                className=" opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90"
              />
              <span>12</span>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

Slide.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Slide;
