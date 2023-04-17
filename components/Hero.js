import { motion as m } from "framer-motion";
import { container, item } from "./animation";

//777 //aaa
const Hero = () => {
  return (
    <m.main
      className="mt-36 lg:ml-40 text-[#777] "
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <div className=" text-7xl md:text-8xl lg:text-9xl font-semibold name">
        {/* first name */}
        <div className=" flex">
          <span className="hover:text-[#aaa] ease-in-out duration-300 ">J</span>
          <span className="hover:text-[#aaa] ease-in-out duration-300">o</span>
          <span className="hover:text-[#aaa] ease-in-out duration-300">h</span>
          <span className="hover:text-[#aaa] ease-in-out duration-300">n</span>
        </div>
        {/* end of first name */}
        <div className="flex gap-2 lg:gap-10 flex-wrap">
          {/* middle name */}
          <div>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              O
            </span>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              s
            </span>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              e
            </span>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              z
            </span>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              e
            </span>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              i
            </span>
          </div>
          {/* end of middle name */}
          {/* surname */}
          <div>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              i
            </span>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              k
            </span>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              h
            </span>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              i
            </span>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              m
            </span>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              i
            </span>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              o
            </span>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              y
            </span>
            <span className="hover:text-[#aaa] ease-in-out duration-300">
              a
            </span>
          </div>
          {/* end of surname */}
        </div>
      </div>
      {/* about */}
      <m.div
        className="flex justify-end overflow-hidden"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <m.h3
          className="text-lg  font-thin lg:w-[450px] mt-4 tracking-wider name"
          variants={item}
        >
          I am a developer based in Nigeria focused on creating interactive
          digital experiences on the web, open to collaborations and jobs.
        </m.h3>
      </m.div>
    </m.main>
  );
};

export default Hero;
