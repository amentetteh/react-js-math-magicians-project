import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <div id="logo">Math Magicians</div>
      <div className="menu">
        <ul>
          <li className="link"><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li className="link"><NavLink className="nav-link" to="/calculator">Calculator</NavLink></li>
          <li className="link"><NavLink className="nav-link" to="/quote">Quote</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
