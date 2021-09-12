import { Fragment } from "react";
import classes from "../css/SshMultiConnector.module.css";
import BigCard from "../ui/BigCard";
import AutoChanger from "../images/Change by time.gif";
const AutoChangeSshByTime = (props) => {
  return (
    <Fragment>
      <BigCard>
        <h2>Auto Change Tunnelier/SSH By Time</h2>
        <p className={classes.warning}>
          ***I packaged this software by 3rd party libraries (blackhat tool) to encode source, antivirus will consider this tool as virus, For safety reason: recommend use in RDP, virtualbox, Vmware...However, I guarantee this tool clean***
        </p>

        <div>
          <div className={classes.demo}>
            <p className={classes.testss}>*Demo tool:</p>
            <ul className={classes.alt}>
              <li>
                <a href={AutoChanger}>Demo 1</a>
              </li>
            </ul>
            <p className={classes["img-gif"]}>
              <img src={AutoChanger} alt="demo 1"></img>
            </p>
          </div>
          <p className={classes.title}>*Features</p>
          <div className={classes.features}>
            <ul>
              <li>
                Demo:
                <a href="https://www.youtube.com/watch?v=HSMaV0znyX4" target="_blank" rel="noreferrer">
                  Youtube
                </a>
              </li>
              <li>Auto connect/disconnect SSH</li>
              <li>Connect SSH by timmer</li>
              <li>Loop SSH list</li>
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
            <a href="https://drive.google.com/file/d/17Gy4M9pXHxiAzu4SzFDqKGlu5OjaRSk8/view?usp=sharing" target="_blank" rel="noreferrer">
              Download link (password: jtran) - Contact me for account
            </a>
          </p>
        </div>
      </BigCard>
    </Fragment>
  );
};

export default AutoChangeSshByTime;
