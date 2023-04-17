import { profileLink } from "@/utils/data";
import Link from "next/link";
import { useState } from "react";
const Links = () => {
  return (
    <section className="flex justify-between text-[#777] py-4 lg:py-7 ">
      <div>
        <Link
          href="#"
          target="_blank"
          className="uppercase border-2 p-1 lg:p-2 rounded-lg text-sm lg:text-lg text-[#777] hover:text-black hover:bg-[#777] font-bold ease-in-out duration-300"
        >
          view resume
        </Link>
      </div>
      <div className="">
        {profileLink.map(({ id, url, title }) => {
          return (
            <Link
              key={id}
              href={url}
              className="mr-2 lg:mr-10 p-1 navigate"
              target="_blank"
            >
              {title}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Links;
