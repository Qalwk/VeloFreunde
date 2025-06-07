import { useEffect, useState } from "react";
import Button from "../../Component/Button/Button"
import VeloCard from "../../Component/VeloCard/VeloCard"
import "./Sort.css"

interface SortProps {
  id?: string;
}

const Sort: React.FC<SortProps> = () => {
  const [bikes, setBikes] = useState<any[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [veloType, setVeloType] = useState<number>(0);

  useEffect(() => {
    fetch("http://localhost:8080/php/products.php")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  return (
    <div className="Sort" id="#sort-section">
        <h1>Sortiment</h1>
        <div className="Sort-wrapper">
          {bikes.slice(1, 6).map((bike) => (
            <VeloCard
              key={bike.id}
              Text={bike.name}
              Price={bike.price}
              Description={bike.description}
              id={bike.id}
              images={[
                `http://localhost:8080/${bike.image}`,
                bike.image2 ? `http://localhost:8080/${bike.image2}` : undefined,
                bike.image3 ? `http://localhost:8080/${bike.image3}` : undefined,
                bike.image4 ? `http://localhost:8080/${bike.image4}` : undefined,
              ].filter((img): img is string => typeof img === 'string' && img.length > 0)}
              setVeloType={setVeloType}
              veloType={veloType}
            />
          ))}
          {showMore &&
            bikes.slice(6).map((bike) => (
              <VeloCard
                key={bike.id}
                Text={bike.name}
                Price={bike.price}
                Description={bike.description}
                id={bike.id}
                images={[
                  `http://localhost:8080/${bike.image}`,
                  bike.image2 ? `http://localhost:8080/${bike.image2}` : undefined,
                  bike.image3 ? `http://localhost:8080/${bike.image3}` : undefined,
                  bike.image4 ? `http://localhost:8080/${bike.image4}` : undefined,
                ].filter((img): img is string => typeof img === 'string' && img.length > 0)}
                setVeloType={setVeloType}
                veloType={veloType}
              />
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
