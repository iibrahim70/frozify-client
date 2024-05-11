const ProductDetailsLoading = () => {
  return (
    <main className="min-h-[calc(100dvh-64px)] section-wrapper py-10 flex   items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {/* skeleton for image gallery  */}
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

        {/* skeleton for product content */}
        <section>
          <div className="animate-pulse space-y-10">
            <div className="h-3 w-1/2 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />

            <div className="space-y-1.5">
              <div className="h-1.5 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
              <div className="h-1.5 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
              <div className="h-1.5 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
            </div>

            <div className="space-y-3.5">
              <div className="w-1/2 flex items-center gap-10">
                <div className="h-3 w-1/4 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
                <div className="h-3 w-1/4 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
              </div>

              <div className="w-1/2 flex items-center gap-10">
                <div className="h-3 w-2/5 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
                <div className="h-3 w-2/5 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
              </div>

              <div className="flex items-center justify-between gap-10">
                <div className="h-6 w-2/5 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
                <div className="h-6 w-2/5 rounded-full bg-[#d0d0d0] dark:bg-[#424242]" />
              </div>
            </div>

            <div className="space-y-1.5">
              {Array.from({ length: 15 }, (_, index) => (
                <div
                  key={index}
                  className="h-1.5 rounded-full bg-[#d0d0d0] dark:bg-[#424242]"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProductDetailsLoading;
