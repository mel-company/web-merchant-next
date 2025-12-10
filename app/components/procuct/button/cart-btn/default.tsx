import { useCartStore } from "@/app/store/cart";
import { ProductType } from "@/app/types";

const DefaultCartBtn = ({ product }: { product: ProductType }) => {
  const { addProduct } = useCartStore();

  return (
    <button
      onClick={() => addProduct(product)}
      className="btn btn-primary text-primary-content hover:bg-primary/90 rounded-full w-full shadow-md hover:shadow-lg transition-all border-none font-bold"
    >
      أضف للسلة
    </button>
  );
};

export default DefaultCartBtn;
