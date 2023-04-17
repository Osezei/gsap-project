import { motion as m } from "framer-motion";
//import ProjectInfo from "@/components/ProjectInfo";
const Project = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      jkk rvkj wejk
    </m.div>
  );
};

export default Project;
