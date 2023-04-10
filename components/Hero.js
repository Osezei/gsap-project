import { motion as m } from "framer-motion";
import { container, item } from "./animation";

//777 //aaa
const Hero = () => {
  return (
    <m.main
      className="mt-36 ml-40 text-[#777] "
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="capitalize text-9xl font-semibold name">
        <div className="">
          <span className="hover:text-[#aaa] ease-in-out duration-300">J</span>
          <span className="hover:text-[#aaa] ease-in-out duration-300">o</span>
          <span className="hover:text-[#aaa] ease-in-out duration-300">h</span>
          <span className="hover:text-[#aaa] ease-in-out duration-300">n</span>
        </div>
        <div className="flex gap-10">
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
        </div>
      </div>
      {/* about */}
      <m.div
        className="flex justify-end mr-52 overflow-hidden"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <m.h3
          className="overflow-hidden text-lg font-thin w-[450px] mt-4 tracking-wider name"
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
