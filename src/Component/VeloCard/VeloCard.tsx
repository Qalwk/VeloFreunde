import "./VeloCard.css"
import Button from '../Button/Button'

interface VeloCardProps {
    Text: string;
    Img: string;
    Price: string;
  }

const VeloCard: React.FC<VeloCardProps> = ({ Text, Img, Price }) => {
  return (
    <div className='VeloCard'>
      <p className='VeloCard-p'>{Text}</p>
      <div className='VeloCard-wrapper-img'>
        <img className='VeloCard-img' src={Img} alt="IMG" />
      </div>
      <div className="VeloCard-wrap-price">
        <p className='VeloCard-price'>{Price}</p>
        <div className="VeloCard-btn">
            <Button Mode={false} Text="QUICKVIEW" />
        </div>
      </div>
    </div>
  )
}

export default VeloCard
