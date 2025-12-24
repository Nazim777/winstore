import React from "react";
import { getCategoryImage } from "@/utils/category";

interface CategoryCardProps {
  name: string;
  image?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, image }) => {
  return (
    <div className="min-w-[240px] md:min-w-[300px] h-[180px] md:h-[220px] bg-white rounded-sm overflow-hidden relative snap-start cursor-pointer group/card shadow-sm border border-gray-200">
      <img
        src={image ?? getCategoryImage(name)}
        alt={name}
        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-700"
      />

      <div className="absolute bottom-3 left-3 right-3 bg-white py-3 px-4 flex justify-between items-center shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-sm">
        <span className="capitalize font-normal text-gray-800 text-base md:text-lg tracking-tight">
          {name.replace("'", "")}
        </span>
        <span className="text-win-primary text-sm font-medium hover:underline">
          Shop
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
