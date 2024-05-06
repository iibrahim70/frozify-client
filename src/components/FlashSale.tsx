import { Button } from "./ui/button";
import products from "../../public/data.json";
import ProductCard, { IProduct } from "./ProductCard";

const FlashSale = () => {
  return (
    <section className="section-wrapper min-h-dvh flex items-center py-10 lg:py-20">
      <div className="w-full space-y-10">
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col gap-y-3">
            <h1>Flash Sale</h1>
            <p>Ending in 10h : 30m : 10s</p>
          </div>

          <Button size="sm">View All</Button>
        </div>

        <ProductCard data={products as IProduct[]} />
      </div>
    </section>
  );
};

export default FlashSale;
