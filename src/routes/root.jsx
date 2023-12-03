import { Outlet } from "react-router-dom"
import { Footer } from "../components/footer"
import { Header } from "../components/header"


export const Root = () => {
  return (
    <div className="page">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}


export const jsonLoader = async () => {
  const res = await fetch('https://raw.githubusercontent.com/Chaooohs/JSON-resume/master/data.json');
  return res.json();
}
