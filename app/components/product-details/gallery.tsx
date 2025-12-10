"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { PhotoType } from "@/app/types";
import classNames from "classnames";

interface ProductGalleryProps {
  photos: PhotoType[];
  thumbnail: PhotoType;
  name: string;
}

const ProductGallery = ({ photos, thumbnail, name }: ProductGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
    align: "center",
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      setSelectedIndex(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  // Sync state when carousel slides (e.g. via drag)
  if (emblaApi) {
    emblaApi.on("select", onSelect);
  }

  // Ensure we have at least the thumbnail if photos is empty
  const allPhotos = photos && photos.length > 0 ? photos : [thumbnail];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Carousel */}
      <div
        className="overflow-hidden rounded-2xl bg-base-200 border border-base-300 relative aspect-square group"
        ref={emblaRef}
      >
        <div className="flex touch-pan-y h-full">
          {allPhotos.map((photo, index) => (
            <div
              className="flex-[0_0_100%] min-w-0 relative h-full flex items-center justify-center bg-base-100"
              key={index}
            >
              <div className="relative w-full h-full">
                <Image
                  src={photo.url}
                  alt={`${name} - ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      {allPhotos.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
          {allPhotos.map((photo, index) => (
            <button
              key={index}
              onClick={() => onThumbClick(index)}
              className={classNames(
                "relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all p-1 bg-white snap-start",
                selectedIndex === index
                  ? "border-primary ring-2 ring-primary/20 scale-105"
                  : "border-base-300 hover:border-base-400 opacity-70 hover:opacity-100"
              )}
            >
              <div className="relative w-full h-full rounded overflow-hidden">
                <Image
                  src={photo.url}
                  alt={`${name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
