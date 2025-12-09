import { create } from "zustand";
import { ProductType } from "../../types";

type CartProduct = ProductType & { qty: number };

type Store = {
  count: number;
  addProduct: (product: ProductType) => void;
  removeProduct: (product: ProductType) => void;
  products: CartProduct[];
};

export const useCartStore = create<Store>()((set) => ({
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

  removeProduct: (product) =>
    set((state) => {
      const existing = state.products.find((p) => p.id === product.id);
      if (!existing) return state;

      if (existing.qty <= 1) {
        return {
          count: Math.max(0, state.count - 1),
          products: state.products.filter((p) => p.id !== product.id),
        };
      }

      return {
        count: Math.max(0, state.count - 1),
        products: state.products.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty - 1 } : p
        ),
      };
    }),
}));
