"use client";

import { ProductType } from "@/app/types";
import DefaultCartBtn from "../procuct/button/cart-btn/default";
import Link from "next/link";
import { Star, ShieldCheck, Truck, RotateCcw } from "lucide-react";

interface ProductInfoProps {
  product: ProductType;
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Category & Rating */}
      <div className="flex items-center justify-between text-sm">
        <Link
          href={`/category/${product.category.slug}`}
          className="text-primary font-medium hover:underline bg-primary/10 px-3 py-1 rounded-full"
        >
          {product.category.name}
        </Link>
        <div className="flex items-center gap-1 text-orange-400">
          <Star className="fill-orange-400 w-4 h-4" />
          <span className="font-bold text-base-content/80">4.8</span>
          <span className="text-base-content/40 text-xs">(24 تقييم)</span>
        </div>
      </div>

      {/* Title & Price */}
      <div className="space-y-2">
        <h1 className="text-2xl lg:text-4xl font-bold leading-tight text-base-content">
          {product.name}
        </h1>
        <div className="text-3xl font-bold text-primary">
          {product.price}{" "}
          <span className="text-base font-normal text-base-content/60">
            ر.س
          </span>
        </div>
      </div>

      <div className="divider my-0"></div>

      {/* Description */}
      <div className="prose prose-sm lg:prose-base text-base-content/80 leading-relaxed">
        <h3 className="text-lg font-bold text-base-content mb-2">الوصف</h3>
        <p>{product.description}</p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-2 gap-4 py-4">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-base-200/50">
          <Truck className="w-5 h-5 text-primary" />
          <span className="text-xs font-medium">شحن سريع ومجاني</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-base-200/50">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <span className="text-xs font-medium">ضمان الجودة</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-base-200/50">
          <RotateCcw className="w-5 h-5 text-primary" />
          <span className="text-xs font-medium">استرجاع سهل</span>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-auto pt-6 flex flex-col gap-3 sticky bottom-4 z-10 bg-base-100 lg:static lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none rounded-xl border lg:border-none border-base-200">
        <DefaultCartBtn product={product} />
        <p className="text-center text-xs text-base-content/50 mt-2">
          جميع الأسعار شاملة الضريبة
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
