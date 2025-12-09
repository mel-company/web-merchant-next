import { useCartStore } from "@/app/store/cart";
import DynamicCartBtn from "@/app/components/procuct/button/cart-btn/dynamic";
import Image from "next/image";

const CartBtn = () => {
  const { count, products } = useCartStore();

  const total = products.reduce((acc, curr) => acc + curr.price * curr.qty, 0);

  return (
    <div className="drawer drawer-end z-50 w-auto">
      <input id="cart-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="cart-drawer" className="drawer-button btn btn-primary">
          Cart: {count}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="cart-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu max-w-xs bg-base-200 text-base-content min-h-full w-96 p-4 flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

          <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
            {products.length === 0 ? (
              <div className="text-center py-10 opacity-50">
                Your cart is empty
              </div>
            ) : (
              products.map((product) => (
                <li
                  key={product.id}
                  className="bg-base-100 rounded-box p-2 w-full"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <div className="w-16 h-16 relative rounded-lg overflow-hidden shrink-0">
                        {product.photos?.[0]?.url && (
                          <Image
                            src={product.photos[0].url}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        <span className="font-bold line-clamp-2 text-lg">
                          {product.name}
                        </span>
                        <span className="text-sm opacity-70">
                          {product.price} AED
                        </span>
                      </div>
                    </div>
                    <DynamicCartBtn product={product} />
                  </div>
                </li>
              ))
            )}
          </div>

          <div className="mt-auto pt-4 border-t border-base-300 flex flex-col gap-4">
            <div className="flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span>{total.toLocaleString()} AED</span>
            </div>
            <button className="btn btn-primary btn-block">Checkout</button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CartBtn;
