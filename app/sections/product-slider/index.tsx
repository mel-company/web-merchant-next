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
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="grid mx-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-8 w-full">
        {products?.map((product) => (
          <ProcuctCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductSlider;
