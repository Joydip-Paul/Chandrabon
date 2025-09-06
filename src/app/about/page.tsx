import Image from "next/image";
import React from "react";

const aboutImages = [
  "/img/about/story-1.jpeg",
  "/img/about/story-2.jpeg",
  "/img/about/story-3.jpeg",
  "/img/about/story-1.jpeg"
];

export default function Page() {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative w-full h-[300px]">
        <Image
          src="/img/03.jpg" // banner image from your collection
          alt="About Chandrabon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white">
            About Us
          </h1>
        </div>
      </div>

      {/* About content */}
      <section className="container py-12">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed mb-8">
          Chandrabon is dedicated to bringing you authentic{" "}
          <span className="font-semibold">Manipuri Sarees</span>, directly from
          the skilled hands of our weavers. We work closely with local artisans
          to ensure that every saree reflects cultural heritage, craftsmanship,
          and sustainable practices. Our goal is not only to provide you with
          beautiful attire, but also to tell the story of how each piece is
          made, from loom to your wardrobe.
        </p>

        {/* Collage Style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* First big image */}
          <div className="col-span-2 row-span-2 relative h-[400px]">
            <Image
              src={aboutImages[0]}
              alt="Step 1"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Next images smaller */}
          <div className="relative h-[190px]">
            <Image
              src={aboutImages[1]}
              alt="Step 2"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="relative h-[190px]">
            <Image
              src={aboutImages[2]}
              alt="Step 3"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>

             <div className="relative h-[190px]">
            <Image
              src={aboutImages[1]}
              alt="Step 2"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="relative h-[190px]">
            <Image
              src={aboutImages[3]}
              alt="Step 3"
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Authority note */}
        <div className="mt-12 bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-3">Our Commitment</h3>
          <p className="text-gray-700 leading-relaxed">
            We ensure that every saree comes from verified weavers who uphold
            traditional methods passed down through generations. By purchasing
            from us, you are supporting local artisans, preserving Manipuri
            heritage, and contributing to fair trade practices.
          </p>
        </div>
      </section>
    </div>
  );
}
