import { useLoaderData } from "react-router-dom"
import { useEffect, } from "react";
import { Card } from "../components/card/card";


export const HtmlPage = () => {
  const loader = useLoaderData()

  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className="wrap pd_vertical flex">
      <div className="content__wrapper">
        {
          loader.map((el) => {
            if (el.category === 'html') {
              return (
                <Card el={el} key={el.id}/>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export const htmlLoader = async () => {
  const res = await fetch('data.json');
  return res.json();
}