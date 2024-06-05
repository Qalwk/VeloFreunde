import "./Hero.css"
import Button from '../../Component/Button/Button'
import HeroCard from "../../Component/HeroCard/HeroCard"
import { useRef } from "react";

const Hero: React.FC = () => {
  
  interface handleClickScrolProps {
    id?: string;
    navLink?: any;
  }

  const handleClickScrol = ({ navLink }: handleClickScrolProps) => {
    const element = document.getElementById(navLink);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
      <div className='hero'>
        <div className='hero-wrapper'>
          <h1 className='hero-h1'>Willkommen <br></br> bei VeloFreunde!</h1>
          <h2 className='hero-h2'>Finden Sie Ihr perfektes Fahrrad bei uns.</h2>
          <Button Text="MORE" onClick={() => handleClickScrol({ navLink: "#info-section"})}/>
        </div>
        <div className="hero-card">
          <HeroCard />
        </div>
      </div>
  )
}

export default Hero
