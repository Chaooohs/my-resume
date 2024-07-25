import { About } from "../components/about"
import { Front } from "../components/front"
import { Projects } from "../components/projects"
import { Work } from "../components/work"

export const MainPage = () => {
  return (
    <>
      <Front />
      <About />
      <Projects />
      <Work/>
    </>
  )
}