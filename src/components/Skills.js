import { Box, Center, Image, Tooltip } from "@chakra-ui/react";
import MySection from "./UI/MySection";

import useSkills from "../hooks/useSkills";
import { apiURL } from "../utils/config";

import Laptop from "./3d/Laptop";
import { Canvas } from "@react-three/fiber";
import TextHeading from "./3d/3DHeading";

function Skills() {
  const { data, isLoading } = useSkills();

  if (isLoading) return <div />;

  return (
    <>
      <Box mb='15vh' id='Skills' pos='relative'>
        {/* <Box pos='absolute' w='100%' h='100%'></Box> */}
        <MySection heading='skills'>
          {/* <MyTypewriter words={["My tech stack"]} /> */}
          <TextHeading text={"Tech Stack"} />
          <Center pos='relative' my='80px'>
            <Box data-aos='fade-up' pos='absolute' w='100%' h='100%'>
              <Canvas>
                <Laptop />
              </Canvas>
            </Box>
            <Image
              data-aos='fade-up'
              src='/assets/skills-invo.png'
              borderRadius='full'
              filter={`drop-shadow(2px 2px 20px magenta)`}
              maxW={{ base: "400px", md: "700px", lg: "1000px" }}
            />
            {data.map((item, i) => (
              <Tooltip key={i} hasArrow label={item.name}>
                <Image
                  alt={item.label + "logo"}
                  data-aos='fade-in'
                  data-aos-delay='500'
                  w={{ base: "40px", md: "80px" }}
                  key={item.icon}
                  // src={item.icon}
                  src={
                    apiURL +
                    `/storage/v1/object/public/skills/${item.name.toLowerCase()}.svg`
                  }
                  pos='absolute'
                  transform={{
                    md: `rotate(${
                      i * (360 / data.length)
                    }deg) translateY(-280px) rotate(-${
                      i * (360 / data.length)
                    }deg) !important`,
                    base: `rotate(${
                      i * (360 / data.length)
                    }deg) translateY(-140px) rotate(-${
                      i * (360 / data.length)
                    }deg) !important`,
                  }}
                  filter={`drop-shadow(2px 2px 8px cyan)`}
                />
              </Tooltip>
            ))}
          </Center>
          {/* <WhatIDo /> */}
        </MySection>
      </Box>
    </>
  );
}

export default Skills;

// function WhatIDo() {
//   return (
//     <Box mt='80px'>
//       {/* <MyTypewriter words={["What I do"]} /> */}
//       <Grid gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }} rowGap='40px'>
//         {genSkills.map((item, i) => (
//           <VStack key={i} data-aos='fade-up'>
//             <Image maxW='200px' h='160px' p='16px' src={item.img} />
//             <Text
//               bgGradient={`linear(${"cyan 30%,magenta"})`}
//               bgClip='text'
//               fontSize='32px'
//               fontWeight='semibold'
//             >
//               {item.title}
//             </Text>
//             <Text maxW='400px' mx='auto' opacity='.6'>
//               {item.text}
//             </Text>
//           </VStack>
//         ))}
//       </Grid>
//     </Box>
//   );
// }
