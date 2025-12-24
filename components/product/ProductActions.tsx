import { ShoppingCart } from "lucide-react";

const ProductActions = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      <button className="flex-grow bg-win-primary cursor-pointer text-white px-8 py-4 rounded-md font-bold flex items-center justify-center gap-3">
        <ShoppingCart size={18} />
        ADD TO CART
      </button>
      <button className="flex-grow cursor-pointer bg-win-dark text-white px-8 py-4 rounded-md font-bold">
        BUY NOW
      </button>
    </div>
  );
};

export default ProductActions;
