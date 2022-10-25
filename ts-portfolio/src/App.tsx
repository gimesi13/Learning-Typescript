import { Suspense } from "react";
/* pages */
import { MainPage } from "pages/MainPage";
import { Imprint } from "pages/Imprint";
/* router */
import { Route, Routes } from "react-router-dom";
/* Translation package */
/* import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next"; */
/* Languages */
/* import En from "./languages/en.json";
import Hu from "./languages/hu.json"; */

/* LANGUAGES */
/* const translationsEn = En;
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
  }); */
/* LANGUAGES END */

const App: React.FC = () => {
  /* useTranslation hook */
  /* const { t } = useTranslation(); */
  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/imprint" element={<Imprint />}></Route>
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
