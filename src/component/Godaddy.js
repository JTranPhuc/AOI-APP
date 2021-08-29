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
        <p className={classes.warning}>
          ***I packaged this software by 3rd party libraries (blackhat tool) to
          encode source, antivirus will consider this tool as virus, For safety
          reason: recommend use in RDP, virtualbox, Vmware...However, I
          guarantee this tool clean***
        </p>

        <div>
          <div className={classes.demo}>
            <p className={classes.testss}>*Demo tool:</p>
            <ul className={classes.alt}>
              <li>
                <a href={Goddady1}>Demo 1</a>
              </li>
              <li>
                <a href={Goddady2}>Demo 2</a>
              </li>
            </ul>
            <p className={classes["img-gif"]}>
              <img src={Goddady1} alt="demo 1"></img>
              <img src={Goddady2} alt="demo 2"></img>
            </p>
          </div>
          <p className={classes.title}>*Features</p>
          <div className={classes.features}>
            <ul>
              <li>Extract all mail hosted by godaddy</li>
              <li>
                Multi thread - Smart optmize thread base on your system hardware
              </li>
              <li>Auto save result every second</li>
              <li>Logs report</li>
            </ul>
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
              href="https://drive.google.com/file/d/1GFY9w-MTxWR9vEOvtzn2v6NgKkJZSUwj/view"
              target="_blank"
              rel="noreferrer"
            >
              Download link (password: jtran) - Contact me for free account
            </a>
          </p>
        </div>
      </BigCard>
    </Fragment>
  );
};

export default Godaddy;
