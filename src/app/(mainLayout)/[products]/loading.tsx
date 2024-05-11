const ProductsLoading = () => {
  return (
    <main className="section-wrapper py-10 grid grid-cols-1 lg:grid-cols-5 gap-10">
      {/* skeleton for products filter  */}
      <section className="max-md:hidden lg:col-span-1 space-y-5">
        {Array.from({ length: 3 }, (_, index) => (
          <div
            key={index}
            className="rounded-md shadow-md border dark:border-jet-gray p-5 cursor-pointer"
          >
            <div className="animate-pulse">
              <div className="h-4 rounded-full bg-light-gray dark:bg-dark-gray" />

              <div className="h-1 rounded-full my-5 bg-light-gray dark:bg-dark-gray" />

              <div className="space-y-2">
                {Array.from({ length: 5 }, (_, index) => (
                  <div
                    key={index}
                    className="h-2.5 rounded-full bg-light-gray dark:bg-dark-gray"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* skeleton for products card */}
      <section className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {Array.from({ length: 6 }, (_, index) => (
          <div
            key={index}
            className="shadow-md rounded-md border dark:border-jet-gray cursor-pointer"
          >
            <div className="animate-pulse">
              <div className="size-60 w-full rounded-t-md bg-light-gray dark:bg-dark-gray" />

              <div className="px-3 py-5 space-y-5">
                <div className="h-3 rounded-full bg-light-gray dark:bg-dark-gray" />

                <div className="space-y-1.5">
                  <div className="h-1.5 rounded-full bg-light-gray dark:bg-dark-gray" />
                  <div className="h-1.5 rounded-full bg-light-gray dark:bg-dark-gray" />
                  <div className="h-1.5 rounded-full bg-light-gray dark:bg-dark-gray" />
                </div>

                <div className="flex items-center justify-between gap-20">
                  <div className="h-3 w-1/4 rounded-full bg-light-gray dark:bg-dark-gray" />
                  <div className="h-3 w-1/4 rounded-full bg-light-gray dark:bg-dark-gray" />
                </div>

                <div className="flex items-center justify-between gap-20">
                  <div className="h-6 w-2/5 rounded-full bg-light-gray dark:bg-dark-gray" />
                  <div className="h-6 w-2/5 rounded-full bg-light-gray dark:bg-dark-gray" />
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
