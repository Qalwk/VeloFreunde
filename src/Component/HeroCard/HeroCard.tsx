import "./HeroCard.css"
import One from "../../assets/Hero/Group 248.png"
import Button from "../Button/Button"

const HeroCard = () => {
  return (
    <div className="HeroCard">
      <div className="HeroCard-btn">
        <Button Mode={false} Text="BUY" onClick={() => window.location.hash = "#info-section"} />
      </div>
      <div className="HeroCard-title">
        <div className="Line"></div>
        <p className="HeroCard-title-text">CUBE NUROAD Race FE <br></br> Gravel Bike - 2023</p>
      </div>
      <div className="HeroCard-back">
        <img src={One} alt="" />
      </div>
    </div>
  )
}

export default HeroCard
