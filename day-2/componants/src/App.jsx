import { useState } from "react";
import "./App.css";
import Button from "./componants/Button";
import DataScreen from "./componants/DataScreen";
import Header from "./componants/Header";

function App() {

  const [value,setValue] = useState(0);


  const handleIncrement = ()=>{
    setValue(prev => prev+1)
  }

  const handleDecrement = ()=>{
    setValue(prev => prev-1)
  }
  return <div>
    <Header variant={"large"} title={"Counter Application"} />
    <hr />
    <DataScreen title={value} />
    <Button onClickHandeler={handleDecrement} title="-" val={value}/>
    <Button onClickHandeler={handleIncrement} title="+" val={value} />
  </div>;
}

export default App;
