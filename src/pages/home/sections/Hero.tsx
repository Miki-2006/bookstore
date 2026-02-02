import { bookCovers } from "../../../constants";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const imagesRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!imagesRef.current) return;
    const tl = gsap.timeline();

    tl.from(imagesRef.current.querySelectorAll("img"), {
      x: 200,
      autoAlpha: 0,
      stagger: 0.4,
      ease: "power3.inOut",
    });

    tl.to(imagesRef.current.querySelectorAll("img"), {
      rotation: (i, _target, targets) => (targets.length - 1 - i) * 4,
      transformOrigin: "bottom right",
      duration: 1,
      ease: "power2.out",
      stagger: {
        from: "start",
        each: 0.2
      }
    });

  }, []);

  return (
    <div className="container flex  justify-center gap-10 sm:items-center sm:gap-0 sm:justify-between flex flex-col text-[#1e1b4b] h-[60vh] md:h-[80vh] sm:flex-row">
      <div className="flex flex-col gap-5 sm:max-w-[30vw]">
        <p className=" font-bold leading-8 text-xl md:text-3xl lg:text-5xl lg:leading-18">
          Buy and sell your books{" "} <br className="sm:hidden" />
          <span className="text-[#6366f1]">for the best prices MIKI</span>
        </p>
        <p className="text-sm hidden sm:block md:text-base">
          Find and read more your'll love, and keep track of the books you want
          to read. Be part of the word's largeest community of book lovers on
          Goodreads.
        </p>
      </div>
      <div ref={imagesRef} className="relative w-50 h-70 sm:w-60 sm:h-80 mr-20 md:w-70 md:h-100 lg:w-70 lg:h-100 md:mr-30">
        {bookCovers.map((cover: string, i: number) => (
          <img
            src={cover}
            alt={`cover-${i}`}
            key={i}
            className={`absolute w-50 h-70 sm:w-60 sm:h-80 md:w-70 md:h-100 object-cover rounded-2xl`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
