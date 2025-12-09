import Carousel, { CarouselItem } from "@/app/components/carousel";
import ProcuctCard from "@/app/components/procuct/card";
import { ProductType } from "@/app/types";
import { mockProducts } from "@/mock/products";

const ProductSlider = ({
  title,
  products = mockProducts,
}: {
  title: string;
  products?: ProductType[];
}) => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-4 relative inline-block">
          {title}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-secondary rounded-full" />
        </h2>
        <p className="text-base-content/70 text-lg max-w-2xl">
          تصفح أحدث وأرقى المنتجات التي اخترناها بعناية لتناسب ذوقك الرفيع.
        </p>
      </div>

      <Carousel className="w-full">
        {products?.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pl-4"
          >
            <ProcuctCard product={product} />
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
};

export default ProductSlider;
