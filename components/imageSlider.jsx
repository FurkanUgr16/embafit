"use client"
import { useState, useEffect } from "react"

export default function ImageSlider({images, interval = 5000}){

    const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(slider);
  }, [length, interval]);

  if (!Array.isArray(images) || images.length === 0) return null;

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Controls (optional) */}
      <button
        onClick={() => setCurrent(current === 0 ? length - 1 : current - 1)}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={() => setCurrent((current + 1) % length)}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
}