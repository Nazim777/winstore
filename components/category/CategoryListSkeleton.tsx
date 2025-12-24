export default function CategoryListSkeleton() {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="h-4 w-20 rounded bg-gray-200 animate-pulse"
        />
      ))}
    </div>
  );
}
