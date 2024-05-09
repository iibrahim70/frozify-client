import ProductCard from "@/components/products/ProductCard";
import { API_ENDPOINTS, PRODUCT_FIELDS } from "@/constants";
import getRequest from "@/helpers/getRequest";
import { IProduct } from "@/types";

const Products = async () => {
  const res = await getRequest(
    `${API_ENDPOINTS.PRODUCTS}?fields=${PRODUCT_FIELDS}`
  );
  const products = res?.data;

  return (
    <main className="section-wrapper py-10 grid grid-cols-5 gap-10">
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
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>Haier</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>Hisense</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>LG</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>Samsung</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>Whirlpool</label>
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-md border p-5">
          <h3>Sub Categories</h3>
          <hr className="my-5" />

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>Beverage Cooler</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>Compact</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>Direct Cool</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>Freezer</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>French Door</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>Non Frost</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>Side-by-Side</label>
            </div>
          </div>
        </div>

        <div className="rounded-xl shadow-md border p-5">
          <h3>Ratings</h3>
          <hr className="my-5" />

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>1 Star</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>2 Star</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>3 Star</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>4 Star</label>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" name="" />
              <label>5 Star</label>
            </div>
          </div>
        </div>
      </section>

      <ProductCard
        className="col-span-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        data={products as IProduct[]}
      />
    </main>
  );
};

export default Products;
