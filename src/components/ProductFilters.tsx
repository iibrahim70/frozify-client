const ProductFilters = () => {
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

        <div className="space-y-2"></div>
      </div>

      <div className="rounded-xl shadow-md border p-5">
        <h3>Sub Categories</h3>
        <hr className="my-5" />

        <div className="space-y-2"></div>
      </div>

      <div className="rounded-xl shadow-md border p-5">
        <h3>Ratings</h3>
        <hr className="my-5" />

        <div className="space-y-2"></div>
      </div>
    </section>
  );
};

export default ProductFilters;
