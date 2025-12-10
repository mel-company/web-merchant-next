import { mockProducts } from "@/mock/products";
import { notFound } from "next/navigation";
import ProductGallery from "@/app/components/product-details/gallery";
import ProductInfo from "@/app/components/product-details/info";
import ProductReviews from "@/app/components/product-details/reviews";
import ProductSlider from "@/app/sections/product-slider";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = mockProducts.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Get similar products (same category, excluding current product)
  const similarProducts = mockProducts.filter(
    (p) => p.category.id === product.category.id && p.id !== product.id
  );

  return (
    <main className="min-h-screen bg-base-100 pb-20">
      {/* Breadcrumbs or Back Button could go here */}

      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery Section */}
          <div className="product-gallery">
            <ProductGallery
              photos={product.photos}
              thumbnail={product.thumbnail}
              name={product.name}
            />
          </div>

          {/* Info Section */}
          <div className="product-info">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="bg-base-200/50 py-16">
        <div className="container mx-auto px-4">
          <ProductReviews />
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <ProductSlider title="منتجات مشابهة" products={similarProducts} />
      )}
    </main>
  );
}
