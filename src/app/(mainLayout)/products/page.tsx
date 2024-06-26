import ProductFilters from "@/components/products/ProductFilters";
import ProductCard from "@/components/products/ProductCard";
import { API_ENDPOINTS, PRODUCT_FIELDS } from "@/constants";
import { IProduct } from "@/types";
import { getRequestSsr } from "@/helpers/getRequest";

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

  const { data } = await getRequestSsr(
    `${API_ENDPOINTS.PRODUCTS}?fields=${PRODUCT_FIELDS}&${decodedParams}`
  );

  return (
    <main className="section-wrapper py-10 grid grid-cols-1 lg:grid-cols-5 gap-10">
      <ProductFilters />

      <ProductCard
        className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 h-fit"
        data={data as IProduct[]}
      />
    </main>
  );
};

export default Products;
