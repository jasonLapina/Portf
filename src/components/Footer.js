import { Box, Grid, Heading, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box
      bgImage='linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))'
      minH='240px'
      pb='200px'
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
          <Text fontSize='24px' filter='drop-shadow(2px 2px 8px magenta)'>
            Web Developer, UI/UX Designer
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}

export default Footer;
