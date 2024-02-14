import {
  Box,
  Grid,
  HStack,
  Icon,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import {
  FaCloudDownloadAlt,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import Copy from "./Copy";
import TextHeading from "../3d/3DHeading";

function About() {
  return (
    <Box mb='15vh' px={{ base: "8px", md: "0px" }} id='About'>
      <TextHeading text={"Profile"} />
      <Grid
        maxW='1280px'
        mx='auto'
        gridTemplateColumns={{ md: "1fr 1fr", base: "1fr" }}
        h='620px'
        // bgColor='#222'
        backdropFilter='blur(5px)'
        pos='relative'
        // mb='200px'
        mt='40px'
        px={{ base: "8px", md: "0" }}
        gap='16px'
        mb='10vh'
        bgColor='rgba(255,255,255,.05)'
      >
        <Profile />
        <Copy />
      </Grid>
    </Box>
  );
}

export default About;

function Profile() {
  const socMed = [
    {
      icon: FaGithub,
      link: "https://github.com/jasonLapina",
      color: "white",
    },
    {
      icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/dev-jason/",
      color: "#0e76a8 ",
    },
    {
      icon: FaFacebookF,
      link: "https://www.facebook.com/klemekek/",
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
          gap={{ base: "8px", md: "0" }}
        >
          <Box
            cursor='pointer'
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            fontWeight='bolder'
            fontSize='32px'
            as='span'
          >
            JL
          </Box>
          <VStack gap='24px'>
            {socMed.map((s) => (
              <Box
                as='a'
                key={s.link}
                href={s.link}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon boxSize='30px' color={s.color} as={s.icon} />
              </Box>
            ))}
          </VStack>
          <Tooltip label='Download full resume' placement='top' hasArrow>
            <a href='Jason Lapina - Resume.pdf' download>
              <Icon
                className='download-icon'
                cursor='pointer'
                boxSize='32px'
                as={FaCloudDownloadAlt}
              />
            </a>
          </Tooltip>
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
          fontSize={{ base: "32px", md: "48px" }}
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
          fontSize={{ md: "20px", base: "15px" }}
          fontStyle='italic'
          color='var(--primary)'
          fontWeight='bold'
          letterSpacing='widest'
          w='100%'
          textAlign='center'
        >
          Developer | Designer
        </Text>
      </Box>
    </HStack>
  );
}
