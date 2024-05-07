import { cn } from "@/lib/utils";
import { IProduct } from "@/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { Rate } from "antd";

const ProductCard = ({ data }: { data: IProduct[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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
                "bg-red-500 text-white absolute top-0 left-0 rounded-br-xl px-2 py-0.5 font-semibold text-sm",
                item?.discountPercent >= 1 ? "block" : "hidden"
              )}
            >
              {item?.discountPercent}&#37;
            </span>
          </div>

          <div className="p-5 space-y-3">
            <p className="font-semibold text-base truncate">
              {item?.productName}
            </p>

            <p className="line-clamp-3">{item?.title}</p>

            <div className="flex items-center gap-3">
              <Rate disabled allowHalf defaultValue={item?.rating} />
              <p>({item?.numberOfRatings})</p>
            </div>

            <div className="flex items-center justify-between">
              <h4>
                ${" "}
                {(
                  item?.price -
                  item?.price * (item?.discountPercent / 100)
                ).toFixed(2)}
              </h4>

              <s
                className={cn(item?.discountPercent >= 1 ? "block" : "hidden")}
              >
                $ {item?.price}
              </s>
            </div>
            <div className="flex items-center justify-between gap-5">
              <Button size="sm">Add to Bucket</Button>
              <Button size="sm">Explore Further</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
