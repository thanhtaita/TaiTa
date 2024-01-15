import { useRef, useState } from "react";
const Ask = () => {
  const textareaRef = useRef(null);
  const email = useRef(null);
  const [isOpened, setIsOpened] = useState(false);
  const [userComment, setUserComment] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const openSend = () => {
    setIsOpened(true);
  };

  const closeSend = () => {
    console.log(false);
    setUserComment("");
    setUserEmail("");
    setIsOpened(false);
  };

  // Additional Tailwind classes for animation
  const buttonClasses = isOpened ? "-translate-y-10" : "translate-y-0";

  return (
    <div className="h-full w-full relative">
      <div
        id="ask"
        className="relative bg-[#F2F5F3] h-full w-full flex flex-col items-center rounded shadow-2xl z-20"
      >
        <div className="h-[80%] flex flex-col items-center mt-[3rem] mx-[2rem]">
          <div className="uppercase text-[0.7rem] font-['Satoshi-bold'] text-center">
            How would humanity change if we discovered intelligent life beyond
            Earth?
          </div>
          <textarea
            ref={textareaRef}
            id="message"
            rows="4"
            value={userComment}
            className="bg-transparent p-2.5 w-[85%] h-[70%] text-[0.6rem] text-[#111] focus:outline-none text-center font-['Satoshi-light'] tracking-[1px]  resize-none "
            placeholder="give me your thoughts here"
            onChange={(e) => setUserComment(e.target.value)}
          ></textarea>
        </div>
        <button
          className={`absolute bottom-[1rem] right-[1rem] w-[10rem] p-2 bg-[#8FFF00] text-black border border-1px border-[#444444] text-[0.7rem] rounded-lg focus:outline-none text-center  transition-all duration-300 ease-in-out transform ${buttonClasses}`}
          onClick={closeSend}
        >
          send to Tai
        </button>
        <textarea
          onFocus={openSend}
          onBlur={closeSend}
          value={userEmail}
          ref={email}
          id="email"
          cols="24"
          rows="1"
          className={`absolute bottom-[1rem] right-[1rem] w-[10rem] border border-[1px] border-[#111] border-opacity-20 p-2 text-[#111] text-[0.7rem] rounded-lg focus:outline-none text-center resize-none `}
          placeholder="your name / email"
          onChange={(e) => setUserEmail(e.target.value)}
        ></textarea>
      </div>
      <div className="h-full w-full absolute top-[-1.5rem] left-[-1.5rem] bg-[#8FFF00] z-0"></div>
    </div>
  );
};

export default Ask;
