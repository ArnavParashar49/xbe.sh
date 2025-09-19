import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  
  useEffect(() => {
    if (scope.current) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
        }
      );
    }
  }, [scope.current, animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="text-center">
        {wordsArray.map((word, idx) => {
          // Apply gradient to "revolutionary agentic IDE"
          const isGradientWord = idx >= 4; // "revolutionary agentic IDE" starts at index 4
          return (
            <motion.span
              key={word + idx}
              className={`inline-block opacity-0 mr-3 md:mr-4 ${
                isGradientWord ? "text-gradient" : "text-white"
              }`}
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={`font-bold text-center ${className || ""}`}>
      <div className="my-4">
        <div className="text-center leading-tight tracking-tight">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};