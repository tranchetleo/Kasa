import "./Header.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="navbar">
        <a href="/">
          <img src={logo} alt="" />
        </a>
        <nav>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/a-propos">A Propos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
