import { useState } from "react";
import Button from "../../Component/Button/Button"
import VeloCard from "../../Component/VeloCard/VeloCard"

import Cervélo from "../../assets/Three/Cervélo CALEDONIA-5.png"
import Cervélo2 from "../../assets/Three/Cervélo S5 Disc.png"
import Cinelli from "../../assets/Three/Cinelli HOBOOTLEG GEO.png"
import CUBE from "../../assets/Three/CUBE NUROAD Pro FE.png"
import FOCUS from "../../assets/Three/FOCUS ATLAS 8-9.png"
import CUBE2 from "../../assets/Three/CUBE NUROAD WS.png"

import Cervélo3 from "../../assets/Three/Cervélo SOLOIST.png"
import Cinelli2 from "../../assets/Three/Cinelli ZYDECO.png"
import Cinelli3 from "../../assets/Three/Cinelli ZYDECO LALA.png"
import Cinelli4 from "../../assets/Three/Cinelli HOBOOTLEG.png"
import FOCUS2 from "../../assets/Three/FOCUS ATLAS 6-7 GRX Gravel Bike.png"
import CUBE3 from "../../assets/Three/CUBE NUROAD C-62 SLT.png"
import FOCUS3 from "../../assets/Three/FOCUS ATLAS 6-7 EQP GRX Gravel Bike.png"
import FOCUS4 from "../../assets/Three/FOCUS ATLAS 6-8.png"
import "./Sort.css"

interface SortProps {
  id?: string;
}

const Sort: React.FC<SortProps> = () => {

  const bikes = [
    {
      Text: "Cervélo CALEDONIA-5 - Rival eTap AXS - Carbon Rennrad - 2024 five black",
      Img: Cervélo,
      Price: "4.699,00",
    },
    {
      Text: "Cervélo S5 Disc - Ultegra DI2 Carbon Rennrad - 2022 - iron oxide",
      Img: Cervélo2,
      Price: "8.999,00",
    },
    {
      Text: "Cinelli HOBOOTLEG GEO - Shimano Tiagra Gravel Bike - 2023 - orange",
      Img: Cinelli,
      Price: "2.299,99",
    },
    {
      Text: "CUBE NUROAD Pro FE - Gravel Bike - 2023 - metalblack / grey",
      Img: CUBE,
      Price: "1.289,00",
    },
    {
      Text: "FOCUS ATLAS 8.9 - Carbon Gravel Bike - 2023 - Gold Brown",
      Img: FOCUS,
      Price: "3.399,00",
    },
    {
      Text: "CUBE NUROAD WS - Damen Gravel Bike - 2023 - lightgrey / rose",
      Img: CUBE2,
      Price: "4.699,00",
    },

    /////////////////////////////////////////////////////////////////////////////////

    {
      Text: "Cervélo SOLOIST - Rival eTap AXS - Carbon Rennrad - 2024 - gold dust",
      Img: Cervélo3,
      Price: "4.799,00",
    },
    {
      Text: "Cinelli ZYDECO - Shimano GRX Gravel Bike - 2023 - muddy dry",
      Img: Cinelli2,
      Price: "2.099,00",
    },
    {
      Text: "Cinelli ZYDECO LALA - Gravel Bike - 2023 - mr blue sky",
      Img: Cinelli3,
      Price: "1.489,00",
    },
    {
      Text: "Cinelli HOBOOTLEG - Adventure Bike - 2023 - red right hand",
      Img: Cinelli4,
      Price: "1.549,99",
    },
    {
      Text: "FOCUS ATLAS 6.7 GRX Gravel Bike - 2023 - Rustorange",
      Img: FOCUS2,
      Price: "1.499,00",
    },
    {
      Text: "CUBE NUROAD C:62 SLT - Carbon Gravel Bike - 2023 - liquidred / red",
      Img: CUBE3,
      Price: "3.969,00",
    },
    {
      Text: "FOCUS ATLAS 6.7 EQP GRX Gravel Bike - 2023 - Rustorange",
      Img: FOCUS3,
      Price: "1.699,00",
    },
    {
      Text: "FOCUS ATLAS 6.8 - Gravel Bike - 2024 - Heritageblue / Stoneblue glossy",
      Img: FOCUS4,
      Price: "2.299,00",
    },
  ];
  
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="Sort" id="#sort-section">
        <h1>Sortiment</h1>
        <div className="Sort-wrapper">
          {bikes.slice(0, 6).map((bike) => (
            <VeloCard key={bike.Text} {...bike} />
          ))}
          {showMore && bikes.slice(6).map((bike) => (
            <VeloCard key={bike.Text} {...bike} />
          ))}
        </div>
        <div className="Sort-btn">
        {!showMore && 
          <Button Text="MORE" onClick={() => {setShowMore(true)}}/>
        }
        </div>
    </div>
  )
}

export default Sort
