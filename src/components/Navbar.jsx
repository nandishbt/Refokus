import React, { useState } from "react";
import Button from "./Button";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [menu, setmenu] = useState("Home");

  return (
    <div className="w-2/3 mx-auto py-12 h-10 flex justify-between items-center mb-10 max-[600px]:w-full px-5 ">
      <div className="flex">
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" />

        <div className="ml-32 flex gap-20  max-[600px]:hidden">
          {["Home", "Work", "About", "News", "Careers"].map((e, i) => (
            <a
              onClick={() => setmenu(e)}
              key={i}
              className="text-zinc-100  flex  items-center gap-1 text-[.9vw] hover:cursor-pointer"
            >
              <span
                className={
                  menu == e
                    ? `inline-block w-2 h-2 rounded-full bg-green-700`
                    : `inline-block w-2 h-2 rounded-full`
                }
              ></span>
              {e}
            </a>
          ))}
        </div>


       

       
      </div>

      

      <div className="btn max-[600px]:hidden">
        <Button name="Start a project" />
      </div>


      <div className="hidden max-[600px]:inline-block">

      <IoMdMenu />
      </div>

      

      
    </div>
  );
};

export default Navbar;
