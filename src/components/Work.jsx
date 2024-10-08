import React, { useState } from "react";

import { motion, useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";

const Work = () => {
  const images = [
    {
      url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15-p-500.webp",
      top: "50%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png",
      top: "52%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp",
      top: "49%",
      left: "46%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11-p-500.jpg",
      top: "54%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202-p-500.png",
      top: "51%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cc29f414c45ee4f46aa3ba_01-p-500.jpg",
      top: "60%",
      left: "58%",
      isActive: false,
    },
  ];

  const [imgs, setimgs] = useState(images);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const s = Math.floor(latest * 100);

    for (var i = 0; i <= 6; i++) {
      if (s == 0) {
        setimgs((prev) => prev.map((e, i) => ({ ...e, isActive: false })));
      }
      if (s == i) {
        setimgs((prev) =>
          prev.map((e, i) =>
            i < s ? { ...e, isActive: true } : { ...e, isActive: false }
          )
        );
      }
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="w-2/3 mx-auto relative  max-[600px]:w-full mt-10 px-5">
        <h1 className="text-[25vw] leading-none tracking-tight font-thicker select-none  max-[600px]:text-[35vw]">
          Work
        </h1>
        <div className="absolute w-full h-full top-[0] left-0  max-[600px]:top-[100%]">
          {imgs.map(
            (elem, i) =>
              elem.isActive && (
                <img
                  key={i}
                  className="absolute -translate-x-[50%] -translate-y-[50%] w-72 max-[600px]:w-44"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.url}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;
