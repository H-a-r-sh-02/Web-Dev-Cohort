import React from "react";
import { useMemo } from "react";
import { useState } from "react";

const UseMemo = () => {
    const [add, setadd] = useState(0);
    const [sub, setsub] = useState(99);
    
    const product = useMemo(() => {
        console.log("Calculating...");
        return add * 2;
    }, [add]);

  return (
    <div className="">
        <h1 className="text-5xl mb-3">{product}</h1>
      <button onClick={() => setadd(add + 1)} className="px-3 py-2 font-black bg-green-400 rounded text-3xl">+</button>
      <span className="ml-4 text-4xl">{add}</span>
      <br />
      <br />
      <button onClick={() => setsub(sub - 1)} className="py-2 px-4 font-black bg-red-400 rounded text-3xl">-</button>
      <span className="ml-4 text-4xl">{sub}</span>
    </div>
  );
};

export default UseMemo;
