"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "/img/hero1.jpeg",
    title: "Elegant Monipuri Sharee",
    subtitle: "Handwoven with Authentic Manipuri Craft",
    button: "Shop Now",
  },
  {
    id: 2,
    image: "/img/hero2.png",
    title: "Exclusive Designer Collection",
    subtitle: "Where Heritage Meets Modern Elegance",
    button: "Explore",
  },
  {
    id: 3,
    image: "/img/hero3.png",
    title: "Festive Season Offers",
    subtitle: "Celebrate Culture with Authentic Weaves",
    button: "Grab Now",
  },
];


export default function Hero() {
  return (
    <div className="w-full">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="w-full h-[400px] sm:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[400px] sm:h-[600px]">
              {/* Background image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                <h2 className="text-4xl md:text-6xl mb-4 animate-fadeInUp">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl mb-6 font-300 animate-fadeInUp delay-200">
                  {slide.subtitle}
                </p>

                <Link href="/products">
                  <button className="main-btn px-14 py-4">
                    {slide.button}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
