import React, { useEffect, useState } from "react";

const StarsBg = () => {
  const [stars, setStars] = useState([]);
  const [redStars, setRedStars] = useState([]);
  const [glyphStars, setGlyphStars] = useState([]);

  useEffect(() => {
    const white = [];
    const red = [];
    const glyph = [];

    // ⭐ PIXEL STARS
    for (let i = 0; i < 190; i++) {
      white.push({
        id: i,
        top: Math.random() * 200,
        left: Math.random() * 100,
        size: Math.random() * 4 + 2, // BIGGER
      });
    }

    // 🔵 GLOW PIXELS
    for (let i = 0; i < 120; i++) {
      red.push({
        id: i,
        top: Math.random() * 200,
        left: Math.random() * 100,
        size: Math.random() * 5 + 3, // BIGGER
      });
    }

    // ✦ GLYPH STARS
    for (let i = 0; i < 70; i++) {
      glyph.push({
        id: i,
        top: Math.random() * 200,
        left: Math.random() * 100,
        size: Math.random() * 18 + 12,
        rotate: Math.random() * 360,
      });
    }

    setStars(white);
    setRedStars(red);
    setGlyphStars(glyph);
  }, []);

  const scrollOffset =
    typeof window !== "undefined" ? window.scrollY : 0;

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden bg-white">

      {/* TERMINAL SCANLINES */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to bottom,
              rgba(56,189,248,0.25) 0px,
              rgba(56,189,248,0.25) 3px,
              transparent 3px,
              transparent 10px
            )
          `,
        }}
      />

      {/* ⭐ SMALL PIXEL STARS */}
      {stars.map((star) => (
        <div
          key={`w-${star.id}`}
          className="absolute bg-sky-400 opacity-70"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: "1px", // SQUARED
            transform: `translateY(${scrollOffset * 0.2}px)`,
            boxShadow: "0 0 6px rgba(56,189,248,0.8)",
          }}
        />
      ))}

      {/* 🔵 GLOW PIXELS */}
      {redStars.map((star) => (
        <div
          key={`r-${star.id}`}
          className="absolute bg-sky-400 opacity-90"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            borderRadius: "1px", // SQUARED
            transform: `translateY(${scrollOffset * 0.35}px)`,
            boxShadow: `
              0 0 10px rgba(56,189,248,1),
              0 0 20px rgba(56,189,248,0.7)
            `,
          }}
        />
      ))}

      {/* ✦ GLYPH STARS */}
      {glyphStars.map((star) => (
        <div
          key={`g-${star.id}`}
          className="absolute text-sky-400 opacity-50 select-none"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            fontSize: `${star.size}px`,
            transform: `translateY(${scrollOffset * 0.15}px) rotate(${star.rotate}deg)`,
            textShadow: `
              0 0 10px rgba(56,189,248,0.9),
              0 0 20px rgba(56,189,248,0.5)
            `,
          }}
        >
          ✦
        </div>
      ))}
    </div>
  );
};

export default StarsBg;