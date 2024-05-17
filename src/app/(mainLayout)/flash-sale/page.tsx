import ProductCard from "@/components/products/ProductCard";
import { IProduct } from "@/types";
import { API_ENDPOINTS, PRODUCT_FIELDS } from "@/constants";
import getRequestSsr from "@/app/utils/getRequestSsr";

const FlashSale = async () => {
  const { data } = await getRequestSsr(
    `${API_ENDPOINTS.PRODUCTS}?fields=${PRODUCT_FIELDS}`
  );

  return (
    <main className="section-wrapper py-10">
      <ProductCard
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        data={data as IProduct[]}
      />
    </main>
  );
};

export default FlashSale;
