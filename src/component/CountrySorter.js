import { Fragment, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../css/CountrySorter.module.css";
import { email_sorter_actions, side_effect_actions } from "../store/redux-core";
import BigCard from "../ui/BigCard";
import LoadingSpinner from "../ui/LoadingSpinner";
import MediumCard from "../ui/MediumCard";
import GuidePic from "../imgs/country-sort.PNG";

const CountrySorter = (props) => {
  const mailListRef = useRef();
  const countryCodeRef = useRef();

  const { total, result } = useSelector((state) => state.email_sorter_reducer);
  const showLoading = useSelector(
    (state) => state.side_effect_reducer.showLoadingSpinner
  );
  const dispatch = useDispatch();

  const SortEmailHandler = () => {
    const mailListRefVal = mailListRef.current.value;
    const filter = countryCodeRef.current.value;
    if (mailListRefVal === "") {
      alert("Mail list must not be empty");
      return;
    }
    dispatch(email_sorter_actions.ResetState());

    const data = mailListRefVal === "" ? [] : mailListRefVal.split("\n");
    if (data.length >= 20000) {
      alert("Import maximum 20k email");
      return;
    }
    if (filter !== "") {
      dispatch(
        email_sorter_actions.SortSingleCuntry({
          mails: data,
          filter: filter.toLowerCase().trim(),
        })
      );
    } else {
      dispatch(email_sorter_actions.SortEmail({ mails: data }));
    }

    if (!showLoading) {
      dispatch(side_effect_actions.LoadSpinner(true));
    }
  };
  return (
    <Fragment>
      <BigCard>
        <h2>Email Sorter (Country)</h2>
        <ul>
          <MediumCard className={classes.controls}>
            <label>Mail list</label>
            <textarea
              placeholder={`abc@xyz.us\nabc_xyz@xyz.ca\nabc_xyz_1990@xyz.es`}
              rows="15"
              ref={mailListRef}
            ></textarea>
          </MediumCard>
          <MediumCard className={classes["country-code"]}>
            <div>
              <label>Country code</label>
              <input
                type="text"
                placeholder="eg: ca,us,au,es..."
                ref={countryCodeRef}
              />
            </div>
          </MediumCard>
          <div className={classes.action}>
            <button onClick={SortEmailHandler}>Sort</button>
          </div>

          <MediumCard className={classes.controls} additional={classes.result}>
            {!showLoading && <LoadingSpinner></LoadingSpinner>}
            {showLoading && (
              <textarea
                placeholder={`abc@xyz.us | Abc123!\nabc_xyz@xyz.com | Abc123@Zja\nabc_xyz_1990@xyz.es | Dzoifg5@Zja`}
                disabled={true}
                rows="20"
                value={result}
              ></textarea>
            )}
          </MediumCard>

          <div className={classes.navigation}>
            <p>Sorted count: {total} mail(s)</p>
            <p>Import max: 20k mail</p>
            <p>
              How to use:
              <a href={GuidePic} target="_blank" rel="noreferrer">
                Link
              </a>
            </p>
          </div>
        </ul>
      </BigCard>
    </Fragment>
  );
};

export default CountrySorter;
