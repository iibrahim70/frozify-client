import products from "../../../public/data.json";
import ProductCard from "@/components/products/ProductCard";
import { IProduct } from "@/types";

const Products = () => {
  return (
    <main className="section-wrapper py-10">
      <ProductCard data={products as IProduct[]} />
    </main>
  );
};

export default Products;
