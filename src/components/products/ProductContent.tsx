import formatCurrency from "@/helpers/formatCurrency";
import { IProduct } from "@/types";
import { Button } from "../ui/button";
import { Rate } from "antd";
import { cn } from "@/lib/utils";
import SocialShare from "../SocialShare";

const ProductContent = ({ product }: { product: IProduct }) => {
  return (
    <section className="space-y-5">
      <h1>{product?.productName}</h1>

      <p>{product?.productTitle}</p>

      <div className="flex items-center gap-10">
        <span className="text-xs uppercase font-semibold tracking-widest px-3 py-1.5 rounded bg-orange-300">
          {product?.subCategory}
        </span>

        <div className="flex items-center gap-1">
          <Rate disabled allowHalf defaultValue={product?.rating} />
          <p>({product?.numberOfRatings})</p>
        </div>
      </div>

      <div className="flex items-center gap-10">
        <h3>
          {formatCurrency(
            product?.price - product?.price * (product?.discountPercent / 100)
          )}
        </h3>

        <s className={cn(product?.discountPercent >= 1 ? "block" : "hidden")}>
          {formatCurrency(product?.price)}
        </s>
      </div>

      <div className="flex items-center justify-between gap-5">
        <div className="flex items-center gap-5">
          <Button size="sm">Buy Now</Button>
          <Button size="sm" variant="outline" className="border-black">
            Add to Bucket
          </Button>
        </div>

        <SocialShare />
      </div>

      <div className="flex flex-col gap-2.5">
        <p className="font-semibold uppercase text-dark/75 border-b dark:border-jet-gray pb-2.5">
          Product Description
        </p>
        <p>{product?.productDescription}</p>
      </div>
    </section>
  );
};

export default ProductContent;
