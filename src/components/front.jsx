import Laptop from "../img/laptop.svg"
import MuPhoto from "../img/my-photo.jpg"
import { Experience } from "./experience/experience"

export const Front = () => {
  return (
    <section>
      <div className="front wrap pd_vertical bg_dark">
        <div className="front__info">
          <h1 className="front__name txt_md txt_accent txt_up mg-0">{`[Synov Evgen]`}</h1>
          <h2 className="front__profession txt_lg txt_light">
            <span className="front__part1">{`{FRONTEND}`}</span>
            <span className="front__part2">_DEVELOPER</span>
          </h2>
          <p className="front__descr txt_sm txt_light">
            / Using HTML, CSS, JavaScript, React.js. I help to build websites, small and medium web apps for business
          </p>
          {/* <img src={MuPhoto} alt="laptop" className="front__myphoto" /> */}
        </div>
        <img src={Laptop} alt="laptop" className="front__laptop" />
        <Experience />
      </div>
    </section>
  )
}