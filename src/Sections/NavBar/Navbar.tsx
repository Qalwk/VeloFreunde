import "./NavBar.css"
import Logo from "../../assets/Logo.svg"
import { useState } from "react";

interface NavLink {
  label: string;
  link: string;
}

const Navbar: React.FC = () => {
  
  interface handleClickScrolProps {
    id?: string;
    navLink?: any;
  }

  const handleClickScrol = ({ navLink }: handleClickScrolProps) => {
    const element = document.getElementById(navLink);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks: NavLink[] = [
    { label: 'About',
      link: '#info-section' },
    { label: 'Sortiment',
      link: '#sort-section' },
    { label: 'Vorteile',
      link: '#plus-section' },
  ];
  
  return (
    <div className='navbar'>
      <div>
        <img className="navbar-logo" src={Logo} alt="Logo" />
      </div>
      <div className='navbar-menu'>
        <ul className='navbar-menu-list'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.link} onClick={() => handleClickScrol({ navLink: link.link})} className='navbar-menu-links' >{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      <div className="navbar-background"></div>
    </div>
  )
}

export default Navbar
