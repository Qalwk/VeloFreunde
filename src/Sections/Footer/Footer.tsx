import "./Footer.css"

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <img src="src\assets\Logo.svg" alt="Logo" />
      </div>
      <div className="Footer-wrap">
        <a className="Footer-p" href="#" >AGB</a>
        <div className="Footer-wrap-GEO">
            <div>
                <img src="src\assets\Footer\Icon.svg" alt="" />
            </div>
            <p className="Footer-p">Office / Lager: Ziegelstr. 2 10117 Berlin</p>
        </div>
        <div className="Footer-wrap-NUM">
            <img src="src\assets\Footer\4. Круг, обводка, большая.svg" alt="" />
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
