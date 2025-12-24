const Hero: React.FC = () => {
  return (
    <section className="w-full h-[500px] overflow-hidden bg-[#F1F8F6] flex items-center">
      <div className="container mx-auto px-4 md:px-12 grid md:grid-cols-2 items-center gap-8 relative">
        <div>
          <h2 className="text-4xl md:text-6xl font-light text-gray-800 leading-tight">
            Shop <span className="text-win-primary font-medium">Computer</span> <br />
            & experience
          </h2>
          <p className="text-gray-500 mt-4 max-w-md">
            You Cannot Inspect Quality Into The Product; It Is Already There.
          </p>
          <button className="mt-8 bg-[#14B1F0] cursor-pointer text-white px-10 py-3 rounded-md hover:bg-cyan-600 transition-colors shadow-lg">
            View More
          </button>
        </div>
        <div className="relative flex justify-center items-center h-full">
          <div className="absolute top-10 right-10 bg-yellow-400 text-white w-28 h-28 rounded-full flex flex-col items-center justify-center text-center shadow-xl border-4 border-white">
             <span className="text-2xl font-bold">40%</span>
             <span className="text-sm font-medium">Off</span>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop" 
            alt="Headphones" 
            className="w-full max-w-md object-contain z-0"
          />
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-8 h-2 bg-win-dark rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero