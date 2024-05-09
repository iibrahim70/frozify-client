import { Button } from "./ui/button";
import ProductCard from "./products/ProductCard";
import { IProduct } from "@/types";
import CountDown from "./CountDown";
import getRequest from "@/helpers/getRequest";

const FlashSale = async () => {
  const res = await getRequest(
    "http://localhost:5000/api/v1/products?fields=productName,productTitle,images,rating,numberOfRatings,price,discountPercent"
  );
  const data = res.data;

  return (
    <section className="section-wrapper min-h-dvh flex items-center py-10 lg:py-20">
      <div className="w-full space-y-10">
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col gap-y-3">
            <h1>Flash Sale</h1>
            <p className="bg-red-500 text-white font-semibold p-2">
              Ending in <CountDown />
            </p>
          </div>

          <Button size="sm">See All Deals</Button>
        </div>

        <ProductCard
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          data={data as IProduct[]}
        />
      </div>
    </section>
  );
};

export default FlashSale;
