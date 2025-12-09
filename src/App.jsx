import Navbar from "@/components/Navbar";
import { Loader } from "@react-three/drei";
import React from "react";
const Hero = React.lazy(() => import("@/components/Hero"));
const HighLights = React.lazy(() => import("@/components/HighLights"));
const Model = React.lazy(() => import("./components/Model"));
const Features = React.lazy(() => import("./components/Features"));
const HowItWorks = React.lazy(() => import("./components/HowItWorks"));
const Footer = React.lazy(() => import("./components/Footer"));

const App = () => (
  <React.Suspense fallback={<Loader R3F={false} />}>
    <Navbar />
    <Hero />
    <HighLights />
    <Model />
    <Features />
    <HowItWorks />
    <Footer />
  </React.Suspense>
);

export default App;
