import ProductContent from "@/components/products/ProductContent";
import ProductImage from "@/components/products/ProductImage";
import { IProduct } from "@/types";
import { API_ENDPOINTS } from "@/constants";
import getRequestIsr from "@/app/utils/getRequestIsr";

export const generateStaticParams = async () => {
  const { data } = await getRequestIsr(API_ENDPOINTS.PRODUCTS);

  return data?.slice(0, 10)?.map((product: IProduct) => {
    slug: product?._id;
  });
};

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  const { data } = await fetch(
    `${API_ENDPOINTS.PRODUCTS}/${params?.slug}`
  ).then((res) => res.json());

  return (
    <main className="section-wrapper py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
      <ProductImage
        images={data?.images as string[]}
        title={data?.productName as string}
      />

      <ProductContent product={data as IProduct} />
    </main>
  );
};

export default ProductDetails;
