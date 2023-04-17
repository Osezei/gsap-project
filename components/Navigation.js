import Link from "next/link";
import { link } from "@/utils/data";
import { useState } from "react";

const Navigation = () => {
  const [toggled, setToggled] = useState(1);
  return (
    <nav className="fixed bottom-10 left-0 right-0 w-[327px]  lg:w-[500px] mx-auto flex justify-center text-sm lg:text-lg name capitalize font-semibold bg-black rounded-lg p-2 lg:p-4">
      {link.map(({ id, url, title }) => {
        return (
          <Link
            key={id}
            href={url}
            //className=""
            onClick={() => setToggled(id)}
            className={`${
              toggled === id
                ? "mx-2 lg:mx-6 text-[white] uppercase ease-in-out duration-300"
                : "mx-2 lg:mx-6 text-[#aaa] uppercase ease-in-out duration-300"
            }`}
          >
            {title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
