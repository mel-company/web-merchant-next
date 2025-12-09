import { ProductType } from "@/app/types";
import Image from "next/image";
import ProductCartBtn from "../button/cart-btn";

const ProcuctCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="group w-full flex flex-col gap-4 p-4 rounded-3xl bg-base-200 border border-base-300 hover:border-secondary/30 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/5">
      <div className="w-full relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary/10">
        <Image
          src={product.photos[0].url}
          alt={product.name}
          width={600}
          height={800}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="line-clamp-1 text-lg font-bold text-base-content group-hover:text-secondary transition-colors">
          {product.name}
        </h2>

        <div className="flex items-center justify-between mt-1">
          <p className="text-xl font-bold text-primary flex items-center gap-1.5">
            <span>{product.price.toLocaleString()}</span>
            <span className="text-sm font-medium text-base-content/70 pt-1">
              د.ع
            </span>
          </p>
          <div className="opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
            <ProductCartBtn product={product} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcuctCard;
