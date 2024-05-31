import "./PlusCard.css"

interface PlusCardProps {
    Title: string;
    Img: string;
    Text: string;
  }

const PlusCard: React.FC<PlusCardProps> = ({Title, Img, Text}) => {
  return (
    <div className="PlusCard"> 
      <div className="PlusCard-wrap">
        <img src={Img} alt="icon" />
        <h2>{Title}</h2>
      </div>
      <div>
        <p className="PlusCard-p" >{Text}</p>
      </div>
    </div>
  )
}

export default PlusCard
