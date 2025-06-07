import { useState, Dispatch, SetStateAction } from "react";
import Button from "../Button/Button";
import "./Order.css"

interface OrderProps {
    setIsOrderOpen: Dispatch<SetStateAction<boolean>>;
    onConsultationSubmit: (data: { vorname: string; nachname: string; mail: string }) => void;
}

const Order: React.FC<OrderProps> = ({ setIsOrderOpen, onConsultationSubmit }) => {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [mail, setMail] = useState("");

  const handleSubmit = () => {
    onConsultationSubmit({ vorname, nachname, mail });
    setIsOrderOpen(false);
  };

  return (
    <div className="Order">
        <div className="Modal-close-button" onClick={() => {setIsOrderOpen(false)}}>
          X
        </div>
      <span className="Order-title">E-Mail Beratung</span>
      <div className="Order-wrap">
        <input type="text" placeholder="Vorname" value={vorname} onChange={(e) => setVorname(e.target.value)} />
        <input type="text" placeholder="Nachname" value={nachname} onChange={(e) => setNachname(e.target.value)} />
        <input type="mail" placeholder="E-Mail" value={mail} onChange={(e) => setMail(e.target.value)} />
      </div>
      <Button Text="BERATUNG" onClick={handleSubmit} />
    </div>
  )
}

export default Order
