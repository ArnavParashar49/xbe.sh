import React from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const paths = [
    "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
    "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
    "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
    "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
  ];

  return (
    <div
      className={cn(
        "absolute h-full w-full inset-0 [mask-image:radial-gradient(900px_at_center,white,transparent)] pointer-events-none",
        className
      )}
    >
      <svg
        className="absolute h-full w-full inset-0 pointer-events-none"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.8">
          {paths.map((path, index) => (
            <motion.path
              key={`path-${index}`}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="1"
              strokeWidth="2"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: Math.random() * 2,
              }}
            />
          ))}
        </g>
        <defs>
          {paths.map((_, index) => (
            <linearGradient
              key={`gradient-${index}`}
              id={`linearGradient-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop stopColor="#8B5CF6" stopOpacity="0" />
              <stop offset="20%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#EC4899" stopOpacity="1" />
              <stop offset="80%" stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
};
