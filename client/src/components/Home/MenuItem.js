import React from "react";
import classes from "./MenuItem.module.css";

const MenuItem = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.description}>
        <div>
          <h5>{props.name}</h5>
          <p>$ {props.price}</p>
        </div>
        <div className={classes.actions}>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <img src={props.image} alt={props.name} className={classes.picture} />
    </div>
  );
};

export default MenuItem;
