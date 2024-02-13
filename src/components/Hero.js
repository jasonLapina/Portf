import { Box, Button, Center, HStack, Text } from "@chakra-ui/react";

import MotionBox from "./UI/MotionBox";

function Hero() {
  return (
    <Center
      id='Home'
      pos='relative'
      h={{ base: "70vh", md: "100vh" }}
      mb={{ base: "-120px" }}
      bgImage="linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.6)),url('/assets/retrowave.jpg') "
      bgSize='cover'
      bgPos='center'
    >
      <MotionBox
        pos='absolute'
        bottom={{ base: "15%", md: "18%" }}
        left='50%'
        transform='translateX(-50%)'
        zIndex={5}
      >
        {/* <Button
          p='16px 32px'
          borderRadius='20px'
          borderWidth='2px'
          variant='outline'
          borderColor='magenta'
          filter='drop-shadow(1px 1px 2px magenta)'
          color='white'
          transition='all .4s'
          _hover={{
            borderColor: "white",
            color: "magenta",
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
        </Button> */}
      </MotionBox>

      <Box
        fontWeight='bolder'
        pos='absolute'
        fontSize={{ base: "9vw", md: "12vw" }}
      >
        <HStack gap='2vw'>
          <Box
            // bgGradient='linear(cyan,magenta)'
            bgClip='text'
            color='transparent'
            style={{
              WebkitTextStroke: "2px var(--primary)",
            }}
            filter='drop-shadow(4px 4px white)'
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
      </Box>
      <Text></Text>
    </Center>
  );
}

export default Hero;
