import React from "react";
import classes from "./NamesList.module.css";

function NamesList(props) {
  return (
    <React.Fragment>
      <ul className={classes["name-list"]}>
        {props.newNames.map(function (name) {
          return (
            <li key={name.id}>
              {name.fName} {name.lName}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default NamesList;
