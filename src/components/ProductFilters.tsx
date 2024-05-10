"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Checkbox } from "./ui/checkbox";
import { useCallback } from "react";
import Link from "next/link";

const ProductFilters = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      // Get the current list of values for the parameter
      const currentValues = params.getAll(name);

      // Append the new value to the existing list
      const updatedValues = [...currentValues, value];

      // Update the parameter with the new list of values
      params.set(name, updatedValues.join(","));

      return decodeURIComponent(params.toString());
    },
    [searchParams]
  );

  const brands = ["haier", "hisense", "lg", "samsung", "whirlpool"];

  const subCategories = [
    "beverage-cooler",
    "compact",
    "direct-cool",
    "freezer",
    "french-door",
    "non-frost",
    "side-by-side",
  ];
  const ratings = [1, 2, 3, 4, 5];

  return (
    <section className="col-span-1 space-y-5">
      <div className="rounded-xl shadow-md border p-5">
        <h3>Brand Name</h3>
        <hr className="my-5" />

        <div className="space-y-2">
          {brands?.map((item) => (
            <Link
              href={pathname + "?" + createQueryString("brandName", item)}
              className="flex items-center space-x-2"
              key={item}
            >
              <Checkbox id={item} />
              <label htmlFor={item} className="capitalize">
                {item}
              </label>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-xl shadow-md border p-5">
        <h3>Sub Category</h3>
        <hr className="my-5" />

        <div className="space-y-2">
          {subCategories?.map((item) => (
            <Link
              href={pathname + "?" + createQueryString("subCategory", item)}
              className="flex items-center space-x-2"
              key={item}
            >
              <Checkbox id={item} />
              <label htmlFor={item} className="capitalize">
                {item}
              </label>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-xl shadow-md border p-5">
        <h3>Ratings</h3>
        <hr className="my-5" />

        <div className="space-y-2">
          {ratings?.map((item) => (
            <Link
              href={pathname + "?" + createQueryString("ratings", String(item))}
              className="flex items-center space-x-2"
              key={String(item)}
            >
              <Checkbox id={String(item)} />
              <label htmlFor={String(item)} className="capitalize">
                {item}
              </label>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFilters;
