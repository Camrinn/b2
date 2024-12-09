import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery: React.FC = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  // Arrays of images for each section
  const cakeImages = [
    "/assets/cake.jpg",
    "/assets/cake2.jpg",
    "/assets/cake3.jpg",
    "/assets/cake4.jpg",
    "/assets/cake5.jpg",
    "/assets/cake6.jpg",
    "/assets/cake7.jpg",
    "/assets/cake8.jpg",
    "/assets/cake9.jpg",
    "/assets/cake10.jpg",
    "/assets/cake11.jpg",
    "/assets/cake12.jpg",
    "/assets/cake13.jpg",
    "/assets/cake14.jpg",
  ];
  const drinkImages = [
    "/assets/drink1.jpg",
    "/assets/drink2.jpg",
    "/assets/drink3.jpg",
    "/assets/drink4.jpg",
  ];
  const foodImages = [
    "/assets/sweet1.png",
    "/assets/sweet2.png",
    "/assets/sweet3.png",
    "/assets/sweet4.jpg",
    "/assets/sweet5.jpg",
    "/assets/sweet6.jpg",
    "/assets/sweet7.jpg",
    "/assets/sweet8.jpg",
    "/assets/sweet9.jpg",
    "/assets/sweet10.jpg",

  ];

  useEffect(() => {
    // GSAP Animation for gallery items
    const galleryItems = galleryRef.current?.querySelectorAll(".gallery-item");

    if (galleryItems) {
      gsap.fromTo(
        galleryItems,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        }
      );
    }
  }, []);

  const renderSection = (title: string, images: string[]) => (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item overflow-hidden rounded-lg shadow-lg relative group"
          >
            <img
              src={image}
              alt={`${title} Image ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-500 flex items-center justify-center">
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-4xl font-bold text-center mb-12">B2 Gallery</h1>
      <div ref={galleryRef}>
        {renderSection("Cakes", cakeImages)}
        {renderSection("Drinks", drinkImages)}
        {renderSection("Sweets", foodImages)}
      </div>
    </div>
  );
};

export default Gallery;
