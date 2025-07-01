import { nanoid } from "nanoid";
import React, { createContext, useState } from "react";

export const todoContext = createContext(null);

const Wrapper = (props) => {
  // console.log(props);
  const [todo, settodo] = useState([
    {
      id: nanoid(),
      title: "kaam krle",
      isCompleted: false,
    },
  ]);

  return (
    <todoContext.Provider value={[todo, settodo]}>
      {props.children}
    </todoContext.Provider>
  );
};

export default Wrapper;
