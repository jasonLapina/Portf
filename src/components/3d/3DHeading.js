import { Box } from "@chakra-ui/react";
import { Text3D, Center } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

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
  return (
    <CameraRig>
      <Center>
        <Text3D size={2} font='/Heading.json'>
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
      <Copy text={text} />
    </Canvas>
  );
}
