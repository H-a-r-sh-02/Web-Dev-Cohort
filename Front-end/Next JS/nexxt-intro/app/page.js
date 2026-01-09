"use client";
import React, { useState } from "react";

const page = () => {
  const [ num, setNum ] = useState(0);

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold mb-5">{num}</h1>
      <button onClick={() => setNum(num+1)} className="px-2 py-1 bg-blue-600 rounded">Increase</button>
    </div>
  );
};

export default page;
