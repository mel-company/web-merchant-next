import { create } from "zustand";
import { ProductType } from "../types";

type Store = {
  count: number;
  addProduct: (product: ProductType & { qty: number }) => void;
  removeProduct: (product: ProductType & { qty: number }) => void;
  products: ProductType[];
};

export const useCartStore = create<Store>()((set) => ({
  count: 0,
  products: [],
  addProduct: (product) =>
    set((state) => {
      const qty = (product?.qty || 0) + 1;
      const productIndex = state.products.findIndex((p) => p.id === product.id);
      if (productIndex === -1) {
        return {
          count: state.count + 1,
          products: [...state.products, { ...product, qty }],
        };
      } else {
        return {
          count: state.count + 1,
          products: state.products.map((p) =>
            p.id === product.id ? { ...p, qty } : p
          ),
        };
      }
    }),
  removeProduct: (product) =>
    set((state) => {
      const productIndex = state.products.findIndex((p) => p.id === product.id);
      const qty = product?.qty || 0;

      if (qty <= 1) {
        /// remove product
        return {
          products: state.products.filter((p) => p.id !== product.id),
          count: state.count - 1,
        };
      } else {
        ///decrease qty
        return {
          count: state.count - 1,
          products: state.products.map((p) =>
            p.id === product.id ? { ...p, qty } : p
          ),
        };
      }
    }),
}));
