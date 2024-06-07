import "./AGB.css"
import { Text } from './Massive.ts';

const AGB = () => {

  return (
    <div className='AGB'>
      <h1>ALLGEMEINE GESCHÄFTSBEDINGUNGEN</h1>
      <div className='AGB_wrap'>
        <div className="AGB_wrap-text">
        {Text.map((article) => (
          <div className="AGB_wrap-text">
              <h2>{article.Tittle}</h2>
              <p className="AGB_p">{article.p}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default AGB
