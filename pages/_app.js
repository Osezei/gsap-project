import "@/styles/globals.css";
import Navigation from "@/components/Navigation";
import Links from "@/components/Links";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps, router }) {
  return (
    <main className="bg-[#111] page-height">
      <Links />
      <AnimatePresence initial={true}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
      <Navigation />
    </main>
  );
}
