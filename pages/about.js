import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.main
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className=" text-[#aaa] name"
    >
      <div>
        <p className="text-lg font-extralight my-10">
          I am a frontend Developer interested in building web applications
          alongside learning. I use the following;
        </p>
      </div>
      <div className="grid grid-rows-3 gap-3 md:grid-cols-3 md:gap-5 text-[#111] place-content-center">
        <div className="w-[225px] h-[270px] bg-[#aaa] text-center">
          <h3 className="pt-5 font-semibold text-normal">FrontendTools</h3>
          <p className="mt-5">
            JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux Toolkit,
            React Testing Library, HTML5, Git/GitHub, NextAuth.
          </p>
        </div>
        <div className="w-[225px] h-[270px] bg-[#aaa] text-center">
          <h3 className="pt-5 font-semibold text-normal">UILibraries</h3>
          <p className="mt-5">
            CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion, GSAP,
            Bootstrap.
          </p>
        </div>
        <div className="w-[225px] h-[270px] bg-[#aaa] text-center">
          <h3 className="pt-5 font-semibold text-normal">DesignTools</h3>
          <p className="mt-5">Figma, FigJam, Adobe XD.</p>
        </div>
      </div>
    </m.main>
  );
};

export default About;
{
  /* <m.div>
        <m.h3
          initial={{ opacity: 0, y: "100%" }}
          animate={{
            opacity: 1,
            y: "0%",
          }}
        >
          FrontendTools
        </m.h3> */
}
