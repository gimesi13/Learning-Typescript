import { Suspense } from "react";
/* pages */
import { MainPage } from "pages/MainPage";
import { Imprint } from "pages/Imprint";
/* router */
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
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
