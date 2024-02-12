import { Box } from "@chakra-ui/react";
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
import { useEffect } from "react";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/Footer";

import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: "/", title: "Home page" });

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
      {/* <PageNav /> */}
      <Box mb='300px'>
        <Hero />
      </Box>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Navbar />
    </>
  );
}

export default App;
