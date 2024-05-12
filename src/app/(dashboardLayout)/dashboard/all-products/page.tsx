import { API_ENDPOINTS } from "@/constants";
import getRequestSsr from "@/app/utils/getRequestSsr";
import ProductsTable from "@/components/products/ProductsTable";
import { IProduct } from "@/types";

const AllProducts = async () => {
  const res = await getRequestSsr(
    `${API_ENDPOINTS.PRODUCTS}?fields=images,productName,brand,price,inStock,createdAt`
  );
  const data = res?.data;

  // const { data: products } = await res.json();

  return <ProductsTable data={data as IProduct[]} />;
};

export default AllProducts;
