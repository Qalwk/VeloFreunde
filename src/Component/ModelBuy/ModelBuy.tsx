import { useState } from "react";
import Button from "../Button/Button";
import Slider from "../Slider/Slider";
import "./ModelBuy.css"
import Order from "../Order/Order";

interface ModelBuyProps {
    Text: string;
    Img: string;
    Price: string;
    Description: string;
    Photo1: string;
    Photo2?: string;
    Photo3?: string;
    Photo4?: string;
  }

const ModelBuy: React.FC<ModelBuyProps> = ({Text, Img, Price, Description, Photo1, Photo2, Photo3, Photo4}) => {

const [isOrderOpen, setIsOrderOpen] = useState(false)

const handleOrderOpen = () => {
  setIsOrderOpen(!isOrderOpen); 
};

return (
    <div className='ModelBuy'>
      <h1 className="ModelBuy_h1" >{Text}</h1>
      <div className='ModelBuy_wrap'>
        <div className="ModelBuy_wrap-buy">
            <Slider Img={Img} Photo1={Photo1} Photo2={Photo2} Photo3={Photo3} Photo4={Photo4} />
            <div className="ModelBuy_wrap-buy-price">
                <h1>{Price}  €</h1>
                <Button Text="BERATUNG" onClick={handleOrderOpen} />
            </div>
        </div>
        <div className="ModelBuy_wrap-info">
            <h2>{Text}</h2>
            <p className="ModelBuy_p" style={{whiteSpace: "pre-wrap"}}>{Description}</p>
        </div>
      </div>
      {
        isOrderOpen &&
        <div className="Blur-eff">
          <div className="ModelBuy-order">
              <Order setIsOrderOpen={setIsOrderOpen} />
          </div>
        </div> 
      }

    </div>
  )
}

export default ModelBuy
