import { Heading, Center } from "@chakra-ui/react";

export default function TextHeading({ text }) {
  return (
    <Center py='40px'>
      <Heading
        style={{
          WebkitTextStroke: ".1vw var(--primary)",
        }}
        letterSpacing='wider'
        fontSize='64px'
        color='transparent'
        bgSize='cover'
        bgPos='center'
        bgClip='text'
        bgImage='url(https://png.pngtree.com/background/20210714/original/pngtree-abstract-technology-background-technical-electric-picture-image_1252603.jpg)'
      >
        {text}
      </Heading>
    </Center>
  );
}
