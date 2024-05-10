import ProductFilters from "@/components/ProductFilters";
import ProductCard from "@/components/products/ProductCard";
import { API_ENDPOINTS, PRODUCT_FIELDS } from "@/constants";
import { getRequestSsr } from "@/helpers/getRequest";
import { IProduct } from "@/types";

interface ISearchParamProps {
  searchParams: {
    brands?: string;
    subCategories?: string;
    ratings?: string;
  };
}

const Products = async (params: ISearchParamProps) => {
  const paramsString = new URLSearchParams(params.searchParams).toString();
  const decodedParams = decodeURIComponent(paramsString);

  const res = await getRequestSsr(
    `${API_ENDPOINTS.PRODUCTS}?fields=${PRODUCT_FIELDS}&${decodedParams}`
  );
  const products = res?.data;

  return (
    <main className="section-wrapper py-10 grid grid-cols-5 gap-10">
      <ProductFilters />

      <ProductCard
        className="col-span-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 h-fit"
        data={products as IProduct[]}
      />
    </main>
  );
};

export default Products;
