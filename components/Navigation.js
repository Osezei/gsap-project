import Link from "next/link";
import { link } from "@/utils/data";

const Navigation = () => {
  return (
    <nav className="fixed bottom-10 left-0 right-0 w-[500px] mx-auto flex justify-center text-lg name capitalize font-semibold bg-black rounded-lg p-4">
      {link.map(({ id, url, title }) => {
        return (
          <Link key={id} href={url} className=" mx-6 text-[#aaa] uppercase">
            {title}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
