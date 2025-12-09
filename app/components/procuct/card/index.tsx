import { ProductType } from "@/app/types";
import Image from "next/image";
import ProductCartBtn from "../button/cart-btn";

const ProcuctCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full skeleton aspect-square overflow-hidden rounded-2xl">
        <Image
          src={product.photos[0].url}
          alt="product image"
          width={600}
          height={600}
          className="w-full h-full hover:scale-110 transition-all duration-500 object-cover"
        />
      </div>
      <h2 className="line-clamp-2 text-xl">{product.name}</h2>
      <p className="text-xl font-bold flex items-center gap-2">
        <span>{product.price}</span>
        <span className="text-slate-500 font-normal">د.ع</span>
      </p>
      <ProductCartBtn product={product} />
    </div>
  );
};

export default ProcuctCard;
