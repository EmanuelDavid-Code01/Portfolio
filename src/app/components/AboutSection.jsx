import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/about-image.png" width={500} height={500} alt="About Image" />
        <div>
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, nam
            laborum odio culpa alias sed eligendi, eos tempora repudiandae
            temporibus delectus placeat, animi dolore expedita incidunt nihil
            sapiente necessitatibus harum?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
