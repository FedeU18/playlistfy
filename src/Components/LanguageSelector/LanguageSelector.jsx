import { useTranslation } from "react-i18next";

const LanguageSelector = ({ isOpen, onClose }) => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-[1000]"
      onClick={onClose}
    >
      <div
        className="bg-[var(--negro)] p-8 rounded-lg min-w-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[var(--color4)] text-2xl mb-6 text-center">
          {t("select language")}
        </h2>
        <div className="flex flex-col gap-4">
          <button
            className="py-3 px-6 bg-transparent border border-[var(--color4)] text-[var(--color4)] rounded cursor-pointer transition-all duration-200 grid grid-cols-[2rem_1fr] items-center min-w-[200px] hover:bg-[var(--color4)] hover:text-[var(--negro)]"
            onClick={() => handleLanguageChange("es")}
          >
            <img
              src="https://flagicons.lipis.dev/flags/4x3/es.svg"
              alt="ES"
              className="w-8"
            />
            Español
          </button>
          <button
            className="py-3 px-6 bg-transparent border border-[var(--color4)] text-[var(--color4)] rounded cursor-pointer transition-all duration-200 grid grid-cols-[2rem_1fr] items-center min-w-[200px] hover:bg-[var(--color4)] hover:text-[var(--negro)]"
            onClick={() => handleLanguageChange("en")}
          >
            <img
              src="https://flagicons.lipis.dev/flags/4x3/gb.svg"
              alt="GB"
              className="w-8"
            />
            English
          </button>
          <button
            className="py-3 px-6 bg-transparent border border-[var(--color4)] text-[var(--color4)] rounded cursor-pointer transition-all duration-200 grid grid-cols-[2rem_1fr] items-center min-w-[200px] hover:bg-[var(--color4)] hover:text-[var(--negro)]"
            onClick={() => handleLanguageChange("pt")}
          >
            <img
              src="https://flagicons.lipis.dev/flags/4x3/pt.svg"
              alt="PT"
              className="w-8"
            />
            Português
          </button>
          <button
            className="py-3 px-6 bg-transparent border border-[var(--color4)] text-[var(--color4)] rounded cursor-pointer transition-all duration-200 grid grid-cols-[2rem_1fr] items-center min-w-[200px] hover:bg-[var(--color4)] hover:text-[var(--negro)]"
            onClick={() => handleLanguageChange("de")}
          >
            <img
              src="https://flagicons.lipis.dev/flags/4x3/de.svg"
              alt="DE"
              className="w-8"
            />
            Deutsch
          </button>
          <button
            className="py-3 px-6 bg-transparent border border-[var(--color4)] text-[var(--color4)] rounded cursor-pointer transition-all duration-200 grid grid-cols-[2rem_1fr] items-center min-w-[200px] hover:bg-[var(--color4)] hover:text-[var(--negro)]"
            onClick={() => handleLanguageChange("fr")}
          >
            <img
              src="https://flagicons.lipis.dev/flags/4x3/fr.svg"
              alt="FR"
              className="w-8"
            />
            Français
          </button>
          <button
            className="py-3 px-6 bg-transparent border border-[var(--color4)] text-[var(--color4)] rounded cursor-pointer transition-all duration-200 grid grid-cols-[2rem_1fr] items-center min-w-[200px] hover:bg-[var(--color4)] hover:text-[var(--negro)]"
            onClick={() => handleLanguageChange("it")}
          >
            <img
              src="https://flagicons.lipis.dev/flags/4x3/it.svg"
              alt="IT"
              className="w-8"
            />
            Italiano
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
