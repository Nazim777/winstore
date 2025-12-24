import { getCategories } from "@/app/actions/categories";
import { useEffect } from "react";
import Error from "../common/Error";
import { useFetch } from "@/hooks/useFetch";
import CategoryListSkeleton from "./CategoryListSkeleton";

interface CategoryListProps {
  activeCategory: string | null;
  setActiveCategory: React.Dispatch<React.SetStateAction<string | null>>;
}
export default function CategoryList({
  activeCategory,
  setActiveCategory,
}: CategoryListProps) {
  const {
    data: categories,
    loading,
    error: categoryError,
  } = useFetch(getCategories, []);

  useEffect(() => {
    if (categories && categories.length > 0 && !activeCategory) {
      setActiveCategory(categories[0].name);
    }
  }, [categories, activeCategory, setActiveCategory]);

  if (loading) return <CategoryListSkeleton />;

  return (
    <>
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {categoryError && <Error errorMsg={categoryError} />}
        {categories &&
          categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.name)}
              className={`uppercase cursor-pointer text-lg font-bold tracking-wider pb-2 whitespace-nowrap transition ${
                activeCategory === cat.name
                  ? "text-win-primary border-b-2 border-win-primary"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
      </div>
    </>
  );
}
