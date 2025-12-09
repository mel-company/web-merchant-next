import Image from "next/image";
import ProductSlider from "../sections/product-slider";

export default function Home() {
  return (
    <main className="container mx-auto p-4 py-16 min-h-screen bg-white dark:bg-black">
      <ProductSlider title="Top Products" />
    </main>
  );
}
