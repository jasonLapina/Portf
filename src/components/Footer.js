import { Box, HStack, Heading, Text } from "@chakra-ui/react";
function Footer() {
  return (
    <Box
      bgImage='linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))'
      h='240px'
    >
      <Box py='40px' maxW='var(--maxW)' mx='auto'>
        <Box>
          <Heading mb='16px' filter='drop-shadow(2px 2px 8px cyan)'>
            Jason Alexander Lapina
          </Heading>
          <Text fontSize='24px' filter='drop-shadow(2px 2px 8px coral)'>
            Web Developer, UI/UX Designer
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
