import { Box, Center, HStack } from "@chakra-ui/react";

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
      </Box>
    </Center>
  );
}

export default Hero;
