import { Box, Center, Heading, Image, Tooltip } from "@chakra-ui/react";
import MySection from "./UI/MySection";
import { Typewriter } from "react-simple-typewriter";
import MyTypewriter from "./UI/MyTypewriter";
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
    <Box id='Skills'>
      <MySection heading='skills'>
        <MyTypewriter words={["My tech stack"]} />
        <Center pos='relative' my='80px'>
          <Image
            data-aos='fade-up'
            src='/assets/skills-invo.png'
            borderRadius='full'
            filter={`drop-shadow(2px 2px 20px coral)`}
            maxW={{ base: "400px", md: "1000px" }}
          />
          {skills.map((item, i) => (
            <Tooltip key={i} hasArrow label={item.label}>
              <Image
                data-aos='fade-in'
                data-aos-delay='500'
                w={{ base: "40px", md: "80px" }}
                key={item.icon}
                src={item.icon}
                pos='absolute'
                transform={{
                  md: `rotate(${
                    i * (360 / skills.length)
                  }deg) translateY(-280px) rotate(-${
                    i * (360 / skills.length)
                  }deg) !important`,
                  base: `rotate(${
                    i * (360 / skills.length)
                  }deg) translateY(-140px) rotate(-${
                    i * (360 / skills.length)
                  }deg) !important`,
                }}
                filter={`drop-shadow(2px 2px 8px cyan)`}
              />
            </Tooltip>
          ))}
        </Center>
      </MySection>
    </Box>
  );
}

export default Skills;
