import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold mb-4">404 || NOT FOUND || te re fuiste crack</h1>
      <img src="../../../public/yoese.jpg" className="w-110 h-auto mb-4" alt="Imagen no encontrada" />
      <button 
        onClick={() => navigate("/")} 
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Volver a Home
      </button>
    </div>
  );
};

export default NotFound;