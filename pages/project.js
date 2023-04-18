import { motion as m } from "framer-motion";
import { project } from "@/utils/data";
import Image from "next/image";
import { FaLink } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
//import ProjectInfo from "@/components/ProjectInfo";
const Project = () => {
  return (
    <m.section
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className="text-white"
    >
      <div className="flex flex-wrap gap-10 place-content-center">
        {project.map(({ id, image, title, stack, url, github }) => {
          return (
            <article key={id} className="relative text-[#aaa]">
              <div className="object-cover h-[120px] w-[270px] overflow-hidden">
                <Image src={image} alt={title} className="" />
              </div>
              <div className="mt-1 w-[270px] flex justify-between">
                <a
                  href={github}
                  className="text-2xl hover:opacity-50 ease-in-out duration-300"
                  target="_blank"
                >
                  <DiGithubBadge />
                </a>
                <h3 className="name font-semibold ">{title}</h3>
                <a
                  href={url}
                  className="my-auto hover:opacity-50 ease-in-out duration-300"
                  target="_blank"
                >
                  <FaLink />
                </a>
              </div>
              <h3 className="text-normal name">
                <span className="font-semibold">Stack:</span> {stack}
              </h3>
            </article>
          );
        })}
      </div>
    </m.section>
  );
};

export default Project;
