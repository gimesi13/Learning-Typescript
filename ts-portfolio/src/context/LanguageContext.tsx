import { createContext, ReactNode } from "react";
/* Translation package */
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
/* Languages */
import En from "../languages/en.json";
import Hu from "../languages/hu.json";

interface TranslationsContextItnterface {
  //have to figure out how to pass objects as Trans children
  children: ReactNode;
}
/* LANGUAGES */
const translationsEn = En;
const translationsHu = Hu;

i18n
  .use(initReactI18next) //passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: translationsEn },
      hu: { translation: translationsHu },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
/* LANGUAGES END */

const TranslationsContext = createContext<
  TranslationsContextItnterface | object
>({});
export function Translations({ children }: TranslationsContextItnterface) {
  /* useTranslation hook */
  const { t } = useTranslation();

  return (
    <TranslationsContext.Provider value={{ t }}>
      {children}
    </TranslationsContext.Provider>
  );
}
