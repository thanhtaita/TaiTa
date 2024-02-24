const Socials = () => {
  return (
    <div>
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
  );
};

export default Socials;
