import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface SliderProps {
  sliders: string[];
  interval?: number;
}

const HeroSlider: React.FC<SliderProps> = ({
  sliders,
  interval = 3000,
}) => {
  const [current, setCurrent] = useState(0);
  const autoPlayTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
  }, [sliders.length]);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? sliders.length - 1 : prev - 1));
  }, [sliders.length]);

  const resetAutoPlayTimer = useCallback(() => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    autoPlayTimerRef.current = setInterval(nextSlide, interval);
  }, [interval, nextSlide]);

  const handleNextClick = () => {
    nextSlide();
    resetAutoPlayTimer();
  };

  const handlePrevClick = () => {
    prevSlide();
    resetAutoPlayTimer();
  };

  const handleDotClick = (index: number) => {
    setCurrent(index);
    resetAutoPlayTimer();
  };

  useEffect(() => {
    resetAutoPlayTimer();
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [resetAutoPlayTimer]);

  return (
    <div className="col-span-10 relative h-full w-full group overflow-hidden rounded-lg">
      <div
        className="w-full h-full flex flex-col flex-wrap"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {sliders.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
      <div className="w-full h-full absolute left-0 top-0 flex">
        <button
          className="absolute left-0 top-[50%] -translate-y-1/2 translate-x-[-1rem] opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition w-fit p-1 bg-white shadow-md rounded-full"
          onClick={handlePrevClick}
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className="absolute right-0 top-[50%] -translate-y-1/2 translate-x-[1rem] opacity-0 group-hover:opacity-100 group-hover:translate-x-[-6px] transition w-fit p-1 bg-white shadow-md rounded-full"
          onClick={handleNextClick}
        >
          <ChevronRight size={24} />
        </button>
      </div>
      <div className="w-full absolute left-5 bottom-4 flex gap-1">
        {sliders.map((_, index) => (
          <button
            key={index}
            className={clsx(
              "border-t-4 cursor-pointer transition border-neutral-500 w-8",
              current === index && "border-neutral-700 w-12"
            )}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
