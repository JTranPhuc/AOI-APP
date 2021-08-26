import { Fragment, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "../css/AccBuilder.module.css";
import { acc_builder_actions, side_effect_actions } from "../store/redux-core";
import BigCard from "../ui/BigCard";
import LoadingSpinner from "../ui/LoadingSpinner";
import MediumCard from "../ui/MediumCard";

const AccBuilder = (props) => {
  const { result } = useSelector((state) => state.acc_builder_reducer);
  const showLoading = useSelector(
    (state) => state.side_effect_reducer.showLoadingSpinner
  );

  const dispatch = useDispatch();
  const first_name_ref = useRef();
  const last_name_ref = useRef();
  const extension_data_ref = useRef();

  const BuildAccountHandler = useCallback(() => {
    const f_val = first_name_ref.current.value;
    const l_val = last_name_ref.current.value;
    const d_val = extension_data_ref.current.value;

    const obj = {
      firstNameArr: f_val === "" ? [] : f_val.split("\n"),
      lastNameArr: l_val === "" ? [] : l_val.split("\n"),
      extensionArr: d_val === "" ? [] : d_val.split("\n"),
    };

    if (f_val === "" || l_val === "" || d_val === "") {
      alert("First/Last name & Extension must not be empty");
      return;
    }
    dispatch(acc_builder_actions.BuildAccount({ data: obj }));

    if (!showLoading) {
      dispatch(side_effect_actions.LoadSpinner(true));
    }
  }, [dispatch, showLoading]);

  return (
    <Fragment>
      <BigCard>
        <h2>Email Account Builder</h2>
        <ul>
          <MediumCard className={classes.controls}>
            <label>First name</label>
            <textarea
              ref={first_name_ref}
              placeholder={`Wade\n...`}
              rows="15"
            ></textarea>
          </MediumCard>

          <MediumCard className={classes.controls}>
            <label>Last name</label>
            <textarea
              ref={last_name_ref}
              placeholder={`Anderson\n...`}
              rows="15"
            ></textarea>
          </MediumCard>

          <MediumCard className={classes.controls}>
            <label>Extension</label>
            <textarea
              ref={extension_data_ref}
              placeholder={`@yahoo.com\n@gmail.com\n@....`}
              rows="15"
            ></textarea>
          </MediumCard>

          <div className={classes.action}>
            <button onClick={BuildAccountHandler}>Create Account</button>
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
            <p>
              First name list:
              <a
                href="https://pastebin.com/QaxNUqwX"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </p>
            <p>
              Last name list:
              <a
                href="https://pastebin.com/S3sSZMVb"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </p>
            <p>
              Mail extension:
              <a
                href="https://pastebin.com/KiUjJYgn"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </p>
            <p>Duplicate rate: 0.0000147693%</p>
          </div>
        </ul>
      </BigCard>
    </Fragment>
  );
};

export default AccBuilder;
