"use client"
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const params = useParams();

  return (
    <div>
      <h6>{params.id} Collection</h6>
    </div>
  );
};

export default page;
