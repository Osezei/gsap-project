import React from "react";
import Image from "next/image";
import Me from "../images/mee.jpeg";
import { motion as m } from "framer-motion";

const Contact = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      exit={{ opacity: 0 }}
      className=" text-[#aaa] text-center"
    >
      <Image
        src={Me}
        alt="name"
        width={250}
        height={250}
        className="mx-auto rounded-lg mt-20 mb-10 md:mt-20"
      />

      <div>
        <h3 className=" uppercase text-xl text-text-color">
          Send me a message
        </h3>
        <a
          className=" text-5xl lg:text-6xl font-semibold break-words underline underline-offset-4"
          href="mailto:john.osezei@yahoo.com"
          target="_blank"
          rel="noreferrer"
        >
          john.osezei@yahoo.com
        </a>
      </div>
    </m.div>
  );
};

export default Contact;
