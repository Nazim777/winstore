import { Product } from "@/types/product";
import { CheckCircle } from "lucide-react";

const ProductPrice = ({ product }: { product: Product }) => {
  return (
    <div className="border-y border-gray-100 py-6 mb-6">
      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold text-win-primary">
          RS. {(product.price * 100).toFixed(0)}
        </span>
        <span className="text-xl text-gray-400 line-through">
          RS. {(product.price * 105).toFixed(0)}
        </span>
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
          5% OFF
        </span>
      </div>

      <p className="text-green-600 text-sm mt-2 flex items-center gap-1">
        <CheckCircle size={16} /> In stock, ready to ship
      </p>
    </div>
  );
};

export default ProductPrice;
