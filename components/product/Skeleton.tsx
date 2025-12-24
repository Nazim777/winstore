import React from 'react';

export const ProductSkeleton: React.FC = () => {
  return (
    <div className="bg-white p-4 border border-gray-100 rounded shadow-sm animate-pulse">
      <div className="w-full h-48 bg-gray-200 rounded mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
      <div className="h-8 bg-gray-200 rounded w-full"></div>
    </div>
  );
};


export const ProductDetailSkeleton: React.FC = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-12 animate-pulse">
      <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
        {/* Left: Image Skeleton */}
        <div className="w-full md:w-1/2 h-[500px] bg-gray-200 rounded-lg"></div>

        {/* Right: Info Skeleton */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="h-4 bg-gray-200 w-1/4 rounded"></div>
          <div className="h-10 bg-gray-200 w-3/4 rounded"></div>
          <div className="h-6 bg-gray-200 w-1/3 rounded"></div>
          <div className="h-24 bg-gray-200 w-full rounded"></div>
          <div className="flex items-center gap-4">
            <div className="h-8 bg-gray-200 w-24 rounded"></div>
            <div className="h-8 bg-gray-200 w-16 rounded"></div>
            <div className="h-6 bg-gray-200 w-12 rounded"></div>
          </div>
          <div className="h-12 bg-gray-200 w-full rounded"></div>
          <div className="h-12 bg-gray-200 w-full rounded"></div>
          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-gray-200 w-3/4 rounded"></div>
                <div className="h-2 bg-gray-200 w-1/2 rounded"></div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div className="flex-1 space-y-2">
                <div className="h-3 bg-gray-200 w-3/4 rounded"></div>
                <div className="h-2 bg-gray-200 w-1/2 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;

