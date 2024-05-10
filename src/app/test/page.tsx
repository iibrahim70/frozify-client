import React from "react";

const ProductsLoading = () => {
  return (
    <main className="section-wrappar min-h-[calc(100dvh-64px)] py-10 grid grid-cols-5 gap-10">
      {/* filter skeleton */}
      <section className="col-span-1 space-y-5">
        {
          
        }
        <div className="rounded-xl shadow-md border p-5">
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
                <Checkbox id={item} checked={isChecked("subCategory", item)} />
                <label htmlFor={item} className="capitalize">
                  {item}
                </label>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* products skeleton */}
      <section className="col-span-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="shadow-md rounded-md border border-transparent dark:border-[#212121] cursor-pointer"
          >
            <div className="animate-pulse">
              <div className="size-60 w-full rounded-t-md bg-[#d0d0d0] dark:bg-[#424242]" />

              <div className="px-3 py-5 space-y-5">
                <div className="h-3 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />

                <div className="space-y-1.5">
                  <div className="h-1.5 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
                  <div className="h-1.5 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
                  <div className="h-1.5 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
                </div>

                <div className="flex items-center justify-between gap-20">
                  <div className="h-3 w-1/4 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
                  <div className="h-3 w-1/4 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
                </div>

                <div className="flex items-center justify-between gap-20">
                  <div className="h-6 w-2/5 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
                  <div className="h-6 w-2/5 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProductsLoading;
