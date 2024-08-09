import React from "react";
import Product from "./Product";

const Products = () => {
  const products = [
    {
      title: "Airtel",
      desc: "lorem ipsum dolor sit am id, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id velit sed diam vel du  .",
      btn1: "Get Started",
      btn2: false,
      url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/650c5f12d26da475b2fd6b88_15-p-500.webp"
     
    },
    {
      title: "Idea",
      desc: "lorem ipsum dolor sit am id, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id velit sed diam vel du  .",
      btn1: "Get Started",
      btn2: false,
      url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b413200259aa2289224594_Frame%204-p-500.png"
    
    },
    {
      title: "Vodafone",
      desc: "lorem ipsum dolor sit am id, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id velit sed diam vel du  .",
      btn1: "Get Started",
      btn2: "Case Study",
      url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65f112dec7a59534cca51a3d_portfolioCard_cc-01-p-500.webp"
     
    },
    {
      title: "Jio",
      desc: "lorem ipsum dolor sit am id, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id velit sed diam vel du  .",
      btn1: "Case Study",
      btn2: "'Live Website",
      url:"https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/64cd6ec7666ac6009cfcb7db_11-p-500.jpg"
     
    },
    {
      title: "Docomo",
      desc: "lorem ipsum dolor sit am id, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id velit sed diam vel du  .",
      btn1: "Case Study",
      btn2: "Live Website",
      url: "https://cdn.prod.website-files.com/6334198f239547f2fccd84c1/65b415e16156819899272250_Frame%202-p-500.png"
     
    },
  ];
  return <div className="mt-32 max-[600px]:mt-20">
        {products.map((elem,i)=><Product  key={i} data = {elem} />)}
    
  </div>;
};

export default Products;
