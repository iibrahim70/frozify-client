"use client";

import { useState } from "react";
import Image from "next/image";

interface IProductImage {
  images: string[];
  title: string;
}

const ProductImage = ({ images, title }: IProductImage) => {
  const [currImage, setCurrImage] = useState<number>(0);

  return (
    <div className="w-full h-full grid grid-rows-5 gap-5 overflow-hidden bg-green-500">
      {/* large images */}
      <div className="order-last md:order-first row-span-4 w-full h-full rounded-xl overflow-hidden">
        <Image
          src={images[currImage]}
          alt={title}
          width={1280}
          height={720}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      {/* small images */}
      <div className="w-full h-full grid grid-cols-4 gap-5">
        {images?.map((image: string, i: number) => (
          <div
            onMouseOver={() => setCurrImage(i)}
            key={i + image}
            className="w-full h-full rounded-lg overflow-hidden cursor-pointer hover:brightness-75 duration-300 ease-in-out"
          >
            <Image
              src={image}
              alt={title}
              width={180}
              height={180}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
