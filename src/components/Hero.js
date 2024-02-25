import { Box, Button, Center, HStack, Text } from "@chakra-ui/react";
import MotionBox from "./UI/MotionBox";
import { useTransform, useScroll } from "framer-motion";

function Hero() {
  const { scrollY } = useScroll();
  const offset = useTransform(scrollY, [0, 800], ["50%", "80%"]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  return (
    <Box
      id='Home'
      display='flex'
      justifyContent='center'
      alignItems='center'
      alignContent='center'
      pos='relative'
      h={{ base: "70vh", md: "100vh" }}
      mb={{ base: "-30vh", md: "-240px" }}
    >
      <MotionBox
        style={{
          opacity: opacity,
        }}
        fontSize='20px'
        pos='absolute'
        bottom='30%'
      >
        <Text textAlign='center' maxW='720px'>
          I'm a web developer with a knack for quickly learning and implementing
          new technologies to create innovative and efficient solutions.
        </Text>
        <Center>
          <Button
            transform='translateY(20px)'
            _hover={{
              color: "white",
            }}
            _active={{}}
            variant='ghost'
            color='var(--primary)'
            fontSize='24px'
            onClick={() => {
              const scrollTo = document.getElementById("About");
              const offset = 40;
              const scrollPos = scrollTo.offsetTop - offset;
              window.scrollTo({
                top: scrollPos,
                behavior: "smooth",
              });
            }}
          >
            Learn more
          </Button>
        </Center>
      </MotionBox>
      <MotionBox
        fontWeight='bolder'
        pos='absolute'
        fontSize={{ base: "9vw", md: "12vw" }}
        transform='translateY(-70%)'
        style={{
          top: offset,
        }}
      >
        <HStack gap='2vw'>
          <MotionBox
            initial={{
              transform: "translateY(-120px)",
            }}
            animate={{
              transform: "translateY(0)",
            }}
            transition={{
              duration: 1.4,
            }}
            bgClip='text'
            color='transparent'
            style={{
              WebkitTextStroke: ".2vw var(--primary)",
            }}
            filter='drop-shadow(.2vw .2vw white)'
            bgImage='url(/assets/socrates.webp)'
            bgSize='cover'
            bgPos='center'
          >
            JASON
          </MotionBox>

          <MotionBox
            style={{
              WebkitTextStroke: ".2vw white",
            }}
            filter='drop-shadow(.2vw .2vw magenta)'
            initial={{
              transform: "translateY(120px)",
            }}
            animate={{
              transform: "translateY(0)",
            }}
            transition={{
              duration: 1.4,
            }}
            bgGradient='linear(to right, rgba(0,0,0,.1), red)'
            bgImage={`url("/assets/creation.webp")`}
            bgColor='white'
            bgClip='text'
            bgPos='center'
            bgSize='cover'
          >
            LAPINA
          </MotionBox>
        </HStack>
      </MotionBox>
    </Box>
  );
}

export default Hero;
