import { getRequestSsr } from "@/helpers/getRequest";
import ProductCard from "@/components/products/ProductCard";
import { IProduct } from "@/types";
import { API_ENDPOINTS, PRODUCT_FIELDS } from "@/constants";

const FlashSale = async () => {
  const res = await getRequestSsr(
    `${API_ENDPOINTS.PRODUCTS}?fields=${PRODUCT_FIELDS}`
  );
  const products = res?.data;

  return (
    <main className="section-wrapper py-10">
      <ProductCard
        className="col-span-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        data={products as IProduct[]}
      />
    </main>
  );
};

export default FlashSale;
