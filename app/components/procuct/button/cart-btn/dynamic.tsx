import { useCartStore } from "@/app/store/cart";
import { ProductType } from "@/app/types";
import { getProductQty } from "@/app/utils/product-qty";

const DynamicCartBtn = ({ product }: { product: ProductType }) => {
  const { addProduct, removeProduct, products } = useCartStore();

  const { qty } = getProductQty({ products, productId: product.id });

  return (
    <div className="flex items-center gap-2 justify-between w-full">
      <button
        className="btn btn-outline"
        onClick={() => removeProduct(product.id)}
      >
        -
      </button>
      <span>{qty}</span>
      <button className="btn btn-primary" onClick={() => addProduct(product)}>
        +
      </button>
    </div>
  );
};

export default DynamicCartBtn;
