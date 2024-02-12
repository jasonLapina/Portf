import { Box, Button, Center, HStack, Text } from "@chakra-ui/react";

import { Cursor } from "react-simple-typewriter";
import MotionBox from "./UI/MotionBox";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, useGLTF } from "@react-three/drei";

import { Suspense, useRef } from "react";

function Hero() {
  // const [text] = useTypewriter({
  //   words: ["Designer.", "Developer."],
  //   loop: 0,
  //   typeSpeed: 50,
  // });

  return (
    <Center
      id='Home'
      pos='relative'
      h={{ base: "70vh", md: "100vh" }}
      mb={{ base: "-120px" }}
      bgImage={
        "linear-gradient(to bottom, rgba(0,0,0,.5), rgba(255,0,255,.1)), url('/assets/home-bg.jpg')"
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
          <Box as='span' bgColor='magenta'>
            Developer.
          </Box>
          <Cursor cursorBlinking cursorStyle='_' cursorColor='magenta' />
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
            bgGradient='linear(cyan,magenta)'
            bgClip='text'
          >
            DEVE
          </MotionBox>
          <MotionBox
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            filter='drop-shadow(2px 2px 8px cyan)'
            bgGradient='linear(cyan,magenta)'
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
          "linear-gradient(to bottom, rgba(103, 242, 209,.1), rgba(0,0,0,.6)), url('/assets/hero-me.png')"
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
      <MotionBox
        initial={{
          opacity: 0,
          y: -120,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{ duration: 1, delay: 1.6 }}
        pos='absolute'
        zIndex={2}
        w='100%'
        h='100%'
      >
        <Canvas>
          <HeroImg />
        </Canvas>
      </MotionBox>
    </Center>
  );
}

export default Hero;

function HeroImg() {
  const react = useGLTF("/react.gltf");
  const node = useGLTF("/node.gltf");

  const reactRef = useRef(null);
  const nodeRef = useRef(null);

  useFrame((state, delta) => {
    reactRef.current.rotation.y += delta;
    nodeRef.current.rotation.y += delta;
  });
  return (
    <>
      <Environment preset='city' />
      <ambientLight intensity={1} />
      <directionalLight color='cyan' intensity={5} position={[0, 1, 10]} />
      <Float speed={2}>
        <Suspense fallback={<></>}>
          <primitive
            ref={reactRef}
            scale={0.4}
            position={[-1.65, 1, 1]}
            object={react.scene}
          />
        </Suspense>
      </Float>
      <Float speed={2}>
        <Suspense fallback={<></>}>
          <primitive
            ref={nodeRef}
            scale={0.4}
            position={[1.4, 1.5, 1]}
            object={node.scene}
          />
        </Suspense>
      </Float>
    </>
  );
}
