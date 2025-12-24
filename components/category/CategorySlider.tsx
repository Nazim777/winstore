import React, { useRef } from "react";
import { getCategories } from "@/app/actions/categories";
import CategorySkeleton from "./CategorySkeleton";
import Error from "../common/Error";
import { useFetch } from "@/hooks/useFetch";
import CategoryCard from "./CategoryCard";
import ScrollButton from "../common/ScrollButton";
import { EXTRA_CATEGORIES } from "@/utils/category";

const CategorySlider: React.FC = () => {
  const { data: categories, loading, error } = useFetch(getCategories, []);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollTo =
      direction === "left"
        ? scrollLeft - clientWidth / 2
        : scrollLeft + clientWidth / 2;

    scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="flex gap-4 p-4 md:px-12 overflow-x-auto bg-[#FFFDF5]">
        {[1, 2, 3, 4, 5].map((i) => (
          <CategorySkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) return <Error errorMsg={error} />;

  return (
    <section className="relative group px-4 md:px-12 py-10 bg-[#FFFDF5] border-b border-gray-100">
      <ScrollButton direction="left" onClick={() => scroll("left")} />

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
      >
        {categories?.map((cat) => (
          <CategoryCard key={cat.name} name={cat.name} />
        ))}

        {categories &&
          categories.length < 5 &&
          EXTRA_CATEGORIES.map((extra) => (
            <CategoryCard
              key={extra.name}
              name={extra.name}
              image={extra.image}
            />
          ))}
      </div>

      <ScrollButton direction="right" onClick={() => scroll("right")} />
    </section>
  );
};

export default CategorySlider;
