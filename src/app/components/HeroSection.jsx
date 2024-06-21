//01:20 min
"use client";
import React from "react";
import Image from "next/image";
// incio de import de animaciones
import { TypeAnimation } from "react-type-animation";
// final del import de animaciones npm anteriormente instaladas


const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a55b4] via-[#1dcffd] to-[#45fce1]">
              Hola, Soy {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Emanuel Garcia",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: ".9em", display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            officiis nulla labore itaque nesciunt dolorum commodi voluptatum?.
          </p>
          {/* Botones dentro del div 2cundario */}
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-[#3a55b4] via-[#1dcffd] to-[#45fce1] hover:bg-slate-200 text-white">
              Sobre mi
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-[#3a55b4] via-[#1dcffd] to-[#45fce1] hover:bg-slate-800 text-white mt-3">
              <span className="block bg-[#121212] rounded-full px-5 py-2 hover:bg-salte-800  ">
                Descargar CV
              </span>
            </button>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;
