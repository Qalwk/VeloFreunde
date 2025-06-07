import Button from "../Button/Button";
import Slider from "../Slider/Slider";
import "./ModelBuy.css"

interface ModelBuyProps {
    Text: string;
    Price: string;
    Description: string;
    images: string[];
  }

const ModelBuy: React.FC<ModelBuyProps> = ({Text, Price, Description, images}) => {

return (
    <div className='ModelBuy'>
      <h1 className="ModelBuy_h1" >{Text}</h1>
      <div className='ModelBuy_wrap'>
        <div className="ModelBuy_wrap-buy">
            <Slider images={images} />
            <div className="ModelBuy_wrap-buy-price">
                <h1>{Price}  €</h1>
                <Button Text="BERATUNG" />
            </div>
        </div>
        <div className="ModelBuy_wrap-info">
            <h2>{Text}</h2>
            <p className="ModelBuy_p" style={{whiteSpace: "pre-wrap"}}>{Description}</p>
        </div>
      </div>
    </div>
  )
}

export default ModelBuy
