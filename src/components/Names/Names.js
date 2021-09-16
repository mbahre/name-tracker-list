import React from "react";
import { useState } from "react/cjs/react.development";
import AddNameBtn from "./AddNameBtn";
import NamesForm from "./NamesForm";

function Names(props) {
  const [display, setDisplay] = useState(false);

  const onNewNameDataHandler = function (nameInfo) {
    props.onNameData(nameInfo);
  };

  const onDisplayNoShowHandler = function () {
    setDisplay(true);
  };

  const onDisplayShowHandler = function () {
    setDisplay(false);
  };

  return (
    <React.Fragment>
      {!display && (
        <AddNameBtn onDisplayNoShow={onDisplayNoShowHandler}></AddNameBtn>
      )}
      {display && (
        <NamesForm
          nameData={onNewNameDataHandler}
          onDisplayShow={onDisplayShowHandler}
        ></NamesForm>
      )}
    </React.Fragment>
  );
}

export default Names;
