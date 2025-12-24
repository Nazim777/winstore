import { Truck, RotateCw } from "lucide-react";

const ProductFeatures = () => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100">
      <Feature icon={<Truck size={20} />} title="Free Shipping" desc="On orders over RS. 5000" />
      <Feature icon={<RotateCw size={20} />} title="7 Days Return" desc="Hassle free returns" />
    </div>
  );
};

const Feature = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-win-primary">
      {icon}
    </div>
    <div className="text-xs">
      <p className="font-bold">{title}</p>
      <p className="text-gray-400">{desc}</p>
    </div>
  </div>
);

export default ProductFeatures;
