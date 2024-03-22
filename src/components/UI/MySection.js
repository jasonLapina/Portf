import { Box } from "@chakra-ui/react";
function MySection(props) {
  return (
    <Box maxW={"var(--maxW)"} mx='auto' pos='relative' px='16px' {...props}>
      {props.children}
    </Box>
  );
}

export default MySection;
