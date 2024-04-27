import { motion, Variants, useInView } from "framer-motion";
import React, { useRef } from "react";

interface Props {
  emoji: string;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function Card({ emoji }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const cardRef = useRef(null);

  return (
    <div ref={ref} style={{ height: "100vh", position: "relative" }}>
      <motion.div
        className="card-container"
        initial="offscreen"
        animate={isInView ? "onscreen" : "offscreen"}
        variants={cardVariants}
        style={{ position: "absolute" }}
      >
        <div className="splash" />
        <motion.div
          className="card"
          variants={cardVariants}
          ref={cardRef}
          style={{ position: "absolute" }}
        >
          {emoji}
        </motion.div>
      </motion.div>
    </div>
  );
}

const food: [string][] = [
  ["🍅"],
  ["🍊"],
  ["🍋"],
  ["🍐"],
  ["🍏"],
  ["🫐"],
  ["🍆"],
  ["🍇"],
];

export default function App() {
  return (
    <div style={{ overflowY: "scroll", height: "100vh" }}>
      {food.map(([emoji]) => (
        <Card emoji={emoji} key={emoji} />
      ))}
    </div>
  );
}
