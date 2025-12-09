import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import React from "react";
import { yellowImg } from "../assets";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils";

const Model = () => {
  const sizeBtnRef = React.useRef([]);
  const size = React.useRef("small");
  const modelName = React.useRef(null);
  const modelRef = React.useRef([]);

  const cameraControlSmall = React.useRef();
  const cameraControlLarge = React.useRef();

  const small = React.useRef(new THREE.Group());
  const large = React.useRef(new THREE.Group());

  const smallRotation = React.useRef(0);
  const largeRotation = React.useRef(0);

  const tl = gsap.timeline();

  const setSmallRotation = (val) => (smallRotation.current = val);
  const setLargeRotation = (val) => (largeRotation.current = val);

  const handleVariantChange = ({ title, color }) => {
    if (!modelName?.current || !modelRef?.current) return;
    modelName.current.textContent = title;
    modelRef.current.forEach((model) => {
      model?.change?.(color);
    });
  };

  const handleSize = (value, i) => {
    if (!size?.current || !sizeBtnRef?.current) return;
    size.current = value;
    sizeBtnRef.current.forEach((el) => {
      el.classList.remove("bg-white!");
      el.classList.remove("text-black!");
    });
    sizeBtnRef.current[i].classList.add("bg-white!");
    sizeBtnRef.current[i].classList.add("text-black!");

    if (size.current === "large") {
      animateWithGsapTimeline(tl, small, smallRotation.current, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
      return;
    }
    if (size.current === "small") {
      animateWithGsapTimeline(tl, large, largeRotation.current, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
      return;
    }
  };

  useGSAP(() => {
    gsap.to("#heading", {
      scrollTrigger: {
        trigger: "#heading",
      },
      y: 0,
      opacity: 1,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a close look.
        </h1>

        <div className="mt-5 flex flex-col items-center">
          <div className="relative h-[75vh] w-full overflow-hidden md:h-[90vh]">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              texture={yellowImg}
              ref={(el) => (modelRef.current[0] = el)}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              texture={yellowImg}
              ref={(el) => (modelRef.current[1] = el)}
            />
            <Canvas
              className="size-full"
              style={{
                position: "fixed",
                inset: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="mb-5 text-center text-sm font-light" ref={modelName}>
              {models[0].title}
            </p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map(({ id, color, title }) => (
                  <li
                    key={id}
                    className="mx-2 size-6 cursor-pointer rounded-full"
                    style={{
                      backgroundColor: color[0],
                    }}
                    onClick={() => handleVariantChange({ title, color })}
                  ></li>
                ))}
              </ul>
              <span className="size-btn-container">
                {/* eslint-disable react-hooks/refs */}
                {sizes.map(({ label, value }, i) => (
                  <button
                    key={label}
                    ref={(el) => (sizeBtnRef.current[i] = el)}
                    className={`size-btn bg-transparent text-white ${size.current === value && "bg-white! text-black!"}`}
                    onClick={() => handleSize(value, i)}
                  >
                    {label}
                  </button>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
