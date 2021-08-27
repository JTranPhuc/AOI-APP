import classes from "../css/About.module.css";
import { Fragment } from "react";
import BigCard from "../ui/BigCard";

const About = (props) => {
  return (
    <Fragment>
      <BigCard>
        <h2>Contact me</h2>
        <div>
          <div className={classes.contacts}>
            <p>Skype: tranphucggg</p>
            <p>ICQ: @700589020</p>
          </div>

          <p className={classes.title}>*Windows & Linux Centos vps for sale</p>
          <div className={classes.plans}>
            <p>Plan I: 2core-4gb ram</p>
            <p>Plan II: 4 core- 8gb ram</p>
            <p>Plan III: 8 core - 16gb ram</p>
          </div>
          <p className={classes.description}>
            Accept: spam,scan..., admin rdp, guarantee strong live, renew
            monthly, change white/clean IP unlimited.
          </p>
        </div>

        <div className={classes.softs}>
          <p className={classes.title}>*Software</p>
          <div className={classes["soft-list"]}>
            <p>Email tracker</p>
            <p>Email sorter (goddady, owa, rackspace, office....etc)</p>
            <p>Domain sorter</p>
            <p>Phone tracker</p>
            <p>Multi ssh connector</p>
          </div>
        </div>
      </BigCard>
    </Fragment>
  );
};
export default About;
