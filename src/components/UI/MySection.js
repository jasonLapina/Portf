import { Box, Heading, Text } from "@chakra-ui/react";
function MySection(props) {
  return (
    <Box py='80px' maxW={"var(--maxW)"} mx='auto'>
      <Heading mb='48px'>
        <Text color='blue.300' as='span'>
          {"<"}
        </Text>
        {props.heading}
        <Text color='blue.300' as='span'>
          {">"}
        </Text>
      </Heading>
      {props.children}
      <Heading mt='48px'>
        <Text color='blue.300' as='span'>
          {"<"}
          <Text color='red.300' as='span'>
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
