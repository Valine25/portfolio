import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { TechStack } from "./components/TechStack/TechStack";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Education/>
      <TechStack/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
