import ProductCard from "@/components/product/ProductCard";
import { ProductSkeleton } from "@/components/product/Skeleton";
import { getAllProducts } from "@/app/actions/products";
import { useFetch } from "@/hooks/useFetch";

const NewArrivals: React.FC = () => {
  const {
    data: products,
    loading,
    error,
  } = useFetch(() => getAllProducts().then((res) => res?.slice(0, 6)), []);

  return (
    <section className="py-12 px-4 md:px-12 bg-white">
      <h2 className="text-2xl font-bold mb-8">
        <span className="text-win-primary">New</span> Arrivals
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => <ProductSkeleton key={i} />)
        ) : error ? (
          <div className="col-span-full p-8 text-center text-gray-500 bg-gray-50 rounded-lg">
            {error}
          </div>
        ) : (
          products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
