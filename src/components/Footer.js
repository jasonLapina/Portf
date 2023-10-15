import { Box, Grid, Heading, Icon, Text } from "@chakra-ui/react";
import { BiLogoGithub } from "react-icons/bi";
function Footer() {
  return (
    <Box
      bgImage='linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))'
      minH='240px'
      pb='120px'
      pt='32px'
      px='8px'
    >
      <Grid
        justifyContent='space-between'
        gridTemplateColumns={{ base: "1fr", md: "2fr 1fr" }}
        alignItems='center'
        rowGap='24px'
        justifyItems='center'
      >
        <Box>
          <Heading mb='16px' filter='drop-shadow(2px 2px 8px cyan)'>
            Jason Alexander Lapina
          </Heading>
          <Text fontSize='24px' filter='drop-shadow(2px 2px 8px coral)'>
            Web Developer, UI/UX Designer
          </Text>
        </Box>
        <Box
          justifySelf={{ md: "start", base: "center" }}
          as='a'
          href='https://github.com/jasonLapina'
          target='_blank'
          rel='noreferrer'
          _hover={{
            filter: "drop-shadow(4px 4px 16px cyan)",
          }}
          transition='all .4s'
        >
          <Icon fontSize='80px' as={BiLogoGithub} />
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;
