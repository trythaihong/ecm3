import { assets } from "../../assets/assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus
            soluta aut labore expedita quidem laborum quos repellat architecto
            dignissimos quo.
          </p>
          <div className="footer-socail-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-right">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-content-center">
          <h2>Get In Touch</h2>
          <ul>
            <li>08449499494</li>
            <li>Hongop34@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright Now Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Sint, quia.
      </p>
    </div>
  );
};

export default Footer;
