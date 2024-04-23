import { Link, BrowserRouter } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../img/Logo.png'

function Navbar() {
  return (
    <BrowserRouter>
    <div className={styles.navbar}>
      <nav>
            <Link to="/">
                <img src={logo} alt="Filtro" />
            </Link>    
      </nav>
    </div>
    </BrowserRouter>
  );
}

export default Navbar;
