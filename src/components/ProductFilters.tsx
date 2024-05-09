"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const ProductFilters = () => {
  const priceRanges = [
    { min: 50, max: 200 },
    { min: 201, max: 500 },
    { min: 501, max: 1000 },
    { min: 1001, max: 2000 },
  ];
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

  const searchParams = useSearchParams();

  const selectedBrands = searchParams.getAll("brands");
  const selectedSubCategories = searchParams.getAll("subCategories");
  const selectedRatings = searchParams.getAll("ratings");

  const generateQueryParam = () => {
    let queryParams = "";

    // Brands
    if (selectedBrands.length > 0) {
      queryParams += `brands=${selectedBrands.join(",")}`;
    }

    // Sub Categories
    if (selectedSubCategories.length > 0) {
      queryParams += `&subCategories=${selectedSubCategories.join(",")}`;
    }

    // Ratings
    if (selectedRatings.length > 0) {
      queryParams += `&ratings=${selectedRatings.join(",")}`;
    }

    // Return the constructed query parameters
    return queryParams ? `?${queryParams}` : "";
  };

  const generateCheckboxItems = (items, paramName) =>
    items.map((item, index) => (
      <Link
        href={generateQueryParam()}
        key={index}
        className="flex items-center gap-2"
      >
        <input type="checkbox" name={paramName} value={item} />
        <label className="capitalize">{item}</label>
      </Link>
    ));

  return (
    <section className="col-span-1 space-y-5">
      <div className="rounded-xl shadow-md border p-5">
        <h3>Price Range</h3>
        <hr className="my-5" />

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <input type="checkbox" name="" />
            <label>$50 - $200</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="" />
            <label>$201 - $500</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="" />
            <label>$501 - $1000</label>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" name="" />
            <label>$1001 - $2000</label>
          </div>
        </div>
      </div>

      <div className="rounded-xl shadow-md border p-5">
        <h3>Brands</h3>
        <hr className="my-5" />

        <div className="space-y-2">
          {generateCheckboxItems(brands, "brands")}
        </div>
      </div>

      <div className="rounded-xl shadow-md border p-5">
        <h3>Sub Categories</h3>
        <hr className="my-5" />

        <div className="space-y-2">
          {generateCheckboxItems(subCategories, "sub-categories")}
        </div>
      </div>

      <div className="rounded-xl shadow-md border p-5">
        <h3>Ratings</h3>
        <hr className="my-5" />

        <div className="space-y-2">
          {generateCheckboxItems(ratings, "ratings")}
        </div>
      </div>
    </section>
  );
};

export default ProductFilters;
