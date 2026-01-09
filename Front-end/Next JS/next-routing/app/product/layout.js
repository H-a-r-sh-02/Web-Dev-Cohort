import React from "react";
import image from "../../public/car.avif";
import Image from "next/image";

const layout = ({ children }) => {
  return (
    <div>
      {children} Only Special
      <Image height={200} width={200} src={image} />
    </div>
  );
};

export default layout;
