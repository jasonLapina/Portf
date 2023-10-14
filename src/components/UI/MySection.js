import { Box, Heading, Text } from "@chakra-ui/react";
function MySection(props) {
  return (
    <Box
      maxW={"var(--maxW)"}
      mx='auto'
      {...props}
      pos='relative'
      px={{ base: "16px", md: "0" }}
    >
      <Heading data-aos='fade-down' mb='48px' mt='80px'>
        <Text color='blue.300' as='span'>
          {"<"}
        </Text>
        {props.heading}
        <Text color='blue.300' as='span'>
          {">"}
        </Text>
      </Heading>
      {props.children}
      <Heading data-aos='fade-up' mt='48px' mb='80px'>
        <Text color='blue.300' as='span'>
          {"<"}
          <Text color='coral' as='span'>
            {"/"}
          </Text>
        </Text>
        {props.heading}
        <Text color='blue.300' as='span'>
          {">"}
        </Text>
      </Heading>
    </Box>
  );
}

export default MySection;
