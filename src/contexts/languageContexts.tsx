"use client";

import { createContext, FC, ReactNode, useState } from "react";

// context config
interface ILangaugeContexts {
  language: string;
  setLanguage: (lang: string) => void;
}

export const LanguageContexts = createContext<ILangaugeContexts>({
  language: "en",
  setLanguage: () => {},
});

// provider component config
interface ILanguageProvider {
  children: ReactNode;
}

const LanguageProvider: FC<ILanguageProvider> = ({ children }) => {
  const [language, setLanguage] = useState<string>("en");
  return (
    <LanguageContexts.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContexts.Provider>
  );
};

export default LanguageProvider;
