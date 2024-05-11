const FlashSaleLoading = () => {
  return (
    <section className="section-wrapper py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
  );
};

export default FlashSaleLoading;
