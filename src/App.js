import Landing from "./pages/landing";
import NavBar from "./components/navBar";
import {} from "./styles/app.module.scss";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import About from "./pages/about";
import ContactMe from "./pages/contact";

function App() {
  return (
    <div>
      <NavBar />
      <Landing />
      <Projects />
      <Skills />
      <About />
      <ContactMe />
    </div>
  );
}

export default App;
