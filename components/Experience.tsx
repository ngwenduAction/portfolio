"use client";
import { workExperience } from "@/data";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/MovingBorders";
import Image from "next/image";

const Experience = () => {
  const [durations, setDurations] = useState<number[]>([]);

  useEffect(() => {
    setDurations(
      workExperience.map(() => Math.floor(Math.random() * 10000) + 10000)
    );
  }, []);

  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        My<span className="text-purple"> work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card, index) => (
          <Button
            key={card.id}
            duration={durations[index] || 15000}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.title}
                width={128} // set your desired size
                height={128}
                className="object-contain"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
