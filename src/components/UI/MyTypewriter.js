import { Box, Heading } from "@chakra-ui/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
function MyTypewriter(props) {
  const { words } = props;

  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <Box h='80px'>
      <Heading
        pos='absolute'
        ref={ref}
        mb='40px'
        fontWeight='thin'
        textAlign='center'
        left='50%'
        transform='translateX(-50%)'
        w='100%'
      >
        {inView && (
          <Typewriter
            cursor
            cursorColor='coral'
            cursorStyle='_'
            words={words}
            {...props}
          />
        )}
      </Heading>
    </Box>
  );
}

export default MyTypewriter;
