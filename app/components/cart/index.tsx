import { useCartStore } from "@/app/store/cart";

const CartBtn = () => {
  const { count } = useCartStore();
  return (
    <div>
      <button className="btn btn-primary">Cart: {count}</button>
    </div>
  );
};

export default CartBtn;
