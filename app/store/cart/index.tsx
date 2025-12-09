import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductType } from "../../types";

type CartProduct = ProductType & { qty: number };

type Store = {
  count: number;
  addProduct: (product: ProductType) => void;
  removeProduct: (productId: string) => void; // Use productId
  products: CartProduct[];
};

export const useCartStore = create<Store>()(
  persist(
    (set) => ({
      count: 0,
      products: [],

      addProduct: (product) =>
        set((state) => {
          const existing = state.products.find((p) => p.id === product.id);

          if (!existing) {
            return {
              count: state.count + 1,
              products: [...state.products, { ...product, qty: 1 }],
            };
          }

          return {
            count: state.count + 1,
            products: state.products.map((p) =>
              p.id === product.id ? { ...p, qty: p.qty + 1 } : p
            ),
          };
        }),

      removeProduct: (productId: string) =>
        set((state) => {
          const existing = state.products.find((p) => p.id === productId);
          if (!existing) {
            console.log("Product not found");
            return state;
          }
          console.log("Product exists");

          if (existing.qty <= 1) {
            return {
              count: Math.max(state.count - 1, 0),
              products: state.products.filter((p) => p.id !== productId),
            };
          }

          return {
            count: Math.max(state.count - 1, 0),
            products: state.products.map((p) =>
              p.id === productId ? { ...p, qty: p.qty - 1 } : p
            ),
          };
        }),
    }),
    {
      name: "cart-storage",
    }
  )
);
