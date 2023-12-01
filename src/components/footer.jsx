import github from "../img/github.svg"
import linkedin from "../img/linkedin.svg"

export const Footer = () => {
  return (
    <footer>
      <div className="footer bg_grey">
        <div className="wrap">
          <div className="footer__content">
            <div>
              <h3 className="footer__name txt_dark txt_sm mg-0"> Synov Evgen </h3>
              <p className="txt_dark txt_sm mg-0"> Frontend Developer </p>
            </div>
            <div>
              <a className="txt_dark txt_sm" href="mailto:01nikka01@gmail.com">01nikka01@gmail.com</a>
            </div>
            <div className="footer__icons">
              <a className="footer__icon" href="https://github.com/Chaooohs" target="_blank">
                <img className="footer__icon" src={github} alt="" />
              </a>
              <a className="footer__icon" href="http://surl.li/mlnvj" target="_blank">
                <img className="footer__icon" src={linkedin} alt="" />
              </a>
            </div>
          </div>
          <div className="footer__copy">
            This project is made in React.js
          </div>
        </div>
      </div>
    </footer>
  )
}