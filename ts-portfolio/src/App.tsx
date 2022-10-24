import { Suspense } from "react";
/* pages */
import { MainPage } from "pages/MainPage";
/* router */
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          {/* <Route path="/asd" element={<Another />}></Route>
          <Route path="/ds" element={<Other />}></Route> */}
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
