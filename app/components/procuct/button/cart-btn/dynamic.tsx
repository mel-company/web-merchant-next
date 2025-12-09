import { useCartStore } from "@/app/store/cart";
import { ProductType } from "@/app/types";
import { getProductQty } from "@/app/utils/product-qty";

const DynamicCartBtn = ({ product }: { product: ProductType }) => {
  const { addProduct, removeProduct, products } = useCartStore();

  const { qty } = getProductQty({ products, productId: product.id });

  return (
    <button onClick={() => addProduct(product)} className="btn btn-primary">
      <button onClick={() => removeProduct(product)}></button>
      <span>{qty}</span>
      <button onClick={() => addProduct(product)}></button>
    </button>
  );
};

export default DynamicCartBtn;
