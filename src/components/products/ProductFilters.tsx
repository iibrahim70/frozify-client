"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Checkbox } from "../ui/checkbox";
import { useCallback } from "react";
import Link from "next/link";

const ProductFilters = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const currentValues = params.getAll(name);

      if (currentValues.includes(value)) {
        // Remove the item if it's already present
        const updatedValues = currentValues.filter((item) => item !== value);
        if (updatedValues.length === 0) {
          params.delete(name);
        } else {
          params.set(name, updatedValues.join(","));
        }
      } else {
        // Add the item if it's not present
        params.append(name, value);
      }

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

  const isChecked = (name: string, item: string) => {
    const params = new URLSearchParams(searchParams.toString());
    return params.getAll(name).includes(item);
  };

  return (
    <section className="max-md:hidden lg:col-span-1 space-y-5">
      <div className="rounded-xl shadow-md border dark:border-jet-gray p-5">
        <h3>Brands</h3>
        <hr className="my-5" />

        <div className="space-y-2">
          {brands?.map((item) => (
            <Link
              href={pathname + "?" + createQueryString("brand", item)}
              className="flex items-center space-x-2"
              key={item}
            >
              <Checkbox id={item} checked={isChecked("brand", item)} />
              <label htmlFor={item} className="capitalize">
                {item}
              </label>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-xl shadow-md border dark:border-jet-gray p-5">
        <h3>Sub Category</h3>
        <hr className="my-5" />

        <div className="space-y-2">
          {subCategories?.map((item) => (
            <Link
              href={pathname + "?" + createQueryString("subCategory", item)}
              className="flex items-center space-x-2"
              key={item}
            >
              <Checkbox id={item} checked={isChecked("subCategory", item)} />
              <label htmlFor={item} className="capitalize">
                {item}
              </label>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-xl shadow-md border dark:border-jet-gray p-5">
        <h3>Ratings</h3>
        <hr className="my-5" />

        <div className="space-y-2">
          {ratings?.map((item) => (
            <Link
              href={pathname + "?" + createQueryString("rating", String(item))}
              className="flex items-center space-x-2"
              key={String(item)}
            >
              <Checkbox
                id={String(item)}
                checked={isChecked("rating", String(item))}
              />
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
