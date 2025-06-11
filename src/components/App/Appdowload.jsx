import { assets } from "../../assets/assets";
import "./Appdowload.css";
const Appdowload = () => {
  return (
    <div className="Appdow" id="Appdow">
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className="Appdow-pl">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default Appdowload;
