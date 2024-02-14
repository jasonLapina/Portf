import { Box, Grid, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import {
  FaFacebookF,
  FaFileDownload,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import Copy from "./Copy";
import TextHeading from "../3d/3DHeading";
function About() {
  return (
    <>
      <TextHeading text={"Profile"} />
      <Grid
        maxW='1280px'
        mx='auto'
        gridTemplateColumns='1fr 1fr'
        // h='70vh'
        h='620px'
        bgColor='#222'
        pos='relative'
        mb='200px'
        mt='40px'
      >
        <Box
          pos='absolute'
          h='40px'
          top='0'
          w='100%'
          bgGradient='linear(to bottom, #222, rgba(28,30,31,.1))'
        />
        <Box
          pos='absolute'
          h='40px'
          bottom='0'
          w='100%'
          bgGradient='linear(to top, #222, rgba(28,30,31,.1))'
        />
        <Profile />
        <Copy />
      </Grid>
    </>
  );
}

export default About;

function Profile() {
  const socMed = [
    {
      icon: FaGithub,
      link: "1",
      color: "white",
    },
    {
      icon: FaLinkedinIn,
      link: "2",
      color: "#0e76a8 ",
    },
    {
      icon: FaFacebookF,
      link: "3",
      color: "#1877F2",
    },
  ];
  return (
    <HStack gap='0'>
      <Box borderRadius='16px 0 0 16px' h='80%' w='80px'>
        <Grid
          h='100%'
          alignContent='center'
          alignItems='center'
          gridTemplateRows='1fr 4fr 1fr'
          justifyContent='center'
          color='var(--primary)'
        >
          <Box fontWeight='bolder' fontSize='32px' as='span'>
            JL
          </Box>
          <VStack gap='24px'>
            {socMed.map((s) => (
              <a key={s.link} href=''>
                <Icon boxSize='30px' color={s.color} as={s.icon} />
              </a>
            ))}
          </VStack>
          <Icon cursor='pointer' boxSize='32px' as={FaFileDownload} />
        </Grid>
      </Box>
      <Box
        bg='rgba(255,255,255,.2)'
        borderRadius='16px'
        // boxShadow='0 4px 30px rgba(255,255,255,.5)'
        backdropFilter='blur(5px)'
        border='solid 1px rgba(255,255,255,.3)'
        style={{
          WebkitBackdropFilter: "blur(5px)",
        }}
        w='80%'
        h='100%'
        transform='scaleY(1.05)'
        bgImage='linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.7)), url("/assets/hero-me.png")'
        bgSize='cover'
        bgRepeat='no-repeat'
        bgPos='center'
        pos='relative'
        filter='drop-shadow(4px 4px var(--primary))'
      >
        <Text
          pos='absolute'
          bottom='80px'
          left='50%'
          transform='translateX(-50%)'
          fontSize='48px'
          w='100%'
          textAlign='center'
        >
          Jason Lapina
        </Text>
        <Text
          pos='absolute'
          bottom='56px'
          left='50%'
          transform='translateX(-50%)'
          fontSize='20px'
          fontStyle='italic'
          color='var(--primary)'
          fontWeight='bold'
          letterSpacing='widest'
        >
          Developer | Designer
        </Text>
      </Box>
    </HStack>
  );
}
