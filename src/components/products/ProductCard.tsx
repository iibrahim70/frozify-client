import { cn } from "@/lib/utils";
import { IProduct } from "@/types";
import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import { Rate } from "antd";
import Link from "next/link";
import formatCurrency from "@/helpers/formatCurrency";

interface IProductCardProps {
  data: IProduct[];
  className?: string;
}

const ProductCard = ({ data, className }: IProductCardProps) => {
  return (
    <section className={className}>
      {data?.map((item: IProduct) => (
        <div
          key={item?._id}
          className="shadow-md rounded-md border cursor-pointer"
        >
          <div className="overflow-hidden relative">
            <Image
              width={500}
              height={500}
              className="scale-100 hover:scale-105 duration-500"
              src={item?.images[0]}
              alt={item?.productName}
            />
            <span
              className={cn(
                "bg-blue-500 text-white absolute top-0 left-0 rounded-br-xl px-2 py-0.5 font-semibold text-sm",
                item?.discountPercent >= 1 ? "block" : "hidden"
              )}
            >
              {item?.discountPercent}&#37;
            </span>
          </div>

          <div className="px-3 py-5 space-y-3">
            <p className="font-semibold text-base truncate">
              {item?.productName}
            </p>

            <p className="line-clamp-3">{item?.productTitle}</p>

            <div className="flex items-center gap-3">
              <Rate disabled allowHalf defaultValue={item?.rating} />
              <p>({item?.numberOfRatings})</p>
            </div>

            <div className="flex items-center justify-between">
              <h4>
                {formatCurrency(
                  item?.price - item?.price * (item?.discountPercent / 100)
                )}
              </h4>

              <s
                className={cn(item?.discountPercent >= 1 ? "block" : "hidden")}
              >
                {formatCurrency(item?.price)}
              </s>
            </div>

            <div className="flex items-center justify-between gap-5">
              <Button size="sm">Add to Bucket</Button>

              <Link
                href={`products/${item?._id}`}
                className={cn(
                  buttonVariants({ size: "sm", variant: "outline" }),
                  "border-black"
                )}
              >
                Explore Further
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductCard;
