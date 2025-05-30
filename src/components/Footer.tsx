import "./Footer.css";
import logoWhite from "../assets/images/logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoWhite} alt="" />
      <div className="footer__line">
        <p className="footer__text">© 2023 Kasa.</p>
        <p className="footer__text">All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
