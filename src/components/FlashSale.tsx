import { buttonVariants } from "./ui/button";
import ProductCard from "./products/ProductCard";
import { IProduct } from "@/types";
import CountDown from "./CountDown";
import getRequest from "@/helpers/getRequest";
import Link from "next/link";
import { API_ENDPOINTS, PRODUCT_FIELDS } from "@/constants";

const FlashSale = async () => {
  const res = await getRequest(
    `${API_ENDPOINTS.FLASH_SALE}?fields=${PRODUCT_FIELDS}&limit=4`
  );
  const products = res?.data;

  return (
    <section className="section-wrapper min-h-dvh flex items-center pt-10 lg:pt-20">
      <div className="w-full space-y-10">
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col gap-y-3">
            <h1>Flash Sale</h1>
            <p className="bg-red-500 text-white font-semibold p-2">
              Ending in <CountDown />
            </p>
          </div>

          <Link href="/flash-sale" className={buttonVariants({ size: "sm" })}>
            See All Deals
          </Link>
        </div>

        <ProductCard
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          data={products as IProduct[]}
        />
      </div>
    </section>
  );
};

export default FlashSale;
