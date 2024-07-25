import { useEffect, useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import { Burger } from "../components/burger/burger"
import { useClickOutside } from '../hooks/useClickOutside'
import { hideHeader } from "../metods/hideHeader"

export const Header = () => {
  const isTablet = useMediaQuery({ maxWidth: 1024 })

  const [isOpen, setOpen] = useState(false)
  useEffect(() => document.body.classList.toggle('no-scroll', isOpen)[isOpen])

  const ref = useRef()
  useClickOutside(ref, () => setOpen(false))

  hideHeader()

  return (
    <header>
      <div className={`header ${isOpen ? "open" : ""} wrap`}>
        <nav ref={ref}>
          <div className="nav">
            <NavLink
              className="nav__link tr txt_sm txt_up"
              to="/"
              onClick={() => setOpen(!isOpen)}
            >
              main
            </NavLink>
            <NavLink
              className="nav__link tr txt_sm txt_up"
              to="html"
              onClick={() => setOpen(!isOpen)}
            >
              html
            </NavLink>
            <NavLink
              className="nav__link tr txt_sm txt_up"
              to="react"
              onClick={() => setOpen(!isOpen)}
            >
              react
            </NavLink>
            <NavLink
              className="nav__link tr txt_sm txt_up"
              to="work"
              onClick={() => setOpen(!isOpen)}
            >
              work
            </NavLink>
            {
              isTablet &&
              <a className="txt_dark txt_sm txt_bold" href="mailto:01nikka01@gmail.com">01nikka01@gmail.com</a>
            }
          </div>
          <Burger onBurger={() => setOpen(!isOpen)} />
        </nav>
      </div>
    </header>
  )
}