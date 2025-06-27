"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Arya Kapoor",
    title: "Design Lead @PixelCraft",
    text: "They turned our vision into an award-winning product. Sleek, intuitive and breathtakingly polished.",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Neel Agrawal",
    title: "CEO @CodeVerse",
    text: "Working with them was like working with the future. Every pixel had a purpose.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Jiya Nair",
    title: "PM @ZenAI",
    text: "They crafted UI so natural, our users thought we had read their minds.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  ...Array(9).fill({
    name: "Tanish Rao",
    title: "Founder @MotionLabs",
    text: "Animations, feedback loops, responsiveness — it all felt magical and frictionless.",
    avatar: "https://i.pravatar.cc/150?img=4",
  }),
];

export default function ClientReview() {
  const [angle, setAngle] = useState(0);
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const radius = 250;

  const handlePointerDown = (e) => {
    isDragging.current = true;
    lastX.current = e.clientX || e.touches?.[0]?.clientX;
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    const x = e.clientX || e.touches?.[0]?.clientX;
    const delta = x - lastX.current;
    lastX.current = x;
    setAngle((prev) => prev + delta * 0.4);
  };

  const handlePointerUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging.current && !isMobile) {
        setAngle((prev) => prev + 0.3);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("touchend", handlePointerUp);
    return () => {
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-[#0c0c1c] flex items-center justify-center px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl w-full">
        {/* LEFT TEXT */}
        <div className="flex-1 text-white text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            What our <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
              clients say
            </span>
          </h2>
          <p className="mt-4 text-white/70 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Hear directly from the people we've helped bring ideas to life with stunning design and seamless experiences.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 w-full">
          {isMobile ? (
            // 🌐 MOBILE - SINGLE CARD + ARROWS
            <div className="relative w-full flex items-center justify-center">
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 z-10"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <motion.div
                key={currentIndex}
                className="w-full max-w-[280px] mx-auto bg-white/5 backdrop-blur rounded-2xl p-5 border border-white/10 text-white text-center transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <div className="flex flex-col items-center gap-3 mb-3">
                  <img
                    src={testimonials[currentIndex].avatar}
                    className="w-12 h-12 rounded-full border border-white/20"
                    alt={testimonials[currentIndex].name}
                  />
                  <div>
                    <p className="font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-xs text-white/50">{testimonials[currentIndex].title}</p>
                  </div>
                </div>
                <p className="text-sm text-white/80">
                  {testimonials[currentIndex].text}
                </p>
              </motion.div>

              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 z-10"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          ) : (
            // 💻 DESKTOP - 3D CIRCULAR LAYOUT
            <div
              className="relative h-[600px] w-full max-w-[600px] cursor-grab active:cursor-grabbing"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onTouchStart={handlePointerDown}
              onTouchMove={handlePointerMove}
            >
              {testimonials.map((item, i) => {
                const a = ((360 / testimonials.length) * i + angle) % 360;
                const rad = (a * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                const scale = 1 + 0.5 * Math.cos(rad);
                const opacity = 0.4 + 0.6 * Math.cos(rad);
                const zIndex = Math.round(100 + 100 * Math.cos(rad));

                return (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-[200px] h-[220px] rounded-2xl backdrop-blur-lg p-4 border border-white/10 shadow-2xl text-white transition-transform duration-300"
                    style={{
                      transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
                      zIndex,
                      opacity,
                      background: "rgba(255,255,255,0.06)",
                      borderImage: "linear-gradient(135deg, #58CFFB, #FFB8D1) 1",
                      borderWidth: "2px",
                      borderStyle: "solid",
                    }}
                  >
                    <div className="flex gap-3 items-center mb-3">
                      <img
                        src={item.avatar}
                        className="w-10 h-10 rounded-full border border-white/30"
                        alt={item.name}
                      />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-xs text-white/50">{item.title}</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-white/80">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
