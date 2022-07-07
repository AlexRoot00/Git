import "../Styles/main.css"
import {Link} from 'react-router-dom'
import logo from './logo.svg';


///

////
export default function Navbar() {
  return (

    <nav className="nav">

      <img src={logo} className="nav-logo" alt="logo" />

          <Link to="/" className="nav_link"> Home </Link>
          <Link to="/Abouts" className="nav_link"> Abouts </Link>
          <Link to="/Contacts" className="nav_link"> Contacts </Link>

    </nav>

  );
}
