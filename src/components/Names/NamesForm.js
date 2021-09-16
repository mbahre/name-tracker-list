import React, { useState } from "react";
import classes from "./NamesForm.module.css";

function NamesForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onFirstNameHandler = function (e) {
    setFirstName(e.target.value);
  };

  const onLastNameHandler = function (e) {
    setLastName(e.target.value);
  };

  const onAddNameHandler = function (e) {
    e.preventDefault();

    if (firstName.length === 0) {
      alert("Please Enter in a First Name.");
      return;
    } else if (lastName.length === 0) {
      alert("Please Enter in a Last Name.");
      return;
    }

    const nameData = {
      fName: firstName.trim(),
      lName: lastName.trim(),
      id: Math.random(),
    };

    props.nameData(nameData);
    props.onDisplayShow();
    setFirstName("");
    setLastName("");
  };

  return (
    <form onSubmit={onAddNameHandler}>
      <div className={classes["form-control"]}>
        <label>First Name: </label>
        <input value={firstName} type="text" onChange={onFirstNameHandler} />
      </div>
      <div className={classes["form-control"]}>
        <label>Last Name: </label>
        <input value={lastName} type="text" onChange={onLastNameHandler} />
      </div>
      <div className={classes["form-control"]}>
        <button className={classes["form-control__btn"]} type="submit">
          Add Name
        </button>
        <div>
          <button
            className={classes["form-control__btn"]}
            type="button"
            onClick={props.onDisplayShow}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default NamesForm;
