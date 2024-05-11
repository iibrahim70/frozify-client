const ProductDetailsLoading = () => {
  return (
    <main className="section-wrapper py-10 grid grid-cols-1 lg:grid-cols-5 gap-10">
      {/* image gallery skeleton */}
      <section className="rounded-md shadow-md border dark:border-[#212121] cursor-pointer">
        <div className="animate-pulse">
          {/* large images */}
          <div className="rounded-t-md h-80 bg-[#d0d0d0] dark:bg-[#424242]" />

          {/* small images */}
          <div className="grid grid-cols-4 gap-5 p-5">
            {Array.from({ length: 4 }, (_, index) => (
              <div
                key={index}
                className="rounded-md border dark:border-[#212121] h-20 bg-[#d0d0d0] dark:bg-[#424242]"
              />
            ))}
          </div>
        </div>
      </section>

      {/* product details skeleton */}
      <section className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="shadow-md rounded-md border dark:border-[#212121] cursor-pointer"
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

export default ProductDetailsLoading;
