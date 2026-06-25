import { motion } from "framer-motion";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { TechStack } from "./components/TechStack/TechStack";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Publication from "./components/Publication/Publication";
import Experience from "./components/Experience/Experience";
import { ScrollProgress } from "./components/common/ScrollProgress";
import { BackToTop } from "./components/common/BackToTop";

function App() {
  return (
    <motion.div
      className={styles.App}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 0.8, 0.46, 0.97] }}
    >
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Publication />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
      <BackToTop />
    </motion.div>
  );
}

export default App;
