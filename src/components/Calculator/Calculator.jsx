import react, { useState } from "react";
import "./Calculator.css";
import Display from "../Display/Display";
import Button from "../button/Button";

const Calculator = () => {
  const [data, setData] = useState("");

  const handleData = e => {
    setData(data + e.target.value);
    console.log(data);
  };

  const handleCalculate = () => {
    const result = eval(data.toString());
    setData(result);
  };

  const handleAllClear = e => {
    setData("");
  };

  const handleClear = () => {
    setData(data.slice(0, -1));
  };

  return (
    <div className="calculator">
      <div>
        <Display data={data} />
        <Button
          numberClick={handleData}
          equalClick={handleCalculate}
          resetButton={handleAllClear}
          clearButton={handleClear}
        />
      </div>
    </div>
  );
};

export default Calculator;
