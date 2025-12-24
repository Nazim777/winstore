'use client';

import React, { lazy, Suspense } from 'react';
const ProductDetails = lazy(() => import('@/components/product/ProductDetails'));
import { ProductDetailSkeleton } from '@/components/product/Skeleton';
const ProductDetailsPage: React.FC = () => {
  return (
    <Suspense fallback={<ProductDetailSkeleton/>}>
      <ProductDetails />
    </Suspense>
  );
};

export default ProductDetailsPage;