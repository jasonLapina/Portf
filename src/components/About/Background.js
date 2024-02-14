import { Box, VStack, Heading, Text, HStack, Icon } from "@chakra-ui/react";

import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

function Background() {
  return (
    <Box>
      <Heading mb='24px'>my background</Heading>
      <HStack mb='16px'>
        <Icon boxSize='24px' as={FaGraduationCap} />
        <Text fontSize='24px' color='var(--primary)' fontWeight='semibold'>
          Education
        </Text>
      </HStack>
      <Text color='#aaa' mb='24px'>
        I studied Agricultural Economics at the University of the Philippines,
        Los Baños, but later discovered my passion for programming. Since then,
        I've been learning web development and web design through online courses
        on Udemy and have built several projects. My learning journey has been
        continuous.
      </Text>
      <HStack>
        <Icon boxSize='24px' as={FaBriefcase} />
        <Text fontSize='24px' color='var(--primary)' fontWeight='semibold'>
          Experience
        </Text>
      </HStack>
      <VStack align='normal' mt='16px'>
        <Box>
          <Text fontWeight='semibold' color='var(--primary)'>
            2023 - Present
          </Text>
          <Text fontWeight='bold' fontSize='20px'>
            Blink Creative Studio, Frontend Developer
          </Text>
          <Text color='#aaa'>
            Developed, optimized, and deployed a{" "}
            <Website link={"https://milestones-worlds.jollibeegroup.com/"}>
              3d project{" "}
            </Website>
            for Jollibee Foods Corporation. Updated the company{" "}
            <Website link='https://blinkcreativestudio.com'>website.</Website>
          </Text>
        </Box>
        <Box>
          <Text fontWeight='semibold' color='var(--primary)'>
            2022
          </Text>
          <Text fontWeight='bold' fontSize='20px'>
            Freelance, Frontend Developer
          </Text>
          <Text color='#aaa'>
            Worked briefly as a freelance developer. Developed and deployed an
            e-commerce project.
          </Text>
        </Box>
        <Box>
          <Text fontWeight='semibold' color='var(--primary)'>
            2022 - 2023
          </Text>
          <Text fontWeight='bold' fontSize='20px'>
            Taktyl Studios, Frontend Developer
          </Text>
          <Text color='#aaa'>
            Developed and deployed a{" "}
            <Website link='https://leaderbored.gg'>game portal</Website>.
            Developed a ticket booking{" "}
            <Website link={"https://www.sikapphilippines.org/ayo2023"}>
              website{" "}
            </Website>{" "}
            for AYO Philippines. Updated the company{" "}
            <Website link={"https://taktylstudios.com/"}>website</Website>.
            Worked on several other projects{" "}
            <Box as='span' fontWeight='bold' color='magenta'>
              (total of 8).
            </Box>
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}
export default Background;

function Website(props) {
  return (
    <a
      target='_blank'
      rel='noopener noreferrer'
      href={props.link}
      style={{ color: "magenta", fontWeight: "bold" }}
    >
      {props.children}
    </a>
  );
}
