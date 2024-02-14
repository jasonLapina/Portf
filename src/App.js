import { Box, Center, Skeleton, Spinner } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About/About";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/Footer";

import ReactGA from "react-ga4";
import { AnimatePresence } from "framer-motion";
import MotionBox from "./components/UI/MotionBox";

ReactGA.send({ hitType: "pageview", page: "/", title: "Home page" });

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      delay: 300,
      // once: true
    });
  }, []);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatePresence>
      {!loaded && (
        <MotionBox
          w='100vw'
          h='100vh'
          display='flex'
          justifyContent='center'
          alignContent='center'
          alignItems='center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Spinner
            speed='1.2s'
            color='magenta'
            w='300px'
            h='300px'
            zIndex='99'
          />
        </MotionBox>
      )}

      {loaded && (
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          overflow='hidden'
        >
          <Box mb='300px'>
            <Hero />
          </Box>
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
          <Navbar />
        </MotionBox>
      )}
    </AnimatePresence>
  );
}

export default App;
