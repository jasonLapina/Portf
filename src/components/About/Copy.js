import {
  Box,
  VStack,
  Heading,
  Text,
  HStack,
  Icon,
  Grid,
} from "@chakra-ui/react";

import { FaBriefcase, FaDesktop, FaGraduationCap } from "react-icons/fa";

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
      <Text mb='24px'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ex
        assumenda enim est delectus accusantium quaerat autem tempore, ut itaque
        dignissimos molestiae cum aliquid fugiat ducimus voluptate provident
        reiciendis error?
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
            Blink Creative Studio, Web Developer
          </Text>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium recusandae aspernatur quisquam.
          </Text>
        </Box>
        <Box>
          <Text fontWeight='semibold' color='var(--primary)'>
            2022 - 2023
          </Text>
          <Text fontWeight='bold' fontSize='20px'>
            Freelance, Web Developer
          </Text>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium recusandae aspernatur quisquam.
          </Text>
        </Box>
        <Box>
          <Text fontWeight='semibold' color='var(--primary)'>
            2022 - 2023
          </Text>
          <Text fontWeight='bold' fontSize='20px'>
            Freelance, Web Developer
          </Text>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium recusandae aspernatur quisquam.
          </Text>
        </Box>
      </VStack>
    </Box>
  );
}

function Intro() {
  return (
    <Box borderBottom='solid 2px #666' pb='40px'>
      <Heading fontSize='56px' mb='16px'>
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
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: FaDesktop,
      title: "design",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: FaDesktop,
      title: "optimization",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: FaDesktop,
      title: "collaboration",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];
  return (
    <Box>
      <Heading mb='24px'>my skills</Heading>
      <Grid gridTemplateColumns='1fr 1fr' gap='16px'>
        {skills.map((s) => (
          <Box key={s.title}>
            <Icon color='var(--primary)' mb='8px' boxSize='32px' as={s.icon} />
            <Text mb='8px' fontSize='24px' fontWeight='bold'>
              {s.title}
            </Text>
            <Text color='#aaa'>{s.text}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
}
