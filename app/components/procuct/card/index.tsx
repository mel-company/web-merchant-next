import { ProductType } from "@/app/types";
import Image from "next/image";
import React from "react";

const ProcuctCard = ({ data }: { data: ProductType }) => {
  return (
    <div className="w-full p-4">
      <Image
        src={data.photos[0].url}
        alt="product image"
        width={200}
        height={200}
      />
      <h2>{data.name}</h2>
      <p>{data.price}</p>
    </div>
  );
};

export default ProcuctCard;
