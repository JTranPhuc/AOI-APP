import classes from "../css/MediumCard.module.css";

const MediumCard = (props) => {
  return (
    <div className={`${classes["medium-card"]} ${props.className ?? ""} ${props.additional ?? ""}`}>
      {props.children}
    </div>
  );
};

export default MediumCard;
