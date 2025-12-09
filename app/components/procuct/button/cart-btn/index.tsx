import React from "react";
import { useCartStore } from "@/app/store/cart";
import { ProductType } from "@/app/types";
import DefaultCartBtn from "./default";
import DynamicCartBtn from "./dynamic";
import { getProductQty } from "@/app/utils/product-qty";

const ProductCartBtn = ({ product }: { product: ProductType }) => {
  const { products } = useCartStore();

  const { qty } = getProductQty({ products, productId: product.id });

  if (!qty) return <DefaultCartBtn product={product} />;

  return <DynamicCartBtn product={product} />;
};

export default ProductCartBtn;
