import ProductContent from "@/components/ProductContent";
import products from "../../../../public/data.json";
import ProductImage from "@/components/ProductImage";
import { IProduct } from "@/types";

const ProductDetails = ({ params }: { params: { slug: string } }) => {
  const product = products.find((product) => product?._id === params?.slug);

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
