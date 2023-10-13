import { Box } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <Box pb='40px' overflowX='hidden'>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Box>
  );
}

export default App;
