import ProductContent from "@/components/products/ProductContent";
import ProductImage from "@/components/products/ProductImage";
import { IProduct } from "@/types";
import getRequest from "@/helpers/getRequest";

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  const res = await getRequest(
    `http://localhost:5000/api/v1/products/${params?.slug}`
  );
  const data = res.data;

  return (
    <main className="section-wrapper py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductImage
          images={data?.images as string[]}
          title={data?.productName as string}
        />

        <ProductContent product={data as IProduct} />
      </div>
    </main>
  );
};

export default ProductDetails;
