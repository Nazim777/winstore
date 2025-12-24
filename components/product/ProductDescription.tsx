import { Product } from "@/types/product";

const ProductDescription = ({ product }: { product: Product }) => {
  return (
    <div className="mb-8">
      <h3 className="font-bold text-gray-900 mb-2">Description</h3>
      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
        {product.description}
      </p>
    </div>
  );
};

export default ProductDescription;
