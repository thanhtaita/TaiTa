// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// import { AiFillLike } from "react-icons/ai";
// import { FaCommentAlt } from "react-icons/fa";

// // Import Swiper styles

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "./Shares_old.css";

// import img1 from "../../public/img_placeholder.jpeg";
// import img2 from "../../public/img2.jpg";
// import img3 from "../../public/img3.jpg";
// import img4 from "../../public/img4.jpg";
// import img5 from "../../public/img5.jpg";

// const slideInfos = [
//   {
//     img: img1,
//     title: "How to master at something",
//     description:
//       "This is just a passage place holder for testing the UI. This is not considered as official content so don't put too much attentention to it",
//   },
//   {
//     img: img2,
//     title: "How to master at something",
//     description:
//       "This is just a passage place holder for testing the UI. This is not considered as official content so don't put too much attentention to it",
//   },
//   {
//     img: img3,
//     title: "How to master at something",
//     description:
//       "This is just a passage place holder for testing the UI. This is not considered as official content so don't put too much attentention to it",
//   },
//   {
//     img: img4,
//     title: "How to master at something",
//     description:
//       "This is just a passage place holder for testing the UI. This is not considered as official content so don't put too much attentention to it",
//   },
//   {
//     img: img5,
//     title: "How to master at something",
//     description:
//       "This is just a passage place holder for testing the UI. This is not considered as official content so don't put too much attentention to it",
//   },
//   {
//     img: img1,
//     title: "How to master at something",
//     description:
//       "This is just a passage place holder for testing the UI. This is not considered as official content so don't put too much attentention to it",
//   },
//   {
//     img: img2,
//     title: "How to master at something",
//     description:
//       "This is just a passage place holder for testing the UI. This is not considered as official content so don't put too much attentention to it",
//   },
//   {
//     img: img3,
//     title: "How to master at something",
//     description:
//       "This is just a passage place holder for testing the UI. This is not considered as official content so don't put too much attentention to it",
//   },
//   {
//     img: img4,
//     title: "How to master at something",
//     description:
//       "This is just a passage place holder for testing the UI. This is not considered as official content so don't put too much attentention to it",
//   },
// ];

// // import required modules
// import { EffectCoverflow, Pagination } from "swiper/modules";

// export default function Shares() {
//   return (
//     <div
//       id="shares"
//       className="mt-[5rem] h-screen w-screen bg-[#f2f5f3] z-20 flex flex-col justify-center items-center text-[3.5rem] text-[#111]"
//     >
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         loop={true}
//         coverflowEffect={{
//           rotate: 7,
//           stretch: -30,
//           depth: 200,
//           modifier: 2.5,
//           slideShadows: false,
//         }}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         {slideInfos.map((slideInfo, index) => (
//           <SwiperSlide key={index} className="relative">
//             <div
//               style={{ backgroundImage: `url(${slideInfo.img})` }}
//               className="group slide-image bg-center bg-no-repeat bg-cover rounded-lg bg-custom-image h-[70%] w-full relative after:absolute after:left-0 after:bottom-0 after:w-full after:h-0 after:transition-all after:duration-500 text-transparent
//             after:rounded-lg hover:text-white hover:text-opacity-85  hover:after:h-full after:bg-transparent hover:after:bg-black hover:after:bg-opacity-50 hover:after:z-20 flex flex-col justify-center items-center text-[1rem]"
//             >
//               <div className="flex flex-col justify-center items-center gap-4 font-['Satoshi-light'] w-[80%] z-50">
//                 <span className="text-center z-50">
//                   {slideInfo.description}
//                 </span>
//                 <a
//                   href=""
//                   className="underline opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90 text-[#8FFF00] z-50"
//                 >
//                   {slideInfo.title}
//                 </a>
//                 <div className="flex justify-center items-center w-full z-50 gap-10">
//                   <div className="flex justify-center items-center gap-2">
//                     <AiFillLike
//                       color="white"
//                       className=" opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90"
//                       size={21}
//                     />
//                     <span>12</span>
//                   </div>
//                   <div className="flex justify-center items-center gap-2">
//                     <FaCommentAlt
//                       color="white"
//                       className=" opacity-0 transition-all duration-500 group-hover:transition-all group-hover:duration-500 group-hover:opacity-90"
//                     />
//                     <span>12</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}{" "}
//       </Swiper>
//     </div>
//   );
// }
