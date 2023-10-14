import { Box } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/UI/Navbar";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      delay: 300,
      // once: true
    });
  }, []);
  return (
    <>
      <Box color='white' bgColor='#28282B' overflowX='hidden' pb='40px'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
      <Navbar />
    </>
  );
}

export default App;
