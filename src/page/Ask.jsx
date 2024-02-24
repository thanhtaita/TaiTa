import { useState } from "react";
import { db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import Socials from "./Socials";

import { MdOutlineChangeCircle } from "react-icons/md";

const Questions = [
  "How would humanity change if we discovered intelligent life beyond Earth?",
  "Are you excited about the current progress of Artificial Intelliggence development? Can you give me some thoughts?",
  "People should follow what they want to do, not what they should do. What do you think?",
  "Is it more important to be right or to be understood?",
  "If animals could talk, which species would you be most interested in having a conversation with and why?",
  "If you could change the outcome of one scientific experiment in history, which would it be and what impact do you think it would have on the present?",
  "Tell me about a good moment you had today.",
  "Would you choose to live in a virtual reality where all your wishes are granted over the real world?",
  "What recent thing have you learned that you found interesting?",
  "Short-term happniness or long-term happiness?",
];

const Ask = () => {
  const addContact = async () => {
    if (userEmail === "" && userComment === "") {
      return;
    }

    console.log("adding contact");
    try {
      await setDoc(doc(db, "contacts", userEmail), {
        question:
          "How would humanity change if we discovered intelligent life beyond Earth?",
        answer: userComment,
      });
      console.log("contact added!");
      setUserComment("");
      setUserEmail("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const [isOpened, setIsOpened] = useState(false);
  const [userComment, setUserComment] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [questionNum, setQuestionNum] = useState(
    Math.floor(Math.random() * Questions.length)
  );

  const openSend = () => {
    setIsOpened(true);
  };

  const closeSend = () => {
    console.log(false);
    setIsOpened(false);
  };

  // Additional Tailwind classes for animation
  const buttonClasses = isOpened ? "-translate-y-10" : "translate-y-0";

  return (
    <div className="relative">
      <div
        id="ask"
        className="relative bg-[#F2F5F3] h-[40vh] sm:h-[60vh] w-full flex flex-col items-center rounded shadow-2xl z-20 hover:translate-y-[-0.25rem] hover:translate-x-[-0.25rem] hover:shadow-3xl transition-all duration-500 ease-in-out"
      >
        <div className="h-[80%] md:h-[60%] flex flex-col items-center mt-[3rem] mx-[2rem]">
          <div className="flex flex-row gap-[0.1rem] w-[80%] relative">
            <div className="uppercase text-[0.7rem] font-['Satoshi-bold'] text-center">
              <MdOutlineChangeCircle
                className="cursor-pointer transition-all duration-300 ease-in-out transform rotate-0 hover:rotate-90 absolute top-[0rem] left-[-1rem] z-10"
                size={17}
                onClick={() => {
                  console.log(questionNum);
                  const temp = questionNum;
                  let newNum = Math.floor(Math.random() * Questions.length);
                  while (newNum === temp) {
                    newNum = Math.min(
                      0,
                      Math.floor(Math.random() * Questions.length)
                    );
                  }
                  setQuestionNum(newNum);
                }}
              />
              {Questions[questionNum]}
            </div>
          </div>
          <textarea
            id="message"
            rows="4"
            value={userComment}
            className="bg-transparent p-2.5 w-[65%] h-[70%] text-[0.6rem] text-[#111] focus:outline-none text-center font-['Satoshi-light'] tracking-[1px]  resize-none "
            placeholder="Write your thougths here and send it to me. I would love to hear your thoughts!"
            onChange={(e) => setUserComment(e.target.value)}
          ></textarea>
        </div>
        <button
          className={`absolute bottom-[1rem] right-[1rem] w-[10rem] p-2 bg-[#8FFF00] text-black border border-1px border-[#444444] text-[0.7rem] rounded-lg focus:outline-none text-center  transition-all duration-300 ease-in-out transform ${buttonClasses}`}
          onClick={addContact}
        >
          send to Tai
        </button>
        <textarea
          onFocus={openSend}
          onBlur={closeSend}
          value={userEmail}
          id="email"
          cols="24"
          rows="1"
          className={`absolute bottom-[1rem] right-[1rem] w-[10rem] border border-[1px] border-[#111] border-opacity-20 p-2 text-[#111] text-[0.7rem] rounded-lg focus:outline-none text-center resize-none `}
          placeholder="your name / email"
          onChange={(e) => setUserEmail(e.target.value)}
        ></textarea>
      </div>
      <div className="h-[40vh] sm:h-[60vh] w-full absolute top-[-1.5rem] left-[-1.5rem] bg-[#8FFF00] z-0"></div>
      <div className="ml-[2rem] sm:ml[2rem] flex flex-col items-start w-[80vw] md:w-[25vw] md:absolute md:top-[20%] xl:top-[20%] md:right-[-40%]  z-50 mt-[4rem] md:mt-[0rem] mb-[2rem]">
        <Socials />
      </div>
    </div>
  );
};

export default Ask;
