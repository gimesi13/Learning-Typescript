/* components */
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
//import { Contact } from "./Components/Contact";
//import { Footer } from "./Components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero name={{ firstName: "Gergely", lastName: "Gimesi" }} age={26} />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
