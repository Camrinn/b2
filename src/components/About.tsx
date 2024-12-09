import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  // Dummy reviews data
  const reviews = [
    {
      name: "Lillian M.",
      location: "Franklin Township, Indianapolis, IN",
      date: "Jul 26, 2022",
      stars: 5,
      review:
        "It's AWESOME that they have dairy-free cream cheese here! So nice to have the option not to resort to hummus, lol. The person who took my order was lovely. The mural is great, and the outdoor seating also looked nice.",
    },
    {
      name: "Lauren L.",
      location: "PA, PA",
      date: "Oct 20, 2024",
      stars: 5,
      review:
        "Thai Milk Tea was very good! The staff were very nice and quick with my order. The cafe was clean and cozy. Can't wait to come back!",
    },
    {
      name: "Mimi Z.",
      location: "Philadelphia, PA",
      date: "Jul 28, 2015",
      stars: 5,
      review:
        "I absolutely love to come here every single day of the week. The staff is incredibly nice and fast even when there's a long line. Everything is always fresh and tastes great. Get the tomato, basil, mozz on a baguette!",
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top 70%", // Starts animation when top of section reaches 80% of viewport
        end: "bottom 70%", // Ends when bottom of section reaches 20% of viewport
        scrub: 0.5,
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      ".about-title, .review-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1.5 }
    );
  }, []);

  return (
    <>
      <section
        id="about"
        ref={aboutRef}
        className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/blackbbg.jpg')",
        }}
      >
        <div className="relative z-10 w-full max-w-6xl px-8">
          {/* Section Title */}
          <h1
            className="text-5xl font-extrabold tracking-wide about-title text-[#A1A17F] text-center mb-8"
            style={{ fontFamily: "'Bebas Neue'" }}
          >
            What People Say About Us
          </h1>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="review-card bg-[#1c1c1c] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Reviewer Info */}
                <div className="flex items-center mb-4">
                  <img
                    src={`https://via.placeholder.com/50?text=${review.name[0]}`}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-400">{review.location}</p>
                  </div>
                </div>
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {Array(review.stars)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-[#e18434] text-lg">
                        ★
                      </span>
                    ))}
                </div>
                {/* Review Content */}
                <p className="text-sm text-gray-300">{review.review}</p>
                <p className="text-xs text-gray-500 mt-4">{review.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
