import classes from "../css/Footer.module.css";
import { FaHeart } from "react-icons/fa";
const Footer = (props) => {
  return (
    <footer>
      <div className={classes.author}>
        <p>
          Made with <FaHeart transform="scale(0.8)" color="red"/> by J.Tran
        </p>
      </div>
    </footer>
  );
};

export default Footer;
