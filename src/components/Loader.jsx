import { Html } from "@react-three/drei";
import { appleImg } from "../assets";

const ApplePulse = () => (
  <div className="abolute flex-center top-0 left-0 size-full">
    <div className="size-[20vw] rounded-full">
      <img src={appleImg} alt="Loading..." className="animate-pulse" />
    </div>
  </div>
);

const Loader = ({ R3F = true }) => {
  if (!R3F) return <ApplePulse />;
  return (
    <Html>
      <ApplePulse />
    </Html>
  );
};

export default Loader;
