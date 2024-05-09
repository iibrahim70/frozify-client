import ProductContent from "@/components/products/ProductContent";
import ProductImage from "@/components/products/ProductImage";
import { IProduct } from "@/types";
import getRequest from "@/helpers/getRequest";
import { API_ENDPOINTS } from "@/constants";

export const generateStaticParams = async () => {
  const res = await getRequest(API_ENDPOINTS.PRODUCTS);
  const products = res?.data;

  return products?.slice(0, 10)?.map((product: IProduct) => {
    slug: product?._id;
  });
};

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  const res = await getRequest(`${API_ENDPOINTS.PRODUCTS}/${params?.slug}`);
  const product = res.data;

  return (
    <main className="section-wrapper py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductImage
          images={product?.images as string[]}
          title={product?.productName as string}
        />

        <ProductContent product={product as IProduct} />
      </div>
    </main>
  );
};

export default ProductDetails;
