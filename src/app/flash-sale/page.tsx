import getRequest from "@/helpers/getRequest";
import ProductCard from "@/components/products/ProductCard";
import { IProduct } from "@/types";

const FlashSale = async () => {
  const res = await getRequest(
    "http://localhost:5000/api/v1/products?fields=productName,productTitle,images,rating,numberOfRatings,price,discountPercent"
  );
  const data = res.data;

  return (
    <main className="section-wrapper py-10">
      <ProductCard
        className="col-span-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        data={data as IProduct[]}
      />
    </main>
  );
};

export default FlashSale;
