import { Product } from "@/types/product";

const ProductGallery = ({ product }: { product: Product }) => {
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center border border-gray-100 rounded-lg p-8 shadow-sm">
      <img
        src={product.image}
        alt={product.title}
        className="max-h-[500px] w-auto object-contain transition-transform duration-500 hover:scale-110"
      />
    </div>
  );
};

export default ProductGallery;
