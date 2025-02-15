import Products from "@/src/components/Products";
import Brands from "@/src/components/ui/sections/Brands";
import CategoryMenu from "@/src/components/ui/sections/CategoryMenu";
import EnjoyMusic from "@/src/components/ui/sections/Enjoymusic";
import Hero from "@/src/components/ui/sections/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <Products extraClass="sm:block" title="Most popular product" API='/product-items' />
      <Products extraClass="sm:block" title="Most popular product" API='/product-items' />
      <Products extraClass="sm:block" title="Most popular product" API='/product-items' />
      <CategoryMenu />
      <Products extraClass="sm:block" title="On-sale products" API="/product-items"/>
      <EnjoyMusic/>
      <Products extraClass="sm:block" title="Last seen products" API="/product-items"/>
    </>
  );
}
