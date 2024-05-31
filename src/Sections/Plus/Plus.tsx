import PlusCard from "../../Component/PlusCard/PlusCard"
import "./Plus.css"

const Plus = () => {
  return (
    <div className="Plus">
        <div>
            <h1 className="Plus-h1">Vorteile des Geschäfts</h1>
        </div>
        <div className="Plus-list">
            <PlusCard Title="Große Auswahl" Img="src\assets\Four\Category.svg" Text="Wir haben eine breite Palette von Fahrrädern 
            für alle Altersgruppen und Fahrstilrichtungen." />
            <PlusCard Title="Professionelle Beratung" Img="src\assets\Four\Category-1.svg" Text="Unser Expertenteam steht Ihnen 
            jederzeit zur Verfügung, um Ihnen bei der Auswahl zu helfen und alle Fragen zu beantworten." />
            <PlusCard Title="Qualität" Img="src\assets\Four\Category-2.svg" Text="Wir bieten nur hochwertige Fahrräder 
            von vertrauenswürdigen Herstellern." />
            <PlusCard Title="Schnelle Lieferung" Img="src\assets\Four\Category-3.svg" Text="Wir liefern Ihr neues Fahrrad direkt 
            vor Ihre Haustür." />
        </div>
    </div>
  )
}

export default Plus
