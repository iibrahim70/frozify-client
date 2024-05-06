import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";

export interface IProduct {
  _id: string;
  productName: string;
  brand: string;
  price: number;
  discountPercent: number;
  discountedPrice: number;
  images: string[];
  inStock: number;
  category: string;
  subcategory: string;
  productDetails: string;
}

const ProductCard = ({ data }: { data: IProduct[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
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

            <div className="flex items-center justify-between">
              <h4>$ {item?.discountedPrice}</h4>

              <s
                className={cn(item?.discountPercent >= 1 ? "block" : "hidden")}
              >
                $ {item?.price}
              </s>
            </div>

            <div className="flex items-center justify-between gap-5">
              <Button size="sm">View Details</Button>
              <Button size="sm">Cart</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
