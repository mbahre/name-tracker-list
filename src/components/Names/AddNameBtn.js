import React from "react";
import classes from "./AddNameBtn.module.css";

function AddNameBtn(props) {
  return (
    <React.Fragment>
      <div className={classes.btn__control}>
        <button type="button" onClick={props.onDisplayNoShow}>
          Add New Name
        </button>
      </div>
    </React.Fragment>
  );
}

export default AddNameBtn;
