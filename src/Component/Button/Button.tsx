import "./Button.css"

interface ButtonProps {
  Text: string;
  Mode?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({Mode=true, Text}) => {

  return (
    <div>
      {
        Mode 
        ? (
          <div className="btn">
            <p className="btn-text">{Text}</p>
          </div>
        )
        : (
          <div className="btn btn-black">
            <p className="btn-text text-black">{Text}</p>
          </div>
        )
      }
      {/* <div className='btn'>
        <p className="btn-text">MORE</p>
      </div> */}
    </div>
  )
}

export default Button
