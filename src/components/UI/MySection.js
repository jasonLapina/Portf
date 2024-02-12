import { Box } from "@chakra-ui/react";
function MySection(props) {
  return (
    <Box
      maxW={"var(--maxW)"}
      mx='auto'
      {...props}
      pos='relative'
      px={{ base: "16px", md: "0" }}
    >
      {props.children}
    </Box>
  );
}

export default MySection;
