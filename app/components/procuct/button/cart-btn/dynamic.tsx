import { useCartStore } from "@/app/store/cart";
import { ProductType } from "@/app/types";
import { getProductQty } from "@/app/utils/product-qty";

const DynamicCartBtn = ({ product }: { product: ProductType }) => {
  const { addProduct, removeProduct, products } = useCartStore();

  const { qty } = getProductQty({ products, productId: product.id });

  return (
    <div className="flex items-center gap-2 justify-between w-full bg-secondary/10 rounded-full p-1">
      <button
        className="btn btn-sm btn-circle bg-base-100 text-base-content hover:text-error border-none shadow-sm hover:shadow-md h-8 w-8 min-h-0"
        onClick={() => removeProduct(product.id)}
      >
        -
      </button>
      <span className="font-bold text-lg w-6 text-center">{qty}</span>
      <button
        className="btn btn-sm btn-circle btn-primary text-primary-content hover:bg-primary/90 border-none shadow-sm hover:shadow-md h-8 w-8 min-h-0"
        onClick={() => addProduct(product)}
      >
        +
      </button>
    </div>
  );
};

export default DynamicCartBtn;
