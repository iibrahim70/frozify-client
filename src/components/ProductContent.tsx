import formatCurrency from "@/helpers/formatCurrency";
import { IProduct } from "@/types";
import { Button } from "./ui/button";
import { Rate } from "antd";

const ProductContent = ({ product }: { product: IProduct }) => {
  return (
    <section className="space-y-3.5">
      <h1>{product?.productName}</h1>

      <p>{product?.title}</p>

      <div className="flex items-center gap-10">
        <span className="text-xs uppercase font-semibold tracking-widest px-3 py-1.5 rounded bg-orange-300">
          {product?.subcategory}
        </span>

        <div className="flex items-center gap-1">
          <Rate disabled allowHalf defaultValue={product?.rating} />
          <p>({product?.numberOfRatings})</p>
        </div>
      </div>

      <h3>
        {formatCurrency(
          product?.price - product?.price * (product?.discountPercent / 100)
        )}
      </h3>

      <div className="flex items-center justify-end gap-10">
        <Button size="sm">Checkout</Button>
        <Button size="sm">Add to Bucket</Button>
      </div>

      {/* <ProductDetailModalButtons {...product} /> */}
      <div className="flex flex-col gap-2.5">
        <p className="font-semibold uppercase text-dark/75 border-b pb-2.5">
          Product Description
        </p>
        <p>{product?.productDescription}</p>
      </div>
    </section>
  );
};

export default ProductContent;
