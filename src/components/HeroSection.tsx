import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Link } from "react-router-dom"; // Import Link for navigation
import SocialIcons from "./SocialIcons";
import About from "./About";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Home: React.FC = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Headline animation
    gsap.fromTo(
      ".headline-text",
      { opacity: 0, y: 50, rotateX: 90 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 2.5,
        ease: "power4.out",
        stagger: 0.2,
      }
    );

    // Bio text animation
    gsap.fromTo(
      bioRef.current,
      { text: "" },
      {
        text: "Welcome to B2 Cafe—Philadelphia's cozy spot for great coffee, delicious pastries, and a vibrant community. We pride ourselves on serving high-quality, sustainably sourced coffee, hand-crafted with care. Stop by for a fresh brew or grab your favorite snack to go!",
        duration: 3,
        ease: "power1.out",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <main id="home" className="relative w-full">
      {/* Hero Section with Video */}
      <section className="relative min-h-screen w-full">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/coffeevid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative flex flex-col justify-center items-center h-full w-full px-6 md:px-12 space-y-12">
          {/* Headline Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mt-12 md:mt-32 mb-20 text-center md:text-left">
            <h1
              ref={headlineRef}
              className="text-4xl sm:text-5xl md:text-6xl text-white font-bold tracking-wide mt-6 md:mt-12"
              style={{ fontFamily: "'Bebas Neue'" }}
            >
              <span className="headline-text block">B2 CAFE</span>
            </h1>
          </div>

          {/* "View Menu" Button */}
          <div className="mt-8">
            <Link to="/menu">
              <button
                className="px-8 py-4 rounded-full bg-[#e18434] text-lg font-semibold text-white hover:bg-[#d5732d] transition-colors duration-300"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                View Menu
              </button>
            </Link>
          </div>

          {/* Social & Bio Section */}
          <div className="flex flex-col md:flex-row w-full justify-between items-center gap-8 mt-8 md:mt-24 px-6">
            <div className="flex flex-col items-center md:items-start gap-4">
              <p className="text-lg font-semibold text-white">Check Us Out On</p>
              <SocialIcons />
            </div>
            <div className="flex flex-col items-center md:items-start gap-6 max-w-md text-center md:text-left">
              <p
                ref={bioRef}
                className="text-sm md:text-base text-white leading-relaxed bio-text"
                style={{ fontFamily: "'Lato', sans-serif" }}
              ></p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="relative w-full py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/coffee2.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <About />
        </div>
      </section>
    </main>
  );
};

export default Home;
