import ProductSlider from "../sections/product-slider";
import HeroSection from "../sections/hero";
import FeaturesSection from "../sections/features";
import TestimonialsSection from "../sections/testimonials";
import NewsletterSection from "../sections/newsletter";
import GallerySection from "../sections/gallery";

export default function Home() {
  return (
    <main className="min-h-screen bg-base-100 text-base-content flex flex-col gap-10">
      <HeroSection />
      <FeaturesSection />
      <ProductSlider title="أحدث اللوحات" />
      <GallerySection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
