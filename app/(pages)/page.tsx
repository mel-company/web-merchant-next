import Image from "next/image";
import ProductSlider from "../sections/product-slider";
import HeroSection from "../sections/hero";

export default function Home() {
  return (
    <main className="container mx-auto p-4 py-16 min-h-screen bg-white dark:bg-black">
      <HeroSection />
      <ProductSlider title="المنتجات" />
    </main>
  );
}
