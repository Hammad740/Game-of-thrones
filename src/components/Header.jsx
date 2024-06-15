import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="hero">
        <div className="hero-banner">
          <h1>Game of Thrones</h1>
          <p>
            When people ask you what happened here,tell them the North remembers
          </p>
          <NavLink to={'/characters'}>
            <button className="hero-btn">Characters</button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};
export default Header;
