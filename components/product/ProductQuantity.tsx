import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const ProductQuantity = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-6 mb-8">
      <span className="font-bold text-gray-900">Quantity</span>

      <div className="flex items-center border border-gray-200 rounded">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="px-4 py-2 border-r"
        >
          <Minus size={16} />
        </button>
        <span className="px-6 py-2 font-medium">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="px-4 py-2 border-l"
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProductQuantity;
