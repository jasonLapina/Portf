import {
  Box,
  Center,
  Heading,
  Image,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";
import { Typewriter } from "react-simple-typewriter";
function Memes() {
  return (
    <Center h='100vh'>
      <VStack>
        <Heading>
          OHHH{" "}
          <Typewriter
            words={["PEEETAAAA"]}
            cursor
            cursorBlinking
            cursorColor='#ff00a0'
            cursorStyle='_'
            loop={0}
          />
        </Heading>
        <Box role='group' pos='relative'>
          <Button
            as='a'
            href='https://www.facebook.com/photo.php?fbid=339061239474740&set=pb.100001126016438.-2207520000&type=3'
            target='_blank'
            rel='noreferrer'
            pos='absolute'
            top='50%'
            left='50%'
            transform='translate(-50%,-50%)'
            textShadow='1px 1px 4px black'
            fontSize='40px'
            opacity={0}
            transition='all .4s'
            _groupHover={{
              opacity: 1,
            }}
          >
            CLICK ME!
          </Button>
          <Image cursor='pointer' display='block' src='/assets/peeta.jpg' />
        </Box>
      </VStack>
    </Center>
  );
}

export default Memes;
