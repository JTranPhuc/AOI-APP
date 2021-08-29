import { Fragment } from "react";
import classes from "../css/Godaddy.module.css";
import BigCard from "../ui/BigCard";
import Goddady2 from "../images/godaddy-checker.gif";
import Goddady1 from "../images/godaddy-checker1.gif";
const Godaddy = (props) => {
  return (
    <Fragment>
      <BigCard>
        <h2>Godaddy Checker</h2>
        <div>
          <div className={classes.demo}>
            <p>*Demo tool:</p>
            <p>
              <a href={Goddady1} target="_blank" rel="noreferrer">
                Demo 1
              </a>
            </p>
            <p>
              <a href={Goddady2} target="_blank" rel="noreferrer">
                Demo 2
              </a>
            </p>
          </div>

          <p className={classes.title}>*Requirement</p>
          <div className={classes.plans}>
            <p>-Windows version: from windows 7...</p>
            <p>-Net 4.6 or higher </p>
            <p>-MS C++ Redistributable higher than version 2008 </p>
          </div>
          <p className={classes.download}>*Download</p>
          <p>
            <a
              href="https://pastebin.com/KiUjJYgn"
              target="_blank"
              rel="noreferrer"
            >
              Download link
            </a>
          </p>
        </div>
      </BigCard>
    </Fragment>
  );
};

export default Godaddy;
