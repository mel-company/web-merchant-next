import { useCartStore } from "@/app/store/cart";
import { ProductType } from "@/app/types";

const DefaultCartBtn = ({ product }: { product: ProductType }) => {
  const { addProduct } = useCartStore();

  return (
    <button onClick={() => addProduct(product)} className="btn btn-primary">
      Add to Cart
    </button>
  );
};

export default DefaultCartBtn;
