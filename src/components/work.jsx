import { useLoaderData, Link } from "react-router-dom"
import { Caorusel } from "./carousel/carousel"


export const Work = () => {
  const json = useLoaderData()

  const mainWorks = json.filter((el) => {
    if (el.main === 'work') {
      return el
    }
  })

  // const reactMain = json.filter((el) => {
  //   if (el.main === 'react') {
  //     return el
  //   }
  // })

  return (
    <section style={{ flex: "1" }}>
      <div className="projects pd_vertical bg_grey" id="projects">
        <div className="wrap">
          <h1 className="projects__title txt_lg txt_dark txt_up work-title">
            <span>My work</span>
            <span>_projects</span>
            <span className="work-title__span">work</span>
          </h1>
          <div className="projects__layout">
            <div className="projects__items">
              <Caorusel main={mainWorks} />
              <Link
                to={'#!'}
                className="projects__btn btn txt_btn tr txt_light txt_up"
                style={{ marginTop: '60px' }}
              >
                {/* more works&#65343; */}
              </Link>
            </div>
            {/* <div className="projects__items">
        
            <Caorusel main={reactMain} />
            <p className="txt_sm txt_light">Technology: React.js</p>
            <Link
                to={'react'}
                className="projects__btn btn txt_btn tr txt_light txt_up"
              >
                more works&#65343;
              </Link>
          </div> */}
          </div>
        </div>
      </div>
    </section >
  )
}