'use client';

import Hero from "@/components/home/Hero";
import CategorySlider from "@/components/category/CategorySlider";
import NewArrivals from "@/components/home/NewArrivals";
import BestDeals from "@/components/home/BestDeals";
import Divider from "../common/Divider";

const Products = () => {
  return (
    <>
      <Hero />
      <CategorySlider />
      <Divider/>
      <NewArrivals />
      <BestDeals />
    </>
  );
};

export default Products;
