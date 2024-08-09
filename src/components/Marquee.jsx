import { motion } from "framer-motion";
import React from "react";

function Marquee({ images, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-10 bg-white py-10  overflow-hidden max-sm:gap-5"
      >
        {images.map((elem, i) => (
          <img
            key={i}
            src={elem}
            alt=""
            className="w-40 flex-shrink-0 ml-5 mr-5 max-sm:w-32"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-10 bg-white py-10  overflow-hidden max-sm:gap-5"
      >
        {images.map((elem, i) => (
          <img
            key={i}
            src={elem}
            alt=""
            className="w-40 flex-shrink-0 ml-5 mr-5 max-sm:w-32"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
