import { Link } from "react-router-dom";
import classes from "../css/Home.module.css";

const Home = (props) => {
  return (
    <div className={classes.home}>
      <ul>
        <li>
          <Link to="/mail-sorter">Email Sorter(country)</Link>
        </li>
        <li>
          <Link to="/mail-maker">Random Mail Account Maker</Link>
        </li>
        <li>
          <Link to="/godaddy-checker">Godaddy Checker (Windows app)</Link>
        </li>
        <li>
          <p>... Coming soon ...</p>
        </li>
        <li>
          <Link to="/coming-soon">OWA Checker (Windows app)</Link>
        </li>
        <li>
          <Link to="/coming-soon">Mail Sorter(Domain)</Link>
        </li>

        <li>
          <Link to="/coming-soon">Mail Filter</Link>
        </li>

        <li>
          <Link to="/coming-soon">IP Range Extractor</Link>
        </li>

        <li>
          <Link to="/coming-soon">Login Page Checker</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
