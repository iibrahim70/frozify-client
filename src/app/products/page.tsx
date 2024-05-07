import products from "../../../public/data.json";
import ProductCard from "@/components/products/ProductCard";
import { IProduct } from "@/types";

const Products = () => {
  return (
    <main className="section-wrapper py-10 grid grid-cols-5 gap-10">
      <section className="col-span-1">1</section>

      <ProductCard
        className="col-span-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        data={products as IProduct[]}
      />
    </main>
  );
};

export default Products;
