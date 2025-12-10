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
        <label
          htmlFor="cart-drawer"
          className="drawer-button btn bg-primary text-primary-foreground border-none hover:bg-primary/90 rounded-full px-6 shadow-md hover:shadow-lg transition-all"
        >
          السلة: {count}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="cart-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <ul className="menu max-w-md w-[90vw] md:w-96 min-h-full bg-base-100/95 backdrop-blur-xl text-base-content p-6 flex flex-col gap-6 border-l border-base-content/10 shadow-2xl">
          <div className="flex items-center justify-between border-b border-base-content/10 pb-4">
            <h2 className="text-2xl font-bold text-primary">سلة المشتريات</h2>
            <label
              htmlFor="cart-drawer"
              className="btn btn-circle btn-ghost btn-sm text-base-content/70 hover:text-base-content"
            >
              ✕
            </label>
          </div>

          <div className="flex-1 flex flex-col gap-4 overflow-y-auto no-scrollbar">
            {products.length === 0 ? (
              <div className="flex flex-col items-center justify-center flex-1 opacity-50 gap-4">
                <span className="text-6xl">🛒</span>
                <div className="text-lg font-medium">سلتك فارغة</div>
                <label
                  htmlFor="cart-drawer"
                  className="btn btn-outline btn-sm rounded-full"
                >
                  تصفح المنتجات
                </label>
              </div>
            ) : (
              products.map((product) => (
                <li
                  key={product.id}
                  className="bg-base-200 rounded-2xl p-3 border border-base-300 shadow-sm"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-4">
                      <div className="w-20 h-20 relative rounded-xl overflow-hidden shrink-0 border border-base-content/20">
                        {product.photos?.[0]?.url && (
                          <Image
                            src={product.photos[0].url}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        )}
                      </div>
                      <div className="flex flex-col flex-1 min-w-0 justify-between py-1">
                        <div>
                          <span className="font-bold line-clamp-1 text-lg text-primary">
                            {product.name}
                          </span>
                          <span className="text-sm text-base-content/70 font-medium">
                            {product.price.toLocaleString()} د.ع
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <DynamicCartBtn product={product} />
                    </div>
                  </div>
                </li>
              ))
            )}
          </div>

          <div className="mt-auto pt-6 border-t border-base-content/10 flex flex-col gap-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>المجموع:</span>
              <span className="text-primary">{total.toLocaleString()} د.ع</span>
            </div>
            <button className="btn btn-secondary text-secondary-content hover:bg-secondary/90 border-none w-full rounded-xl text-lg font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              إتمام الشراء
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CartBtn;
