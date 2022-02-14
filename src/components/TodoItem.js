import classes from "./TodoItem.module.css";
import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";

function TodoItem(props) {
  const [clicked, setclicked] = useState(false);
  const toggle = () => {
    setclicked((prev) => !prev);
  };

  const removetodoo = () => {
    props.remove(props.id);
  };

  return (
    <li className={classes.container}>
      <div className={classes.item}>
        <div>{props.title}</div>
        <button className={classes.remove} onClick={removetodoo}>
          {"❌"}
        </button>
        <button
          className={classes.togglebutton}
          onClick={toggle}
          role={"button"}
        >
          {!clicked ? "➕" : "➖"}
        </button>
      </div>
      {clicked ? (
        <div className={classes.des}>{ReactHtmlParser(props.des)}</div>
      ) : null}
    </li>
  );
}

export default TodoItem;
