import { useLoaderData } from "react-router-dom"
import { useEffect, } from "react";
import { Card } from "../components/card/card";


export const WorkPage = () => {
  const loader = useLoaderData()
  
  useEffect(() => window.scrollTo(0, 0));
  
  return (
    <div className="wrap pd_vertical flex">
      <div className="content__wrapper">
        {
          loader.map((el) => {
            if (el.category === 'work') {
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

export const workLoader = async () => {
  const res = await fetch('https://raw.githubusercontent.com/Chaooohs/JSON-resume/master/data.json');
  return res.json();
}