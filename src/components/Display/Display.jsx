import react from "react";
import "./Display.css";

export default function Display(props) {
  return <p className="display">{props.data}</p>;
}
