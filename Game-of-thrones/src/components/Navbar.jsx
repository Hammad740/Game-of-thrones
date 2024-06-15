import { NavLink } from 'react-router-dom';
import logoImg from '../logo-got.jpg';
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logoImg} alt="navbar-logo" className="logo" />
      <ul>
        <NavLink to={'/'} style={{ textDecoration: 'none', color: 'white' }}>
          <li>Home</li>
        </NavLink>
        <NavLink
          to={'/characters'}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <li>Characters</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
