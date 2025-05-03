import React, { useState } from "react";

const Carousel = ({ title, items, itemsPerPage = 5, renderItem }) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index + itemsPerPage < items.length) {
      setIndex(index + itemsPerPage);
    }
  };

  const prev = () => {
    if (index - itemsPerPage >= 0) {
      setIndex(index - itemsPerPage);
    }
  };

  const visibleItems = items.slice(index, index + itemsPerPage);

  return (
    <div className="w-full mb-6">
      <h2 className="text-4xl text-[var(--color1)]">{title}</h2>
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={prev}
          disabled={index === 0}
          className="bg-[var(--color1)] text-white px-4 py-2 rounded disabled:opacity-50"
        >
          ⬅
        </button>

        <div className="flex flex-wrap justify-evenly w-full">
          {visibleItems.map(renderItem)}
        </div>

        <button
          onClick={next}
          disabled={index + itemsPerPage >= items.length}
          className="bg-[var(--color1)] text-white px-4 py-2 rounded disabled:opacity-50"
        >
          ➡
        </button>
      </div>
    </div>
  );
};

export default Carousel;
