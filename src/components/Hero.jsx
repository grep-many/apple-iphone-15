import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../assets";

const Hero = () => {
  const videoRef = React.useRef({
    control: null,
    source: null,
  });

  const loopEnd = () => {
    const video = videoRef.current.control;
    if (!video) return;

    const loopStart = video.duration - 0.9  ;
    if (video.currentTime >= video.duration) {
      video.currentTime = loopStart;
      video.playbackRate =0.5;
      video.play();
    }
  };
  
  const handleResize = () => {
    const video = videoRef.current;
    const isMobile = window.innerWidth < 768;
    const desiredSrc = isMobile ? smallHeroVideo : heroVideo;

    if (!video?.source || !video?.control) return;
    if (video.source.src.endsWith(desiredSrc)) return;

    video.source.src = desiredSrc;
    video.control.load();
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
      duration: 1,
      delay: isMobile ? 2.4 : 0.8,
    });
  }, [heroVideo, smallHeroVideo]);

  React.useEffect(() => {
    const video = videoRef.current.control;
    if (!video) return;
    video.addEventListener("timeupdate", loopEnd);

    window.addEventListener("resize", handleResize);
    if (videoRef.current.control) video.addEventListener("timeupdate", loopEnd);
    return () => {
      window.removeEventListener("resize", handleResize);
      video.removeEventListener("timeupdate", loopEnd);
      if (videoRef?.current?.control || videoRef?.current?.source) {
        videoRef.current.control = null;
        videoRef.current.source = null;
      }
    };
  }, [videoRef]);

  return (
    <section className="nav-height relative overflow-hidden">
      <div className="flex-center h-5/6 flex-col">
        <p className="hero-title" id="hero">
          iPhone 15 Pro
        </p>
        <div className="w-9/12 md:w-10/12">
          <video
            ref={(el) => (videoRef.current.control = el)}
            autoPlay
            muted
            playsInline
            className="pointer-events-none"
          >
            <source
              ref={(el) => (videoRef.current.source = el)}
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
        <p className="text-xl font-normal">From $199/month or $1999</p>
      </div>
    </section>
  );
};

export default Hero;
