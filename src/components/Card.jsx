import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

function Card({ width , heading, top, main,para,hover}) {
  return (
    <div className={ hover? `${width} h-[50vh]  bg-zinc-700  hover:bg-violet-500 p-5 flex flex-col justify-between` : `${width} h-[50vh]  bg-zinc-700  p-5 flex flex-col justify-between`}>
      <div className="upper">
        <div className="flex items-center justify-between">
          <h2>{top}</h2>
          <HiArrowLongRight />
        </div>

        <h1 className="text-5xl font-medium mt-10">{heading}</h1>
      </div>

      <div className="lower">
       {main &&  <><h1 className="text-6xl font-semibold">{main}</h1>
        <button className=" border border-zinc-200 rounded-full px-5 py-3 mt-4">Contact Us</button></>}


        {para && <p className="text-zinc-500">{para} </p>}

      </div>
    </div>
  );
}

export default Card;
