import { useMediaQuery } from "@chakra-ui/react";
import { Text3D, Center, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Suspense, useRef } from "react";

function CameraRig({ children }) {
  const groupRef = useRef();

  useFrame((state, delta) => {
    easing.dampE(
      groupRef.current.rotation,
      [-state.pointer.y / 10, state.pointer.x / 25, 0],
      0.25,
      delta
    );
  });
  return <group ref={groupRef}>{children}</group>;
}

function Copy({ text }) {
  const [isMd] = useMediaQuery("(min-width: 767px)");

  return (
    <CameraRig>
      <Center position={[isMd ? -5 : 0, 0, 1]}>
        <Text3D size={isMd ? 2 : 1} font='/Heading.json'>
          {text}
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </CameraRig>
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
