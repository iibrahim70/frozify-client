"use client";

import { useState } from "react";
import Image from "next/image";

interface IProductImage {
  images: string[];
  title: string;
}

const ProductImage = ({ images, title }: IProductImage) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  return (
    <div className="grid grid-rows-5 gap-5 overflow-hidden rounded-md border">
      {/* large images */}
      <div className="order-last md:order-first row-span-4 rounded-xl overflow-hidden">
        <Image
          src={images[currentImage]}
          alt={title}
          width={500}
          height={500}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {/* small images */}
      <div className="grid grid-cols-4 gap-5">
        {images?.map((image: string, index: number) => (
          <div
            onMouseOver={() => setCurrentImage(index)}
            key={image + index}
            className="rounded-md overflow-hidden cursor-pointer hover:brightness-90 duration-300 ease-in-out border"
          >
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              priority
              className="size-20 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
