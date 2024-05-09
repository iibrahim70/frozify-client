import { Button, buttonVariants } from "./ui/button";
import ProductCard from "./products/ProductCard";
import { IProduct } from "@/types";
import getRequest from "@/helpers/getRequest";
import Link from "next/link";

const PopularProducts = async () => {
  const res = await getRequest(
    "http://localhost:5000/api/v1/products?fields=productName,productTitle,images,rating,numberOfRatings,price,discountPercent&limit=8"
  );
  const data = res.data;

  return (
    <section className="section-wrapper min-h-dvh flex items-center py-10 lg:py-20">
      <div className="w-full space-y-10">
        <div className="flex items-center justify-between gap-5">
          <div className="space-y-1.5">
            <h1>Popular Products</h1>
            <p>Check out our wide range of popular products!</p>
          </div>

          <Link href="/products" className={buttonVariants({ size: "sm" })}>
            Browse Products
          </Link>
        </div>

        <ProductCard
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          data={data as IProduct[]}
        />
      </div>
    </section>
  );
};

export default PopularProducts;
