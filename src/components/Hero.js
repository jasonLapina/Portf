import { Box, Button, Center, HStack, Text } from "@chakra-ui/react";

import { useTypewriter, Cursor } from "react-simple-typewriter";
import MotionBox from "./UI/MotionBox";

function Hero() {
  const [text] = useTypewriter({
    words: ["Designer.", "Developer."],
    loop: 0,
    typeSpeed: 50,
  });

  return (
    <Center
      id='Home'
      pos='relative'
      h={{ base: "70vh", md: "100vh" }}
      mb={{ base: "-120px" }}
      bgImage={
        "linear-gradient(to bottom, rgba(0,0,0,.1), #28282B), url('/assets/home-bg.jpg')"
      }
      bgSize='cover'
    >
      <MotionBox
        initial={{
          transform: "translate(-50%,100%)",
          opacity: 0,
        }}
        animate={{
          transform: "translateX(-50%)",
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 1 }}
        pos='absolute'
        bottom={{ base: "28%", md: "25%" }}
        left='50%'
        fontSize={{ base: "24px", md: "48px" }}
        zIndex={3}
        textAlign='center'
      >
        <Text filter='drop-shadow(1px 1px 4px white)' as='span'>
          Hi, I'm Jason.
        </Text>
        <Text
          textAlign='center'
          opacity='.7'
          w={"100vw"}
          fontSize={{ base: "19px", md: "20px" }}
        >
          Web{" "}
          <Box as='span' bgColor='#ff00a0'>
            {text}
          </Box>
          <Cursor cursorBlinking cursorStyle='_' cursorColor='#ff00a0' />
        </Text>
      </MotionBox>

      <MotionBox
        pos='absolute'
        bottom={{ base: "15%", md: "18%" }}
        left='50%'
        transform='translateX(-50%)'
        zIndex={5}
      >
        <Button
          p='16px 32px'
          borderRadius='20px'
          borderWidth='2px'
          variant='outline'
          borderColor='#ff00a0'
          filter='drop-shadow(1px 1px 2px #ff00a0)'
          color='white'
          transition='all .4s'
          _hover={{
            borderColor: "white",
            color: "#ff00a0",
          }}
          onClick={() => {
            const section = document.getElementById("Projects");
            const offset = 40;
            const scrollPos = section.offsetTop - offset;
            window.scrollTo({
              top: scrollPos,
              behavior: "smooth",
            });
          }}
        >
          See my work below
        </Button>
      </MotionBox>

      <Box
        fontWeight='thin'
        pos='absolute'
        fontSize={{ base: "18vw", md: "19.5vw" }}
      >
        <HStack>
          <MotionBox
            initial={{ opacity: 0, x: -120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            filter='drop-shadow(2px 2px 8px cyan)'
            bgGradient='linear(#ff00a0,cyan)'
            bgClip='text'
          >
            DEVE
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            filter='drop-shadow(2px 2px 8px cyan)'
            bgGradient='linear(cyan,#ff00a0)'
            bgClip='text'
          >
            LOPER
          </MotionBox>
        </HStack>
      </Box>

      <MotionBox
        h={{ md: "90%", base: "30%" }}
        maxH='800px'
        aspectRatio='1/1'
        bgSize='cover'
        bgRepeat='no-repeat'
        zIndex={2}
        bgImage={
          "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.6)), url('/assets/hero-me.png')"
        }
        borderRadius='full'
        initial={{
          opacity: 0,
          y: -120,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1, delay: 0.8 }}
      />
    </Center>
  );
}

export default Hero;
