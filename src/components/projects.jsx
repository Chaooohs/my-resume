import { useLoaderData, Link } from "react-router-dom"
import { Caorusel } from "./carousel/carousel"


export const Projects = () => {
  const json = useLoaderData()

  const mainHtml = json.filter((el) => {
    if (el.main === 'html') {
      return el
    }
  })

  const reactMain = json.filter((el) => {
    if (el.main === 'react') {
      return el
    }
  })

  return (
    <section style={{ flex: "1" }}>
      <div className="projects wrap pd_vertical" id="projects">
        <h1 className="projects__title txt_lg txt_light txt_up">
          <span>My educational</span>
          <span>_projects</span>
        </h1>
        <div className="projects__layout">
          <div className="projects__items">

          <Caorusel main={mainHtml} />

          <p className="txt_sm txt_light">Technology: HTML5, CSS3, JS</p>

          <Link
            to={'html'}
            className="projects__btn btn txt_btn tr txt_light txt_up"
          >
            more works&#65343;
          </Link>

        </div>
        <div className="projects__items">
          
          <Caorusel main={reactMain} />

          <p className="txt_sm txt_light">Technology: React.js</p>

          <Link
              to={'react'}
              className="projects__btn btn txt_btn tr txt_light txt_up"
            >
              more works&#65343;
            </Link>

        </div>
      </div>
    </div>
    </section >
  )
}