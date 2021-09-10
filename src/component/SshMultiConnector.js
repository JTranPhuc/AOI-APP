import { Fragment } from "react";
import classes from "../css/SshMultiConnector.module.css";
import BigCard from "../ui/BigCard";
import Multiple from "../images/Multi conenctor.gif";
import Customize from "../images/Customize Port.gif";
const SshMultiConnector = (props) => {
  return (
    <Fragment>
      <BigCard>
        <h2>Multi Tunnelier/SSH Connector</h2>
        <p className={classes.warning}>
          ***I packaged this software by 3rd party libraries (blackhat tool) to encode source, antivirus will consider this tool as virus, For safety reason: recommend use in RDP, virtualbox, Vmware...However, I guarantee this tool clean***
        </p>

        <div>
          <div className={classes.demo}>
            <p className={classes.testss}>*Demo tool:</p>
            <ul className={classes.alt}>
              <li>
                <a href={Customize}>Demo 1</a>
              </li>
              <li>
                <a href={Multiple}>Demo 2</a>
              </li>
            </ul>
            <p className={classes["img-gif"]}>
              <img src={Customize} alt="demo 1"></img>
              <img src={Multiple} alt="demo 2"></img>
            </p>
          </div>
          <p className={classes.title}>*Features</p>
          <div className={classes.features}>
            <ul>
              <li>
                Demo: 
                 <a href="https://www.youtube.com/watch?v=QMbv6owWpKo" target="_blank" rel="noreferrer">
                   https://www.youtube.com/watch?v=QMbv6owWpKo
                </a>
              </li>
              <li>Multi connect tunnelier</li>
              <li>Auto order SSH list</li>
              <li>Customize port</li>
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
            <a href="https://drive.google.com/file/d/14fdxrKrN1ito23g7AoUqKB3jXUW7vOfm/view" target="_blank" rel="noreferrer">
              Download link (password: jtran) - Contact me for account
            </a>
          </p>
        </div>
      </BigCard>
    </Fragment>
  );
};

export default SshMultiConnector;
