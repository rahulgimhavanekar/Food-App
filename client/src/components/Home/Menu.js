import React from "react";
import MenuItem from "./MenuItem";
import { data } from "../../data";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <section className={classes.menu}>
      <h2 className={classes.heading}>Welcome to Eat Healthy!</h2>
      <p className={classes.subheading}>
        Here are our Chef's specials made specially for you!
      </p>
      <p className={classes.subheading}>
        Order now and get delivered in 10 mins.
      </p>
      <div className={classes.item_grid}>
        {data.map((item) => {
          return (
            <MenuItem
              key={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
