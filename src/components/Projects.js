import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import MySection from "./UI/MySection";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import MyTypewriter from "./UI/MyTypewriter";
import MotionBox from "./UI/MotionBox";
import useProjects from "../hooks/useProjects";
import { apiURL } from "../utils/config";
import TextHeading from "./3d/3DHeading";

function Projects() {
  // const projs = [
  //   {
  //     title: "Leaderbored",
  //     text: "Game portal to play HTML5 games and climb the leaderboard.",
  //     image: [
  //       "/assets/projs/leaderbored.png",
  //       "/assets/projs/leaderbored2.png",
  //     ],
  //     link: "https://leaderbored.gg",
  //     tags: {
  //       work: ["Designed", "Developed"],
  //       tools: ["Figma", "React"],
  //     },
  //   },
  //   {
  //     title: "Taktyl Studios",
  //     text: "Company website to showcase their awards, services, IPCatalog, and how to contact them.",
  //     image: ["/assets/projs/taktyl.png", "/assets/projs/taktyl2.png"],
  //     link: "https://taktylstudios.com/",
  //     tags: {
  //       work: ["Developed"],
  //       tools: ["Next.js"],
  //     },
  //   },
  //   {
  //     title: "LapsFlix",
  //     text: "Mock project for a movie/series browsing application.",
  //     image: ["/assets/projs/lapsflix.png", "/assets/projs/lapsflix2.png"],
  //     link: "https://lapsflix-v3.vercel.app/",

  //     tags: {
  //       work: ["Designed", "Developed"],
  //       tools: ["Figma", "Next.js"],
  //     },
  //   },
  //   {
  //     title: "JMG Writes",
  //     text: "Mock project for a copywriter to showcase their work and connect with them.",
  //     image: ["/assets/projs/jmg1.png", "/assets/projs/jmg2.png"],
  //     link: "https://jmg-writes.vercel.app/",

  //     tags: {
  //       work: ["Designed", "Developed"],
  //       tools: ["Figma", "React"],
  //     },
  //   },
  //   {
  //     title: "AYO 2023",
  //     text: "Event booking website for Sikap Philippine's AYO2023.",
  //     image: ["/assets/projs/ayo1.png", "/assets/projs/ayo2.png"],
  //     link: "https://www.sikapphilippines.org/ayo2023",
  //     tags: {
  //       work: ["Designed", "Developed"],
  //       tools: ["Wix", "Velo"],
  //     },
  //   },
  // ];

  const { data, isLoading } = useProjects();

  if (isLoading) return <div />;

  return (
    <Box id='Projects'>
      <MySection heading='projects'>
        {/* <MyTypewriter words={["Featured Projects"]} /> */}
        <TextHeading text={"Projects"} />
        {data.map((p, i) => {
          const { name, description, link, tools, tasks } = p;

          const even = i % 2 === 0;
          return (
            <Flex
              key={name}
              borderBlock='solid 1px rgba(255,255,255,.3)'
              py='40px'
              flexDir={{ base: "column", md: even ? "row" : "row-reverse" }}
              my='40px'
              px='8px'
            >
              <MotionBox
                flex='1'
                textAlign={{ base: "left", md: even ? "left" : "right" }}
                data-aos={even ? "fade-right" : "fade-left"}
              >
                <Text fontSize='40px'>{name}</Text>
                <Text
                  maxW='400px'
                  mr={{ md: even ? "auto" : "" }}
                  ml={{ md: even ? "" : "auto" }}
                  opacity={0.6}
                >
                  {description}
                </Text>
                <Box my='16px'>
                  <Text mb='8px' opacity='.6'>
                    Tasks:
                  </Text>
                  <HStack
                    justifyContent={{
                      base: "start",
                      md: even ? "start" : "end",
                    }}
                  >
                    {tasks.map((t) => (
                      <Box
                        key={name + t}
                        bgColor={t === "Designed" ? "#ff00a0" : "cyan"}
                        filter={`drop-shadow(2px 2px 4px  ${
                          t === "Designed" ? "#ff00a0" : "cyan"
                        })`}
                        borderRadius='10px'
                        px='8px'
                        py='4px'
                        color={t === "Designed" ? "white" : "black"}
                        fontWeight='semibold'
                      >
                        {t}
                      </Box>
                    ))}
                  </HStack>
                  <Box mt='24px'>
                    <Text opacity='.6' mb={{ base: "8px", md: "0" }}>
                      Tools:
                    </Text>
                    <HStack
                      flexDir={{ md: even ? "row" : "row-reverse" }}
                      justifyContent={{
                        base: "start",
                        md: even ? "start" : "end",
                      }}
                    >
                      {tools.map((tool) => {
                        return (
                          <Box
                            key={tool}
                            borderRadius='10px'
                            px='8px'
                            py='4px'
                            fontWeight='semibold'
                          >
                            {tool}
                          </Box>
                        );
                      })}
                      <a href={link} target='_blank' rel='noopener noreferrer'>
                        <Button
                          variant='outline'
                          px='32px'
                          py='24px'
                          borderRadius='20px'
                          transition='all .4s'
                          _hover={{
                            borderColor: "cyan",
                            color: "white",
                          }}
                          color='cyan'
                        >
                          Visit website
                          <ExternalLinkIcon ml='8px' />
                        </Button>
                      </a>
                    </HStack>
                  </Box>
                </Box>
              </MotionBox>
              <MotionBox
                borderRadius='10px'
                pos='relative'
                flex='1'
                role='group'
                overflow='hidden'
                maxH='310px'
                data-aos={even ? "fade-left" : "fade-right"}
              >
                <a href={link} target='_blank' rel='noopener noreferrer'>
                  <Image
                    borderRadius='10px'
                    src={`${apiURL}/storage/v1/object/public/projects/${name.toLowerCase()}1.png`}
                  />
                  <Image
                    borderRadius='10px'
                    src={`${apiURL}/storage/v1/object/public/projects/${name.toLowerCase()}2.png`}
                    pos='absolute'
                    top='0'
                    left='120px'
                    opacity={0}
                    transition='all .3s'
                    _groupHover={{
                      left: "0",
                      opacity: 1,
                    }}
                  />
                </a>
              </MotionBox>
            </Flex>
          );
        })}
      </MySection>
    </Box>
  );
}

export default Projects;
