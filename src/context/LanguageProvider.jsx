import { useEffect, useMemo, useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { translations } from "../i18n/translations";

const SUPPORTED = Object.keys(translations);
const STORAGE_KEY = "lang";

const detectInitialLang = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED.includes(stored)) return stored;
  } catch {
    // storage unavailable (private mode etc.) - fall through to detection
  }

  const browserLang = (navigator.language || "").slice(0, 2).toLowerCase();
  return SUPPORTED.includes(browserLang) ? browserLang : "en";
};

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // storage unavailable - language simply won't persist
    }
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] || translations.en }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
