import { createContext, useContext } from 'react';

const LangContext = createContext({});

export function LanguageProvider({ children, lang }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export const useLangContext = () => useContext(LangContext);
