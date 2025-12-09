import { Html } from "@react-three/drei";
import { appleImg } from "../assets";

const Loader = () => {
  return (
    <Html>
      <div className="abolute flex-center top-0 left-0 size-full">
        <div className="size-[20vw] rounded-full">
          <img src={appleImg} alt="Loading..." className="animate-pulse" />
        </div>
      </div>
    </Html>
  );
};

export default Loader;
