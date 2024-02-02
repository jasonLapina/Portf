import { useMediaQuery } from "@chakra-ui/react";
import { Text3D, Center, Sparkles } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Copy({ text }) {
  const [isMd] = useMediaQuery("(min-width: 767px)");

  return (
    <Center position={[isMd ? -5 : 0, 0, 1]}>
      <Text3D size={isMd ? 2 : 1} font='/Heading.json'>
        {text}
        <meshNormalMaterial />
      </Text3D>
    </Center>
  );
}

export default function TextHeading({ text }) {
  return (
    <Canvas>
      <Suspense fallback={<></>}>
        <Sparkles scale={9} />
        <Copy text={text} />
      </Suspense>
    </Canvas>
  );
}
