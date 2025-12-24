import { lazy, Suspense } from 'react';
const Products = lazy(() => import('@/components/product/Products'));
import SkeletonWrapper from '@/components/product/SkeletonWrapper';

const Home = () => {
  return (
    <Suspense fallback={<SkeletonWrapper type="products" count={12}/>}>
      <Products />
    </Suspense>
  );
};

export default Home;

