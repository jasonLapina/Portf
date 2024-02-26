import { Box, Button, Center, HStack, Image, Text } from "@chakra-ui/react";
import MotionBox from "./UI/MotionBox";
import { useTransform, useScroll } from "framer-motion";
import classes from "./Hero.module.css";

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
        fontSize={{ md: "20px", base: "14px" }}
        pos='absolute'
        bottom={{ md: "30%", base: "15%" }}
      >
        <Text textAlign='center' maxW='720px'>
          An adept web developer skilled in both UI/UX design, prioritizing
          seamless user experiences while maintaining visually appealing
          interfaces.
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
            className={classes.glitch}
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
