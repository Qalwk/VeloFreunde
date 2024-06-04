import "./NavBar.css"
import Logo from "../../assets/Logo.svg"
import { useState } from "react";

interface NavLink {
  label: string;
}

const Navbar: React.FC = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks: NavLink[] = [
    { label: 'About' },
    { label: 'Sortiment' },
    { label: 'Vorteile' },
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
              <a href="#" className='navbar-menu-links' >{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Navbar
