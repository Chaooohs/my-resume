import "./card.css"

export const Card = ({ el }) => {
  return (
    <div className="card">
      <img className="card__img" src={el.workImage} alt="img" />
      <p className="txt_sm txt_light">{el.workSkill}&emsp;&#65343;{el.note}</p>
      <a
        className="card__link btn txt_btn txt_light txt_up tr"
        href={el.workLink}
        target="_blank"
      >
        {el.workName}&#65343;
      </a>
    </div>
  )
}