import { NavLink } from "react-router-dom";
import classes from "../css/Header.module.css";
import { FaTools } from "react-icons/fa";
const Header = (props) => {
  return (
    <header>
      <h1>
        <FaTools /> AIO
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink activeClassName={classes.active} to="/guide-videos">
              Guide
            </NavLink>
          </li> */}
          <li>
            <NavLink activeClassName={classes.active} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
