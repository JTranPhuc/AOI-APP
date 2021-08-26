import classes from "../css/LoadingSpinner.module.css";

const LoadingSpinner = (props) => {
  return (
    <div className={classes["lds-ripple"]}>
      <div></div>
      <div></div>
    </div>
    // <div className={classes.spinner}></div>
  );
};

export default LoadingSpinner;
