import classes from "../css/BigCard.module.css";

const BigCard = (props) => {
  return <div className={classes["big-card"]}>{props.children}</div>;
};

export default BigCard;
