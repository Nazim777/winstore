import React from "react";
import { ProductSkeleton } from "./Skeleton";
import CategorySkeleton from "../category/CategorySkeleton";

interface SkeletonWrapperProps {
  type: "products" | "categories";
  count?: number;
}

const SkeletonWrapper: React.FC<SkeletonWrapperProps> = ({
  type,
  count = 6,
}) => {
  const items = Array.from({ length: count });

  if (type === "products") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 p-4">
        {items.map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (type === "categories") {
    return (
      <div className="flex gap-4 overflow-x-auto p-4">
        {items.map((_, i) => (
          <CategorySkeleton key={i} />
        ))}
      </div>
    );
  }

  return null;
};

export default SkeletonWrapper;
