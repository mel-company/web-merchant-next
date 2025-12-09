import { ProductType } from "@/app/types";

export const getProductQty = ({
  products,
  productId,
}: {
  products: (ProductType & { qty: number })[];
  productId: string;
}) => {
  const existing = products.find((p) => p?.id === productId);
  const qty = existing ? existing.qty : 0;
  return { qty };
};
