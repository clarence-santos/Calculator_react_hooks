import react from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div className="button">
      <button className="numberButton" value="7" onClick={props.numberClick}>
        7
      </button>
      <button className="numberButton" value="8" onClick={props.numberClick}>
        8
      </button>
      <button className="numberButton" value="9" onClick={props.numberClick}>
        9
      </button>
      <button className="numberButton" onClick={props.clearButton}>
        C
      </button>
      <button className="numberButton" value="4" onClick={props.numberClick}>
        4
      </button>
      <button className="numberButton" value="5" onClick={props.numberClick}>
        5
      </button>
      <button className="numberButton" value="6" onClick={props.numberClick}>
        6
      </button>
      <button className="numberButton" value="+" onClick={props.numberClick}>
        +
      </button>
      <button className="numberButton" value="1" onClick={props.numberClick}>
        1
      </button>
      <button className="numberButton" value="2" onClick={props.numberClick}>
        2
      </button>
      <button className="numberButton" value="3" onClick={props.numberClick}>
        3
      </button>
      <button className="numberButton" value="-" onClick={props.numberClick}>
        -
      </button>
      <button className="numberButton" value="." onClick={props.numberClick}>
        .
      </button>
      <button className="numberButton" value="0" onClick={props.numberClick}>
        0
      </button>
      <button className="numberButton" value="/" onClick={props.numberClick}>
        ÷
      </button>
      <button className="numberButton" value="*" onClick={props.numberClick}>
        x
      </button>
      <button className="functionButton" onClick={props.resetButton}>
        CE
      </button>
      <button className="equalButton" value="=" onClick={props.equalClick}>
        =
      </button>
    </div>
  );
}
