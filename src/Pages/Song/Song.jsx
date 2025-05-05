import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Song = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="max-w-6xl mx-auto bg-[#030303e5] text-white p-4 sm:p-6 md:p-10 rounded-[20px] sm:rounded-[30px] md:rounded-[40px] mb-5">
      <button
        className="mb-6 border py-2 px-3 rounded bg-[var(--color1)] text-[var(--color4)] hover:bg-[var(--color2)]"
        onClick={() => navigate("/")}
      >
        {t("back")}
      </button>

      <iframe
        style={{ borderRadius: "12px" }}
        src={`https://open.spotify.com/embed/track/${id}?utm_source=generator`}
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="w-full"
      ></iframe>
    </div>
  );
};

export default Song;