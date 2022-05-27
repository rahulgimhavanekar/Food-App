import React from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Eat Healthy</h1>
      <nav className={classes.nav}>
        <ul>
          <li>Menu</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
