"use client";

import useEmblaCarousel from "embla-carousel-react";
import classnames from "classnames";

type CarouselProps = {
  children: React.ReactNode;
  className?: string;
  options?: Parameters<typeof useEmblaCarousel>[0];
};

const Carousel = ({ children, className, options }: CarouselProps) => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
    direction: "rtl",
    ...options,
  });

  return (
    <div className={classnames("overflow-hidden", className)} ref={emblaRef}>
      <div className="flex gap-4">{children}</div>
    </div>
  );
};

export const CarouselItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  // flex-none or grow-0 shrink-0 basis-auto, but usually for carousel we want explicit width control or letting content dictate
  // min-w-0 is important for flex children
  return (
    <div className={classnames("flex-[0_0_auto] min-w-0", className)}>
      {children}
    </div>
  );
};

export default Carousel;
