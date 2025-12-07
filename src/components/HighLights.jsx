import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../assets";
import VideoCarousel from "./VideoCarousel";

const HighLights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      scrollTrigger: {
        trigger: "#title",
      },
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      scrollTrigger: {
        trigger: ".link",
      },
      opacity: 1,
      stagger: 0.25,
      y: 0,
      delay: 0.1,
    });
  }, []);
  return (
    <section id="highlights" className="common-padding bg-zinc h-full overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <a className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </a>
            <a className="link">
              Watch the event
              <img src={rightImg} alt="watch" className="ml-2" />
            </a>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default HighLights;
