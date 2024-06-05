import PlusCard from "../../Component/PlusCard/PlusCard"
import Icon1 from "../../assets/Four/Category.svg"
import Icon2 from "../../assets/Four/Category-1.svg"
import Icon3 from "../../assets/Four/Category-2.svg"
import Icon4 from "../../assets/Four/Category-3.svg"
import "./Plus.css"

interface PlusProps {
  id?: string;
}

const Plus: React.FC<PlusProps> = () => {
  return (
    <div className="Plus" id="#plus-section">
        <div>
            <h1 className="Plus-h1">Vorteile des Geschäfts</h1>
        </div>
        <div className="Plus-list">
            <PlusCard Title="Große Auswahl" Img={Icon1} Text="Wir haben eine breite Palette von Fahrrädern 
            für alle Altersgruppen und Fahrstilrichtungen." />
            <PlusCard Title="Professionelle Beratung" Img={Icon2} Text="Unser Expertenteam steht Ihnen 
            jederzeit zur Verfügung, um Ihnen bei der Auswahl zu helfen und alle Fragen zu beantworten." />
            <PlusCard Title="Qualität" Img={Icon3} Text="Wir bieten nur hochwertige Fahrräder 
            von vertrauenswürdigen Herstellern." />
            <PlusCard Title="Schnelle Lieferung" Img={Icon4} Text="Wir liefern Ihr neues Fahrrad direkt 
            vor Ihre Haustür." />
        </div>
    </div>
  )
}

export default Plus
