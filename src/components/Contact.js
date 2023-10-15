import { Box, HStack, Icon, useMediaQuery } from "@chakra-ui/react";
import MySection from "./UI/MySection";
import MyTypewriter from "./UI/MyTypewriter";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
function Contact() {
  const [isMD] = useMediaQuery("(min-width: 768px)");

  return (
    <Box id='Contact'>
      <MySection heading='contacts'>
        <MyTypewriter words={["You can reach me @:"]} />
        <Box
          w={{ base: "auto", md: "800px" }}
          h='600px'
          bgImage="url('/assets/calling.svg')"
          filter='drop-shadow(2px 2px 8px cyan)'
          pos='relative'
          mx='auto'
        >
          {!isMD && (
            <HStack gap='40px' justify='center'>
              <a
                href='https://www.linkedin.com/in/dev-jason/'
                target='_blank'
                rel='noreferrer'
              >
                <Icon
                  as={BsLinkedin}
                  fontSize='80px'
                  borderRadius='full'
                  color='linkedin.500'
                  bgColor='white'
                  filter='drop-shadow(2px 2px 80px coral)'
                />
              </a>
              <a
                href='https://www.linkedin.com/in/dev-jason/'
                target='_blank'
                rel='noreferrer'
              >
                <Icon
                  as={BiLogoGmail}
                  fontSize='80px'
                  borderRadius='full'
                  color='red.500'
                  bgColor='white'
                  filter='drop-shadow(2px 2px 80px coral)'
                />
              </a>
            </HStack>
          )}
          {isMD && (
            <>
              <a
                href='https://www.linkedin.com/in/dev-jason/'
                target='_blank'
                rel='noreferrer'
              >
                <Icon
                  pos='absolute'
                  fontSize='80px'
                  borderRadius='full'
                  as={BsLinkedin}
                  color='linkedin.500'
                  bgColor='white'
                  right='59px'
                  top='214px'
                  filter='drop-shadow(2px 2px 80px coral)'
                />
              </a>
              <a href='mailto:lapina.jason@gmail.com'>
                <Icon
                  pos='absolute'
                  fontSize='80px'
                  borderRadius='full'
                  as={BiLogoGmail}
                  color='red.500'
                  bgColor='white'
                  right='183px'
                  top='214px'
                  filter='drop-shadow(2px 2px 80px coral)'
                />
              </a>
            </>
          )}
        </Box>
      </MySection>
    </Box>
  );
}

export default Contact;
