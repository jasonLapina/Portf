import { Box, VStack, Heading, Text, HStack, Icon } from "@chakra-ui/react";

import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

import experience from "../../data/experience.json";

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
        {experience.map(({ year, description, position, links }, i) => {
          return (
            <Box key={i}>
              <Text fontWeight='semibold' color='var(--primary)'>
                {year}
              </Text>
              <Text fontWeight='bold' fontSize='20px'>
                {position}
              </Text>
              <Text color='#aaa'>{description}</Text>
            </Box>
          );
        })}
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
