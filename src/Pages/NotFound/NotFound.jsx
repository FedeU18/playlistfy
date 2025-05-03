import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>404 || NOT FOUND || te re fuiste crack</h1>
      <button onClick={() => navigate("/")}>Volver a Home</button>
    </>
  );
};

export default NotFound;
