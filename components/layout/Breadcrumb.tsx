import { useRouter } from 'next/navigation';
import { Product } from "@/types/product";

interface BreadcrumbProps{
    product:Product
}
const Breadcrumb = ({product}:BreadcrumbProps) => {
    const router = useRouter()
  return(
    <div className="bg-gray-50 py-4 border-b border-gray-100">
    <div className="container mx-auto px-4 md:px-12">
      <nav className="text-sm text-gray-500 flex items-center gap-2">
        <button
          onClick={() => router.push("/")}
          className="hover:text-win-primary transition-colors cursor-pointer"
        >
          Home
        </button>
        <span className="text-gray-400 text-[10px]">{">"}</span>
        <span className="capitalize">{product.category}</span>
        <span className="text-gray-400 text-[10px]">{">"}</span>
        <span className="text-gray-900 font-medium truncate max-w-[200px] md:max-w-none">
          {product.title}
        </span>
      </nav>
    </div>
  </div>
  )
};

export default Breadcrumb;
