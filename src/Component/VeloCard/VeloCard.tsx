import "./VeloCard.css"
import Button from '../Button/Button'
import { Dispatch, SetStateAction } from "react";
import ModelBuy from "../ModelBuy/ModelBuy";

interface VeloCardProps {
    Text: string;
    Price: string;
    key: string;
    id: number;
    Description: string;
    setVeloType: Dispatch<SetStateAction<number>>;
    veloType: number;
    images: string[];
  }

const VeloCard: React.FC<VeloCardProps> = ({ Text, Price, id, Description, images, veloType, setVeloType }) => {

  const Types = (id:number) => {
    console.log(id, veloType);
    setVeloType(id);
  }

  return (
    <div className='VeloCard'>
      <p className='VeloCard-p'>{Text}</p>
      <div className="VeloCard-wrap">
        <div className='VeloCard-wrapper-img'>
          <img className='VeloCard-img' src={images[0]} alt="IMG" />
        </div>
        <div className="VeloCard-wrap-price">
          <p className='VeloCard-price'>{Price} €</p>
          <div className="VeloCard-btn">
            <Button Mode={false} Text="QUICKVIEW" onClick={() => Types(id)} />
          </div>
        </div>
      </div>
      {veloType === id && (
          <div className="Modal-wrapper">
            <div className="Modal">
              <div className="Modal-close-button" onClick={() => {setVeloType(0)}}>
                X
              </div>
              <div className="Modal-Comp">
                <ModelBuy Text={Text} Price={Price} images={images} Description={Description} />
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default VeloCard
