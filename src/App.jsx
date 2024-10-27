import { useContext } from "react"
import Navbar from "./components/Navbar/Navbar"
import { ThemeContext } from "./contexts/ThemeContext"
import SkillSection from "./components/SkillSection/SkillSection"
import About from "./components/About/About"
import ProjectSection from "./components/ProjectsSection/ProjectSection"

function App() {
  const { darkTheme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className={`app ${darkTheme ? "dark": ""}`}>
      <Navbar />
      <About />
      <ProjectSection />
      <SkillSection />
    </div>
  )
}

export default App
