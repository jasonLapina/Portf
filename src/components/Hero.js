import { Box, Center, HStack } from "@chakra-ui/react";
import MotionBox from "./UI/MotionBox";
// import { useScroll } from "@react-three/drei";
import { useTransform, useScroll } from "framer-motion";

function Hero() {
  const { scrollY } = useScroll();

  const offset = useTransform(scrollY, [0, 800], ["50%", "80%"]);
  return (
    <MotionBox
      id='Home'
      display='flex'
      justifyContent='center'
      alignItems='center'
      alignContent='center'
      pos='relative'
      h={{ base: "70vh", md: "100vh" }}
      mb={{ base: "-30vh", md: "-240px" }}
      bgImage="linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.6)),url('/assets/retrowave.jpg') "
      bgSize='cover'
      bgPos='center'
    >
      <MotionBox
        fontWeight='bolder'
        pos='absolute'
        fontSize={{ base: "9vw", md: "12vw" }}
        transform='translateY(-50%)'
        style={{
          top: offset,
        }}
      >
        <HStack gap='2vw'>
          <Box
            // bgGradient='linear(cyan,magenta)'
            bgClip='text'
            color='transparent'
            style={{
              WebkitTextStroke: ".2vw var(--primary)",
            }}
            filter='drop-shadow(.2vw .2vw white)'
          >
            JASON
          </Box>
          <Box
            bgImage='url("/assets/home-bg.jpg")'
            bgPos='bottom'
            bgSize='cover'
            bgClip='text'
          >
            LAPINA
          </Box>
        </HStack>
      </MotionBox>
    </MotionBox>
  );
}

export default Hero;
