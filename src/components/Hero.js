import { Box, Button, Center, HStack, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Hero() {
  const [showActions, setShowActions] = useState(false);

  const [text] = useTypewriter({
    words: ["Hi, I'm Jason!", "Web Developer", "Get to know me!"],
    loop: 1,
    onLoopDone: () => setShowActions(true),
  });

  return (
    <Center pos='relative' w='100vw' h='100vh'>
      <Box pos='absolute' top='120px' left='40px' fontSize='64px'>
        <Text as='span'>{text}</Text>
        <Cursor cursorBlinking cursorStyle='_' cursorColor='coral' />
        <Text opacity='0' pointerEvents='none' lineHeight='0'>
          Get to know me!
        </Text>
        {showActions && (
          <HStack
            as={motion.div}
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            gap='16px'
            justify='center'
          >
            <Button
              _hover={{
                filter: "brightness(1.3)",
              }}
              boxShadow='2px 2px 4px gray'
              color='white'
              bgColor='coral'
              transition='all .4s'
            >
              Contact
            </Button>
            <Button
              _hover={{
                filter: "brightness(1.3)",
              }}
              boxShadow='2px 2px 4px gray'
              variant='outline'
              borderColor='coral'
              transition='all .4s'
            >
              Projects
            </Button>
          </HStack>
        )}
      </Box>
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
