import Products from "@/src/components/Products";
import Brands from "@/src/components/ui/sections/Brands";
import Hero from "@/src/components/ui/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Products extraClass="hidden sm:block" title="Most popular product" API='/product-items' />
      <Products extraClass="hidden sm:block" title="Most popular product" API='/product-items' />
      <Products title="Most popular product" API='/product-items' />
    </>
  );
}
