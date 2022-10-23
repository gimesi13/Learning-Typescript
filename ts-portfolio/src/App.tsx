/* components */
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero name={{ firstName: "Gergely", lastName: "Gimesi" }} age={26} />
    </div>
  );
};

export default App;
