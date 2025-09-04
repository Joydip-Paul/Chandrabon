import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full">
      <Image
        src="/img/02.jpg"
        width={1920}
        height={1080}
        alt="Picture of the author"
        className="w-full h-auto"
      />
    </div>
  );
};

export default Hero;
