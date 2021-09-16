import React from "react";
import { useState } from "react/cjs/react.development";
import Header from "./components/Header/Header";
import Names from "./components/Names/Names";
import NamesList from "./components/NamesList/NamesList";

function App() {
  const [newState, setNewState] = useState([]);

  const onNameDataHandler = function (nameInfo) {
    setNewState(function (prevState) {
      return [...prevState, nameInfo];
    });
  };

  return (
    <React.Fragment>
      <Header></Header>
      <Names onNameData={onNameDataHandler}></Names>
      <NamesList newNames={newState}></NamesList>
    </React.Fragment>
  );
}

export default App;
