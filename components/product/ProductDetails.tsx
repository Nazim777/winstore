import { lazy, memo, Suspense } from "react";
import { useParams } from "next/navigation";
import { getProductById } from "@/app/actions/products";
import { ProductDetailSkeleton } from "./Skeleton";
import Error from "../common/Error";
import Breadcrumb from "../layout/Breadcrumb";
import { useFetch } from "@/hooks/useFetch";
const ProductGallery = lazy(() => import("./ProductGallery"));
const ProductInfo = lazy(() => import("./ProductInfo"));

const ProductDetails = () => {
  const { id } = useParams();

  const isValidId = typeof id === "string";

const { data: product, loading, error } = useFetch(
  () => (isValidId ? getProductById(id) : Promise.resolve(null)),
  [id]
);
  const MemoProductGallery = memo(ProductGallery);
  const MemoProductInfo = memo(ProductInfo);

  if (loading) return <ProductDetailSkeleton />;
  if (error || !product) return <Error errorMsg={error} isProductDetailsPage />;

  return (
    <div className="bg-white">
      <Breadcrumb product={product} />

      <div className="container mx-auto px-4 md:px-12 py-12">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          <Suspense fallback={<ProductDetailSkeleton />}>
            <MemoProductGallery product={product} />
          </Suspense>

          <Suspense fallback={<ProductDetailSkeleton />}>
            <MemoProductInfo product={product} />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
