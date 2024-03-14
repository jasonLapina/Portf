import { Box } from "@chakra-ui/react";
function MySection(props) {
  return (
    <Box maxW={"var(--maxW)"} mx='auto' {...props} pos='relative' px='16px'>
      {props.children}
    </Box>
  );
}

export default MySection;
