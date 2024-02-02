import { useGLTF, Environment, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";

function Laptop() {
  const { scene: laptop } = useGLTF("/laptop.gltf");
  const { scene: phone } = useGLTF("phone.gltf");

  const laptopRef = useRef();
  const phoneRef = useRef();

  // useFrame((state, delta) => {
  //   phoneRef.current.rotation.y += -delta * 1.1;
  //   laptopRef.current.rotation.y += delta * 0.8;
  // });

  return (
    <Suspense fallback={<></>}>
      <ambientLight intensity={4} />
      <Environment preset='night' />
      <Float speed={2}>
        <primitive
          ref={phoneRef}
          object={phone}
          rotation-x={0.2}
          position={[3.5, -1, 1]}
          scale={0.3}
        />
      </Float>
      <Float speed={2}>
        <primitive
          object={laptop}
          ref={laptopRef}
          scale={0.5}
          position={[-3.4, -1.2, 1]}
        />
      </Float>
    </Suspense>
  );
}
export default Laptop;
