import "./HeroCard.css"
import One from "../../assets/Hero/Group 248.png"
import Button from "../Button/Button"

const HeroCard = () => {
  return (
    <div className="HeroCard">
      <div className="HeroCard-btn">
        <Button Mode={false} Text="BUY" />
      </div>
      <div className="HeroCard-title">
        <div style={{ width: "2px", height: "61px", backgroundColor: "white" }}></div>
        <p className="HeroCard-title-text">CUBE NUROAD Race FE <br></br> Gravel Bike - 2023</p>
      </div>
      <div className="HeroCard-back">
        <img src={One} alt="" />
      </div>
    </div>
  )
}

export default HeroCard
