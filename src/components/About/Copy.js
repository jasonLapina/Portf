import {
  Box,
  VStack,
  Heading,
  Text,
  HStack,
  Icon,
  Grid,
} from "@chakra-ui/react";

import {
  FaDesktop,
  FaHandsHelping,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";
import Background from "./Background";

function Copy() {
  return (
    <VStack
      css={{ "&::-webkit-scrollbar": { width: "0" } }}
      align='normal'
      pr='80px'
      py='40px'
      overflow='auto'
      gap='48px'
    >
      <Intro />
      <Skills />
      <Background />
    </VStack>
  );
}

export default Copy;

function Intro() {
  return (
    <Box borderBottom='solid 2px #666' pb='40px'>
      <Heading fontSize={{ md: "56px", base: "40px" }} mb='16px'>
        about me
      </Heading>
      <HStack fontStyle='italic' gap='8px'>
        <Text letterSpacing='widest' fontWeight='bold' color='var(--primary)'>
          Summary
        </Text>
        <Text color='#aaa'>/</Text>
        <Text letterSpacing='widest' fontWeight='bold' color='var(--primary)'>
          Skills
        </Text>
        <Text color='#aaa'>/</Text>
        <Text letterSpacing='widest' fontWeight='bold' color='var(--primary)'>
          Background
        </Text>
      </HStack>
      <VStack mt='24px' color='#aaa'>
        <Text>
          I'm an experienced frontend developer with a strong proficiency in the{" "}
          <strong>MERN</strong> stack and basic <strong>AWS</strong> services. I
          also have a very strong sense of <strong>UI/UX</strong> design.
        </Text>
        <Text>
          Although I attended the <strong>University of the Philippines</strong>
          , I am largely self-taught, which is proof in itself that I can learn
          and adapt to new technology.
        </Text>
        <Text>
          Outside of coding, I typically spend my time <strong>learning</strong>
          , playing video games, watching movies or series, and working out.
        </Text>
      </VStack>
    </Box>
  );
}

function Skills() {
  const skills = [
    {
      icon: FaDesktop,
      title: "development",
      text: "Efficiently convert design into code that's focused on optimization and maintinability.",
    },
    {
      icon: FaPaintBrush,
      title: "design",
      text: "Prioritizes a good user experience but with an aesthetic user interface in mind.",
    },
    {
      icon: FaRocket,
      title: "optimization",
      text: "Ensures that the application is optimized during and after coding the project.",
    },
    {
      icon: FaHandsHelping,
      title: "collaboration",
      text: "Works well with other developers, designers, project managers, and even the client/s.",
    },
  ];
  return (
    <Box>
      <Heading mb='24px'>my skills</Heading>
      <Grid
        gridTemplateColumns={{ md: "1fr 1fr", base: "1fr" }}
        columnGap='16px'
        rowGap='48px'
      >
        {skills.map((s) => (
          <Box key={s.title}>
            <Icon color='var(--primary)' mb='8px' boxSize='32px' as={s.icon} />
            <Text mb='8px' fontSize='24px' fontWeight='bold'>
              {s.title}
            </Text>
            <Text pr='16px' color='#aaa'>
              {s.text}
            </Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
