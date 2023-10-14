import { Box, Icon } from "@chakra-ui/react";
import MySection from "./UI/MySection";
import MyTypewriter from "./UI/MyTypewriter";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
function Contact() {
  return (
    <Box>
      <MySection heading='contacts'>
        <MyTypewriter words={["You can reach me @:"]} />

        <Box
          w='800px'
          h='600px'
          bgImage="url('/assets/calling.svg')"
          filter='drop-shadow(2px 2px 8px cyan)'
          pos='relative'
          mx='auto'
        >
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
        </Box>
      </MySection>
    </Box>
  );
}

export default Contact;
