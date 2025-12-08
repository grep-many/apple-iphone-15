import React from "react";
import { Html } from "@react-three/drei";
import { appleImg } from "../assets";

const Loader = () => {
  return (
    <Html>
      <div className="abolute top-0 left-0 flex size-full items-center justify-center">
        <div className="size-[20vw] rounded-full"><img src={appleImg} alt="Loading..." className="animate-pulse" /></div>
      </div>
    </Html>
  );
};

export default Loader;
