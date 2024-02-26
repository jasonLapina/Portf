import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import MySection from "./UI/MySection";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import MotionBox from "./UI/MotionBox";
import useProjects from "../hooks/useProjects";
import { apiURL } from "../utils/config";
import TextHeading from "./3d/3DHeading";

function Projects() {
  const { data, isLoading } = useProjects();

  if (isLoading) return <div />;

  return (
    <Box mb='15vh' id='Projects'>
      <MySection heading='projects'>
        <TextHeading text={"Work"} />
        <Text
          backdropFilter='blur(5px)'
          fontSize={{ md: "20px", base: "14px" }}
          py='16px'
          px='8px'
          borderRadius='10px'
          w='fit-content'
        >
          Below are some of the projects I've worked on.
        </Text>
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
                        bgColor={t === "Designed" ? "magenta" : "cyan"}
                        filter={`drop-shadow(2px 2px 4px  ${
                          t === "Designed" ? "magenta" : "cyan"
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
                      flexWrap='wrap'
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
