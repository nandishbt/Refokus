import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-2/3 mx-auto py-20 px-10 flex items-center justify-between gap-1  mt-32">
      <Card
        width={"w-[33%]"}
        top="Up Next:Culture"
        heading="Who we are"
        para="Explore what drives our team"
        main={false}
        hover={false}
        
      />
      <Card
        width={"w-[66%]"}
        top="Get in touch"
        heading="Lets get it together "
        main="Start a project"
        para={false}
        hover={true}
      />
    </div>
  );
}

export default Cards;
