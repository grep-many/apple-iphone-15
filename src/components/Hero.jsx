import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../assets";

const Hero = () => {
  const sourceRef = React.useRef(null);

  const handleResize = () => {
    const isMobile = window.innerWidth < 768;
    const desiredSrc = isMobile ? smallHeroVideo : heroVideo;
    if (!sourceRef?.current) return;
    if (sourceRef.current.src.endsWith(desiredSrc)) return;
    sourceRef.current.src = desiredSrc;
    sourceRef.current.parentElement.load();
  };

  useGSAP(() => {
    const isMobile = window.innerWidth < 768;
    gsap.to("#hero", {
      opacity: 1,
      duration: 1,
      delay: 0.5,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      duration:1,
      delay: isMobile?2.4:0.8,
    });
  }, [heroVideo, smallHeroVideo]);

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (sourceRef?.current) sourceRef.current = null;
    };
  }, [heroVideo, smallHeroVideo]);

  return (
    <section className="nav-height relative">
      <div className="flex-center h-5/6 flex-col">
        <p className="hero-title" id="hero">
          iPhone 15 Pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video autoPlay muted playsInline className="pointer-events-none">
            <source
              ref={sourceRef}
              src={window.innerWidth < 768 ? smallHeroVideo : heroVideo}
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div id="cta" className="flex translate-y-20 flex-col items-center opacity-0">
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="text-xl font-normal">From 1199/month or 1999</p>
      </div>
    </section>
  );
};

export default Hero;
