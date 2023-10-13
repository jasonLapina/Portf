import { Box, Center, Heading, Image, Tooltip } from "@chakra-ui/react";
import MySection from "./UI/MySection";
import { Typewriter } from "react-simple-typewriter";
function Skills() {
  const skills = [
    { icon: "/assets/skills/figma.svg", label: "Figma" },
    { icon: "/assets/skills/html.svg", label: "HTML5" },
    { icon: "/assets/skills/css.svg", label: "CSS3" },
    { icon: "/assets/skills/js.svg", label: "Javascript" },
    { icon: "/assets/skills/ts.svg", label: "Typescript" },
    { icon: "/assets/skills/react.svg", label: "React" },
    { icon: "/assets/skills/jest.svg", label: "Jest" },
    { icon: "/assets/skills/next.svg", label: "Next.js" },
    { icon: "/assets/skills/git.svg", label: "Git & Github" },
    { icon: "/assets/skills/aws.svg", label: "Amazon Web Services" },
    { icon: "/assets/skills/node.svg", label: "Node" },
    { icon: "/assets/skills/mongodb.svg", label: "MongoDB" },
  ];

  return (
    <Box>
      <MySection heading='skills'>
        <Heading textAlign='center' fontWeight='thin'>
          <Typewriter
            words={["My tech stack"]}
            cursor
            cursorColor='coral'
            cursorStyle='_'
          />
        </Heading>
        <Center pos='relative' h='100vh'>
          <Image
            data-aos='fade-up'
            h='70%'
            src='/assets/skills-invo.png'
            borderRadius='full'
          />
          {skills.map((item, i) => (
            <Tooltip key={i} hasArrow label={item.label}>
              <Image
                data-aos='fade-in'
                data-aos-delay='500'
                w='80px'
                key={item.icon}
                src={item.icon}
                pos='absolute'
                transform={`rotate(${
                  i * (360 / skills.length)
                }deg) translateY(-350px) rotate(-${
                  i * (360 / skills.length)
                }deg) !important`}
                filter={`drop-shadow(4px 4px 4px cyan)`}
              />
            </Tooltip>
          ))}
        </Center>
      </MySection>
    </Box>
  );
}

export default Skills;
