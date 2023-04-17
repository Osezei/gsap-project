import React from "react";
import Image from "next/image";
import Me from "../images/mee.jpeg";

const Contact = () => {
  return (
    <div className=" text-[#aaa] text-center mt-40 lg:mt-0">
      <Image
        src={Me}
        alt="name"
        width={250}
        height={250}
        className="mx-auto rounded-lg mb-10"
      />

      <h3 className=" uppercase text-xl text-text-color mb-4">
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
  );
};

export default Contact;
