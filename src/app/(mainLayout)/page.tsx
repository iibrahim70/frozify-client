import TopBrands from "@/components/TopBrands";
import FlashSale from "@/components/FlashSale";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FlashSale />
      <TopBrands />
      <PopularProducts />
    </main>
  );
};

export default HomePage;
