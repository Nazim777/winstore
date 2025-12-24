import React from "react";

interface ScrollButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  direction,
  onClick,
}) => {
  const isLeft = direction === "left";

  return (
    <button
      onClick={onClick}
      aria-label={isLeft ? "Previous category" : "Next category"}
      className={`absolute ${
        isLeft ? "left-2 md:left-4" : "right-2 md:right-4"
      } top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md z-20 hover:bg-gray-50 transition-colors cursor-pointer`}
    >
      <svg
        className="w-4 h-4 text-gray-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        {isLeft ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </button>
  );
};

export default ScrollButton;
