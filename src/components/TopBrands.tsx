"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const TopBrands = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const brands = [
    {
      title: "haier",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/5b6633108517543.5fbf63ca08307.png",
    },
    {
      title: "hisense",
      image: "https://media2.gsm55.com/media/brand/logo-hisense-600.png",
    },
    {
      title: "lg",
      image:
        "https://images.squarespace-cdn.com/content/v1/502a8efb84ae42cbccf920c4/1585574686746-VCDIHSO21O76WR72WIAD/LG-Logo.png",
    },
    {
      title: "samsung",
      image:
        "https://www.hatchwise.com/wp-content/uploads/2022/10/Samsung-Logo-2005-present-1024x576.jpeg",
    },
    {
      title: "whirlpool",
      image:
        "https://logos-world.net/wp-content/uploads/2022/12/Whirlpool-Logo.png",
    },
  ];

  return (
    <section className="section-wrapper pt-10 lg:pt-20 space-y-10">
      <h1>Top Brands</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {brands?.map((item) => (
          <Link
            href={
              pathname +
              "products" +
              "?" +
              createQueryString("brand", item?.title)
            }
            key={item?.title}
            className="flex flex-col items-center justify-center text-center gap-5 shadow-md rounded-md border dark:border-jet-gray p-5 cursor-pointer"
          >
            <Image
              src={item?.image}
              alt={item?.title}
              width={500}
              height={500}
              className="size-14 w-full object-contain"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopBrands;
