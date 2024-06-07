import "./VeloCard.css"
import Button from '../Button/Button'
import { Dispatch, SetStateAction, useState } from "react";
import ModelBuy from "../ModelBuy/ModelBuy";

interface VeloCardProps {
    Text: string;
    Img: string;
    Price: string;
    key: string;
    id: number;
    Description: string;
    setVeloType: Dispatch<SetStateAction<number>>;
    veloType: number;
    Photo1?: any;
    Photo2?: string;
    Photo3?: string;
    Photo4?: string;
  }

const VeloCard: React.FC<VeloCardProps> = ({ Text, Img, Price, id, Description, Photo1, 
                                          Photo2, Photo3, Photo4, veloType, setVeloType }) => {

  const Types = (id:number) => {
    console.log(id, veloType);
    setVeloType(id);
  }

  return (
    <div className='VeloCard'>
      <p className='VeloCard-p'>{Text}</p>
      <div className="VeloCard-wrap">
        <div className='VeloCard-wrapper-img'>
          <img className='VeloCard-img' src={Img} alt="IMG" />
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
                <ModelBuy Text={Text} Price={Price} Img={Img} Description={Description} 
                Photo1={Photo1} Photo2={Photo2} Photo3={Photo3} Photo4={Photo4} />
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default VeloCard
