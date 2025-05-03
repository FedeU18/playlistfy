import React, { useState, useEffect } from "react";

const Carousel = ({ title, items, renderItem }) => {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  //cambia la cant de cards dependiendo del tamaño de la pantalla
  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(1); //celulares
      } else if (width < 768) {
        setItemsPerPage(2); //sm tablets
      } else if (width < 1024) {
        setItemsPerPage(3); //md tablets
      } else if (width < 1280) {
        setItemsPerPage(4); //notebooksxd
      } else {
        setItemsPerPage(5); //pantalals grandes grandes
      }
    };

    updateItemsPerPage(); //inicial
    window.addEventListener("resize", updateItemsPerPage); //cuando cambia el tamaño

    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

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