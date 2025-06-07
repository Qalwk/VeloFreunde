import { useState } from "react";
import Button from "../Button/Button";
import Slider from "../Slider/Slider";
import "./ModelBuy.css"
import Order from "../Order/Order";

interface ModelBuyProps {
    Text: string;
    Price: string;
    Description: string;
    images: string[];
  }

const ModelBuy: React.FC<ModelBuyProps> = ({Text, Price, Description, images}) => {

const [isOrderOpen, setIsOrderOpen] = useState(false)

const handleOrderOpen = () => {
  setIsOrderOpen(!isOrderOpen); 
};

const handleConsultationSubmit = async (data: { vorname: string; nachname: string; mail: string }) => {
  const { vorname, nachname, mail } = data;
  const bikeName = Text; // Get the bike name from the Text prop

  try {
    const response = await fetch("http://localhost:8080/php/send_consultation.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ vorname, nachname, mail, bikeName }),
    });

    const result = await response.json();
    if (result.status === "success") {
      alert("Ваша заявка на консультацию успешно отправлена!");
    } else {
      alert("Ошибка при отправке заявки: " + result.message);
    }
  } catch (error) {
    console.error("Ошибка при отправке формы: ", error);
    alert("Произошла ошибка сети. Пожалуйста, попробуйте еще раз.");
  }
};

return (
    <div className='ModelBuy'>
      <h1 className="ModelBuy_h1" >{Text}</h1>
      <div className='ModelBuy_wrap'>
        <div className="ModelBuy_wrap-buy">
            <Slider images={images} />
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
              <Order setIsOrderOpen={setIsOrderOpen} onConsultationSubmit={handleConsultationSubmit} />
          </div>
        </div> 
      }

    </div>
  )
}

export default ModelBuy
