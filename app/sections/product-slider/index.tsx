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
    <section className="my-10">
      <h2 className="text-2xl lg:text-4xl font-bold mb-6">{title}</h2>
      <Carousel className="w-full">
        {products?.map((product) => (
          <CarouselItem
            key={product.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <ProcuctCard product={product} />
          </CarouselItem>
        ))}
      </Carousel>
    </section>
  );
};

export default ProductSlider;
