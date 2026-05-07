import React, { useEffect, useState } from "react";

const StarsBg = () => {
  const [stars, setStars] = useState([]);
  const [redStars, setRedStars] = useState([]);
  const [glyphStars, setGlyphStars] = useState([]);

  useEffect(() => {
    const white = [];
    const red = [];
    const glyph = [];

    // ⭐ WHITE STARS
    for (let i = 0; i < 90; i++) {
      white.push({
        id: i,
        top: Math.random() * 200,
        left: Math.random() * 100,
        size: Math.random() * 2.2 + 0.5,
      });
    }

    // 🔴 RED STARS
    for (let i = 0; i < 120; i++) {
      red.push({
        id: i,
        top: Math.random() * 200,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
      });
    }

    // ✦ GLYPH STARS
    for (let i = 0; i < 30; i++) {
      glyph.push({
        id: i,
        top: Math.random() * 200,
        left: Math.random() * 100,
        size: Math.random() * 14 + 10,
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
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">

      {/* ⭐ WHITE STARS */}
      {stars.map((star) => (
        <div
          key={`w-${star.id}`}
          className="absolute bg-white rounded-full opacity-70"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            transform: `translateY(${scrollOffset * 0.2}px)`,
          }}
        />
      ))}

      {/* 🔴 RED STARS */}
      {redStars.map((star) => (
        <div
          key={`r-${star.id}`}
          className="absolute bg-[#00fff7] rounded-full opacity-80"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            transform: `translateY(${scrollOffset * 0.35}px)`,
            boxShadow: "0 0 6px rgba(255,0,51,0.6)",
          }}
        />
      ))}

      {/* ✦ GLYPH STARS */}
      {glyphStars.map((star) => (
        <div
          key={`g-${star.id}`}
          className="absolute text-white opacity-40 select-none"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            fontSize: `${star.size}px`,
            transform: `translateY(${scrollOffset * 0.15}px) rotate(${star.rotate}deg)`,
          }}
        >
          ✦
        </div>
      ))}

    </div>
  );
};

export default StarsBg;