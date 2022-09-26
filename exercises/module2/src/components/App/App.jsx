import React, { useState, useEffect } from "react";
import "components/App/App.css";
import Display from "components/Display/Display";
import Button from "components/Button/Button";

const App = () => {

  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")));

  const handleClick = (e) => {
    e.preventDefault();
    setCounter(counter + parseInt(e.target.dataset.delta));
    //localStorage.setItem("counter", JSON.stringify(counter))
}
//?
useEffect(() => {
  localStorage.setItem("counter", JSON.stringify(counter));
}, [counter]);

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
