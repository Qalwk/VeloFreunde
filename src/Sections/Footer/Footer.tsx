import "./Footer.css"
import Logo from "../../assets/Logo.svg"
import Icon from "../../assets/Footer/Icon.svg"
import Icon4 from "../../assets/Footer/4. Круг, обводка, большая.svg"

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div className="Footer-wrap">
        <a className="Footer-p" href="#" >AGB</a>
        <div className="Footer-wrap-GEO">
            <div>
                <img src={Icon} alt="" />
            </div>
            <p className="Footer-p">Office / Lager: Ziegelstr. 2 10117 Berlin</p>
        </div>
        <div className="Footer-wrap-NUM">
            <img src={Icon4} alt="Icon" />
            <div>
                <p className="Footer-p">Tel.: +49 30 40790404</p>
                <p className="Footer-p">Mob.: +49 179 5500504</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
