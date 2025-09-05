import Image from "next/image";
import React from "react";
import heroBanner from "../assets/img/02.jpg";

const Hero = () => {
  return (
    <div className="w-full">
      <Image src={heroBanner} alt="Hero banner" placeholder="blur" quality={100}/>
    </div>
  );
};

export default Hero;
