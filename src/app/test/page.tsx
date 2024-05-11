const ProductDetailsLoading = () => {
  return (
    <main className="section-wrapper py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
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
    </main>
  );
};

export default ProductDetailsLoading;
