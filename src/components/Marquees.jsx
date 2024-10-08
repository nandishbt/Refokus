import React from "react";
import Marquee from "./Marquee";

const Marquees = () => {
  const arr = [
    [
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6666ed38989e70633b7658b5_Singularity_logo.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2ddb_64868958b0d3ba04534cc3b3_Silvr_logo_black.png",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d76e013990180ea2be31_jungle-logo-black.svg",
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b997d53302df1b9072_633c148ad1bb7f022754664e_626be03929598bb074de4cc1_Remind.webp",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg",
    ],

    [
      "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab22d_633c148a8b25dcfcd2e387b2_61957e512832dbf5efe8cdc6_mural.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bb11b6479ac4aa8cf9_633c14897f94fe831be72dad_61957e2b14f8c6babe1e0a4c_doxel.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6666ed38989e70633b7658b5_Singularity_logo.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aab7dc661744003a210_logo-black.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b5306b05c2b704224d_65b2ca264ed8d89bad9b331c_Logo%2520Black%25201.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
      " https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2ddb_64868958b0d3ba04534cc3b3_Silvr_logo_black.png",
      
    ],
  ];
  return (
    <div className="mt-32">
      {arr.map((e,i) => (
        <Marquee key={i}  images = {e}  direction = {i==0 ?'left':'right'} />
      ))}
      
    </div>
  );
};

export default Marquees;
