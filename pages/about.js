import { motion as m } from "framer-motion";

const About = () => {
  return (
    <m.main
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="page-height bg-[#aaa]"
    >
      <m.div>
        <m.h3
          initial={{ opacity: 0, y: "100%" }}
          animate={{
            opacity: 1,
            y: "0%",
          }}
        >
          FrontendTools
        </m.h3>
        <p>
          {" "}
          JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux Toolkit,
          React Testing Library, HTML5, Git/GitHub, NextAuth.
        </p>
        <h3>UILibraries</h3>
        <p>
          CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion, GSAP,
          Bootstrap.
        </p>
        <h3>DesignTools</h3>
        <p>Figma, FigJam, Adobe XD.</p>
      </m.div>
    </m.main>
  );
};

export default About;
