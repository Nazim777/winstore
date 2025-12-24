import { useRouter } from "next/navigation";
interface ErrorProps {
  errorMsg: string | null;
  isProductDetailsPage?: boolean;
}
const Error = ({ errorMsg, isProductDetailsPage = false }: ErrorProps) => {
  const router = useRouter();
  return (
    <div className="text-center py-24">
      {isProductDetailsPage && (
        <h2 className="text-2xl font-bold text-red-500 mb-4">
          Error loading product
        </h2>
      )}
      <p className="text-red-600 mb-8">{errorMsg || "Something Went Wrong!"}</p>
      {isProductDetailsPage && (
        <button
          onClick={() => router.push("/")}
          className="bg-win-primary text-white px-8 py-3 rounded-md cursor-pointer"
        >
          Back to Shop
        </button>
      )}
    </div>
  );
};

export default Error;
