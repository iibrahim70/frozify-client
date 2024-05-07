"use client";

import { Button } from "./ui/button";
import products from "../../public/data.json";
import ProductCard from "./products/ProductCard";
import { IProduct } from "@/types";
import CountDown from "./CountDown";

const FlashSale = () => {
  return (
    <section className="section-wrapper min-h-dvh flex items-center py-10 lg:py-20">
      <div className="w-full space-y-10">
        <div className="flex items-center justify-between gap-5">
          <div className="flex flex-col gap-y-3">
            <h1>Flash Sale</h1>
            <p>
              Ending in <CountDown />
            </p>
          </div>

          <Button size="sm">See All Deals</Button>
        </div>

        <ProductCard data={products as IProduct[]} />
      </div>
    </section>
  );
};

export default FlashSale;
