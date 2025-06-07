import "./Footer.css"
import Logo from "../../assets/Logo.svg"
import Icon from "../../assets/Footer/Icon.svg"
import Icon4 from "../../assets/Footer/4. Круг, обводка, большая.svg"
import AGB from "../../Component/AGB/AGB"
import { useState } from "react"

const Footer = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div className="Footer">
      <div>
        <img className="Logo" src={Logo} alt="Logo" />
      </div>
      <div className="Footer-wrap">
        <a className="Footer-p" href="#" onClick={toggleModal} >AGB</a>
        
        {isModalOpen && (
        <div className="Modal-wrapper">
          <div className="Modal">
            <div className="Modal-close-button" onClick={toggleModal}>
              X
            </div>
            <div className="Modal-Comp">
              <AGB />
            </div>
          </div>
        </div>
      )}

        <div className="Footer-wrap-GEO">
            <div>
                <img src={Icon} alt="" />
            </div>
            <p className="Footer-p-geo">Office / Lager: Ziegelstr. 2 10117 Berlin</p>
        </div>
        <div className="Footer-wrap-NUM">
            <img src={Icon4} alt="Icon" />
            <div>
                <p className="Footer-p-NUM">Tel.: +49 30 40790404</p>
                <p className="Footer-p-NUM">Mob.: +49 179 5500504</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
