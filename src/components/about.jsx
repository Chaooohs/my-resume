import Laptop from "../img/untitled.svg"

export const About = () => {
  return (
    <section>
      <div className="about bg_grey pd_vertical ">
        <div className="wrap">
          <div className="about__info">
            <h1 className="about__title txt_lg txt_dark txt_up mg-0">
              I code things from scratch_
            </h1>
            <p className="about__descr txt_md txt_light txt_up">
              <span className="about__descr-span bg_dark">{`[AND HELP TO`}</span>
              <span className="about__descr-span bg_dark">CREATE GREAT WEB</span>
              <span className="about__descr-span bg_dark">{`APPS]`}</span>
            </p>
            <p className="about__text txt_dark txt_sm">
              / In 2022-2023, I completed the 7education courses in the specialty Frontend developer. Have skills in working with&nbsp;
              <span className="txt_bold">
                HTML CSS SCSS JavaScript React.js Redux-Toolkit RTK-Query Tailwind Bootstrap MUI Git Figma JSON jQuery
              </span>
            </p>
            <p className="about__text txt_dark txt_sm">
              / I have two freelance job
            </p>
            <div className="about__img-container">
              <div className="about__img-text txt_lg txt_up">
                web
                <img src={Laptop} alt="img" className="about__img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}