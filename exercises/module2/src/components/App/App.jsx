import React, { useState } from "react";
import "components/App/App.css";
import Display from "components/Display/Display";
import Button from "components/Button/Button";

const App = () => {

  const [counter, setCounter] = useState(0);

  const changeCount = (delta) => {
    setCounter(counter + parseInt(delta));
  };

  const handleClick = (e) => {
    e.preventDefault();
    changeCount(parseInt(e.target.dataset.delta))
}

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={handleClick} text="minus" delta="-1" />
      <Button onClick={handleClick} text="zero" delta={-counter} />
      <Button onClick={handleClick} text="plus" delta="1" />
    </div>
  );
};

export default App;
