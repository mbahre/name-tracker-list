import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <React.Fragment>
      <section className={classes.title}>
        <h2>Name Tracker</h2>
      </section>
    </React.Fragment>
  );
}

export default Header;
