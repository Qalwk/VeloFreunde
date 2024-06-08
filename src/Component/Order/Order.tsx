import { Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import "./Order.css"

interface OrderProps {
    setIsOrderOpen: Dispatch<SetStateAction<boolean>>;
}

const Order: React.FC<OrderProps> = ({ setIsOrderOpen}) => {



  return (
    <div className="Order">
        <div className="Modal-close-button" onClick={() => {setIsOrderOpen(false)}}>
          X
        </div>
      <span className="Order-title">E-Mail Beratung</span>
      <div className="Order-wrap">
        <input type="text" placeholder="Vorname"  />
        <input type="text" placeholder="Nachname" />
        <input type="mail" placeholder="E-Mail" />
      </div>
      <Button Text="BERATUNG" onClick={() => {setIsOrderOpen(false)}}/>
    </div>
  )
}

export default Order
