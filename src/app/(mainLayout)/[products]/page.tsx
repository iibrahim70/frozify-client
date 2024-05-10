import ProductFilters from "@/components/ProductFilters";
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
      <ProductFilters />

      <ProductCard
        className="col-span-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        data={products as IProduct[]}
      />
    </main>
  );
};

export default Products;
