import { useCartStore } from "@/app/store/cart";

const CartBtn = () => {
  const { count } = useCartStore();
  return <button className="btn btn-primary">Cart: {count}</button>;
};

export default CartBtn;
