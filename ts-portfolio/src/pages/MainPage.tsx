/* components */
import { Hero } from "../components/Hero";
import { NavBar } from "../components/NavBar";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { BuiltWith } from "../components/BuiltWith";
import { Footer } from "../components/Footer";

export const MainPage: React.FC = (): JSX.Element => {
  return (
    <>
      <NavBar />
      <Hero name={{ firstName: "Gergely", lastName: "Gimesi" }} age={26} />
      <Skills />
      <Projects />
      <Contact />
      <BuiltWith />
      <Footer />
    </>
  );
};
