import { Center, Image, Text } from "@chakra-ui/react";

function Hero() {
  return (
    <Center pos='relative' w='100vw' h='100vh'>
      <Text
        textShadow='2px 2px 4px cyan'
        fontWeight='thin'
        pos='absolute'
        zIndex='-1'
        fontSize='20vw'
      >
        DEVELOPER
      </Text>
      <Image
        boxShadow='2px 2px 16px black'
        h='90%'
        borderRadius='full'
        pos='absolute'
        src='/assets/hero-me.png'
      />
    </Center>
  );
}

export default Hero;
