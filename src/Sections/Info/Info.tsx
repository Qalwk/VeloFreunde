import "./Info.css"
import IMG from "../../assets/Two/Group 2.png"

const Info = () => {
  return (
    <div className="Info">
      <div className="Info-img">
          <img className="img" src={IMG} alt="Photo" />
      </div>
      <div className="Info-wrap">
        <h1 className="Info-h1">Beschreibung des Geschäfts</h1>
        <h2 className="Info-h2">VeloShop ist ein Online-Shop, der sich auf den Verkauf hochwertiger Fahrräder für 
            alle Altersgruppen und Erfahrungsstufen spezialisiert hat.</h2>
        <p className="Info-p">Bei uns finden Sie eine große Auswahl an Fahrrädern verschiedener Typen: 
            Mountainbikes, Rennräder, Stadtfahrräder und vieles mehr. Wir sind stolz darauf, 
            nur die besten Marken und Modelle anzubieten, um die Bedürfnisse unserer Kunden zu erfüllen.</p>
      </div>
    </div>
  )
}

export default Info
