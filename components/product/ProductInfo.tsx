import { Product } from "@/types/product";
import ProductHeader from "./ProductHeader";
import ProductPrice from "./ProductPrice";
import ProductDescription from "./ProductDescription";
import ProductQuantity from "./ProductQuantity";
import ProductActions from "./ProductActions";
import ProductFeatures from "./ProductFeatures";


const ProductInfo = ({ product }: { product: Product }) => {
  return (
    <div className="w-full md:w-1/2">
      <ProductHeader product={product} />
      <ProductPrice product={product} />
      <ProductDescription product={product} />
      <ProductQuantity />
      <ProductActions />
      <ProductFeatures />
    </div>
  );
};

export default ProductInfo;
