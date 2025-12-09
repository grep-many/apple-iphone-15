import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./Lights";
import React from "react";
import IPhone from "./IPhone";
import * as THREE from "three";
import Loader from "./Loader";

const ModelView = React.forwardRef(
  ({ index, groupRef, gsapType, controlRef, setRotationState, texture }, ref) => {
    const iphoneRef = React.useRef(null);
    React.useImperativeHandle(ref, () => ({
      change(color) {
        // Call the change method inside IPhone
        iphoneRef.current?.change(color);
      },
    }));

    return (
      <View
        index={index}
        id={gsapType}
        className={`absolute h-full w-full ${index === 2 ? "-right-full" : ""}`}
      >
        <ambientLight intensity={0.3} />
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Lights />
        <OrbitControls
          ref={controlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}
        />
        <group ref={groupRef} name={`${index === 1 ? "small" : "large"}`} position={[0, 0, 0]}>
          <React.Suspense fallback={<Loader />}>
            <IPhone
              ref={iphoneRef}
              scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
              texture={texture}
            />
          </React.Suspense>
        </group>
      </View>
    );
  },
);

export default ModelView;
