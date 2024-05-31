import "./NavBar.css"
import Logo from "../../assets/Logo.svg"

interface NavLink {
  label: string;
}

const Navbar: React.FC = () => {

  const navLinks: NavLink[] = [
    { label: 'About' },
    { label: 'Sortiment' },
    { label: 'Vorteile' },
  ];
  
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
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
    </div>
  )
}

export default Navbar
