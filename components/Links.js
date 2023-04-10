import { profileLink } from "@/utils/data";
import Link from "next/link";
const Links = () => {
  return (
    <section className=" flex justify-between ml-40 text-[#777] py-7 ">
      <div>
        <Link
          href="#"
          target="_blank"
          className="uppercase border-2 p-2 rounded-lg hover:bg-red-600 ease-in-out duration-300"
        >
          view resume
        </Link>
      </div>
      <div className="">
        {profileLink.map(({ id, url, title }) => {
          return (
            <Link key={id} href={url} className="mr-10 p-1" target="_blank">
              {title}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Links;
