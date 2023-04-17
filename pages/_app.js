import "@/styles/globals.css";
import Navigation from "@/components/Navigation";
import Links from "@/components/Links";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <section className="bg-[#111] page-height">
      <main className="w-[90%]  mx-auto">
        <Links />
        <AnimatePresence initial={true}>
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
        <Navigation />
      </main>
    </section>
  );
}
