import Hero from "@/components/Hero";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <main className="">
      <Hero />{" "}
    </main>
  );
}
{
  /* <m.main
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.75, ease: "easeOut" }}
  exit={{ opacity: 0 }}
  className="page-height bg-red-800"
>
  hello
</m.main>; */
}
