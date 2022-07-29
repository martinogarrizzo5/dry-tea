import { FC } from "react";
import LogoWhiteImg from "../../assets/logo-white.png";
import "./Footer.scss";

const Footer: FC = () => {
  return (
    <footer>
      <footer className="footer">
        <img src={LogoWhiteImg} alt="logo" className="footer__logo" />
        <p className="footer__quote">Making Ourselves Better Every Day</p>
        <p>© Made with ❤️ by Martin Meneghetti</p>
      </footer>
    </footer>
  );
};

export default Footer;
