import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Lang, type Translations } from "../../i18n/translations";

interface LanguageContextType {
  lang: Lang;
  t: Translations;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "vi" ? "vi" : "en";
  });
  const t = translations[lang];
  const toggleLang = () =>
    setLang((l) => {
      const next = l === "en" ? "vi" : "en";
      localStorage.setItem("lang", next);
      return next;
    });

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
