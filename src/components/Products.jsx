import React from "react";
import Product from "./Product";

const Products = () => {
  const products = [
    {
      title: "Airtel",
      desc: "lorem ipsum dolor sit am id, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id velit sed diam vel du  .",
      btn1: "Get Started",
      btn2: false
     
    },
    {
      title: "Idea",
      desc: "lorem ipsum dolor sit am id, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id velit sed diam vel du  .",
      btn1: "Get Started",
      btn2: false
    
    },
    {
      title: "Vodafone",
      desc: "lorem ipsum dolor sit am id, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id velit sed diam vel du  .",
      btn1: "Get Started",
      btn2: "Case Study"
     
    },
    {
      title: "Jio",
      desc: "lorem ipsum dolor sit am id, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id velit sed diam vel du  .",
      btn1: "Case Study",
      btn2: "'Live Website",
     
    },
    {
      title: "Docomo",
      desc: "lorem ipsum dolor sit am id, consectetur adipiscing elit, sed diam nonumy eirmod tempor invid id velit sed diam vel du  .",
      btn1: "Case Study",
      btn2: "Live Website"
     
    },
  ];
  return <div className="mt-32">
        {products.map((elem,i)=><Product  key={i} data = {elem}/>)}
    
  </div>;
};

export default Products;
