import { useState } from "react";
import Button from "../../Component/Button/Button"
import VeloCard from "../../Component/VeloCard/VeloCard"
import "./Sort.css"

const Sort = () => {

    const [showMore, setShowMore] = useState(false);

  return (
    <div className="Sort">
      <h1>Sortiment</h1>

        {
            showMore 
            ?
            (<>
            <div className="Sort-wrapper">
        <VeloCard Text="Cervélo CALEDONIA-5 - Rival eTap AXS - Carbon Rennrad - 2024 five black" 
            Img="src\assets\Three\Cervélo CALEDONIA-5.png" Price="4.699,00" />

        <VeloCard Text="Cervélo S5 Disc - Ultegra DI2 Carbon Rennrad - 2022 - iron oxide" 
            Img="src\assets\Three\Cervélo S5 Disc.png" Price="8.999,00" />

        <VeloCard Text="Cinelli HOBOOTLEG GEO - Shimano Tiagra Gravel Bike - 2023 - orange" 
            Img="src\assets\Three\Cinelli HOBOOTLEG GEO.png" Price="2.299,99" />


        <VeloCard Text="CUBE NUROAD Pro FE - Gravel Bike - 2023 - metalblack / grey" 
            Img="src\assets\Three\CUBE NUROAD Pro FE.png" Price="1.289,00" />

        <VeloCard Text="FOCUS ATLAS 8.9 - Carbon Gravel Bike - 2023 - Gold Brown" 
            Img="src\assets\Three\FOCUS ATLAS 8-9.png" Price="3.399,00" />

        <VeloCard Text="CUBE NUROAD WS - Damen Gravel Bike - 2023 - lightgrey / rose" 
            Img="src\assets\Three\CUBE NUROAD WS.png" Price="4.699,00" />
      </div>
            </>)
            :
            (<>
            <div className="Sort-wrapper">
        <VeloCard Text="Cervélo CALEDONIA-5 - Rival eTap AXS - Carbon Rennrad - 2024 five black" 
            Img="src\assets\Three\Cervélo CALEDONIA-5.png" Price="4.699,00" />

        <VeloCard Text="Cervélo S5 Disc - Ultegra DI2 Carbon Rennrad - 2022 - iron oxide" 
            Img="src\assets\Three\Cervélo S5 Disc.png" Price="8.999,00" />

        <VeloCard Text="Cinelli HOBOOTLEG GEO - Shimano Tiagra Gravel Bike - 2023 - orange" 
            Img="src\assets\Three\Cinelli HOBOOTLEG GEO.png" Price="2.299,99" />


        <VeloCard Text="CUBE NUROAD Pro FE - Gravel Bike - 2023 - metalblack / grey" 
            Img="src\assets\Three\CUBE NUROAD Pro FE.png" Price="1.289,00" />

        <VeloCard Text="FOCUS ATLAS 8.9 - Carbon Gravel Bike - 2023 - Gold Brown" 
            Img="src\assets\Three\FOCUS ATLAS 8-9.png" Price="3.399,00" />

        <VeloCard Text="CUBE NUROAD WS - Damen Gravel Bike - 2023 - lightgrey / rose" 
            Img="src\assets\Three\CUBE NUROAD WS.png" Price="4.699,00" />
      </div>
      <div className="Sort-btn">
        <Button Text="MORE" onClick={() => {setShowMore(true)}}/>
      </div>
      </>)
        }
    </div>
  )
}

export default Sort
