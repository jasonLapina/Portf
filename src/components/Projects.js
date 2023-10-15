import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import MySection from "./UI/MySection";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import MyTypewriter from "./UI/MyTypewriter";

function Projects() {
  const projs = [
    {
      title: "Leaderbored",
      text: "Game portal for HTML5 games from Taktyl Studios Inc.",
      image: [
        "/assets/projs/leaderbored.png",
        "/assets/projs/leaderbored2.png",
      ],
      link: "https://leaderbored.gg",
    },
    {
      title: "Taktyl Studios",
      text: "Taktyl Studios Inc.'s website",
      image: ["/assets/projs/taktyl.png", "/assets/projs/taktyl2.png"],
      link: "https://taktylstudios.com/",
    },
    {
      title: "NomNom",
      text: "Food browsing app, personal project",
      image: ["/assets/projs/nomnom1.png", "/assets/projs/nomnom2.png"],
      link: "https://nomnom-zeta.vercel.app/",
    },
    {
      title: "JMG Writes",
      text: "Copywriter's website, personal project",
      image: ["/assets/projs/jmg1.png", "/assets/projs/jmg2.png"],
      link: "https://jmg-writes.vercel.app/",
    },
    {
      title: "AYO 2023",
      text: "Event booking website for our client",
      image: ["/assets/projs/ayo1.png", "/assets/projs/ayo2.png"],
      link: "https://www.sikapphilippines.org/ayo2023",
    },
  ];
  return (
    <Box id='Projects'>
      <MySection heading='projects'>
        <MyTypewriter words={["Featured Projects"]} />
        <Grid
          // gridTemplateColumns='repeat(auto-fit, minmax(400px,1fr))'
          gridTemplateColumns={{ md: "1fr 1fr", base: "1fr" }}
          gap='24px'
          justifyContent='center'
          justifyItems='center'
          maxW='1200px'
          mx='auto'
        >
          {projs.map((item, i) => {
            const { title, text, image, link } = item;
            return (
              <Box
                overflow='hidden'
                borderRadius='20px'
                key={title}
                pos='relative'
                gridColumn={i === 0 ? "1/-1" : ""}
                role='group'
                cursor='pointer'
                maxH={i === 0 ? "560px" : ""}
                // filter='drop-shadow(4px 4px 16px cyan)'
                boxShadow='4px 0px 16px cyan'
                as='a'
                href={link}
                target='_blank'
                rel='noreferrer'
              >
                <Box
                  color='white'
                  bgImage='linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,.4))'
                  pos='absolute'
                  px='32px'
                  py='16px'
                  bottom='-40px'
                  w='100%'
                  opacity='0'
                  transition='all .4s'
                  _groupHover={{
                    bottom: "0",
                    opacity: 1,
                  }}
                  zIndex={4}
                >
                  <Text
                    textShadow='2px 2px 4px coral'
                    fontSize='32px'
                    fontWeight='thin'
                    letterSpacing='wide'
                  >
                    {title}
                    <Button
                      variant='unstyled'
                      fontSize='40px'
                      color='white'
                      pos='absolute'
                      transform='translate(16px,-16px)'
                      filter='drop-shadow(4px 4px 8px coral)'
                    >
                      <ExternalLinkIcon />
                    </Button>
                  </Text>
                  <Text>{text}</Text>
                </Box>
                <Box pos='relative'>
                  <Image
                    h={{ base: "auto", md: "100%" }}
                    src={image[0]}
                    loading='lazy'
                    transition='all .4s'
                    _groupHover={{
                      opacity: 0,
                    }}
                  />
                  <Image
                    h={{ base: "auto", md: "100%" }}
                    src={image[1]}
                    loading='lazy'
                    opacity='0'
                    pos='absolute'
                    transition='all .4s'
                    _groupHover={{
                      opacity: 1,
                    }}
                    top='0'
                    left='0'
                  />
                </Box>
              </Box>
            );
          })}
        </Grid>
      </MySection>
    </Box>
  );
}

export default Projects;
