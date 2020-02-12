import React from "react";
import { Link } from "react-router-dom";
import Routes from "routes";
import styles from "./style.scss";

export default function Menu() {
  const buildMenu = (data = Routes) => {
    return (
      <ul className={styles.menu}>
        {data.map((route, idx) => (
          <li className={styles.menuItem} key={idx}>
            <Link to={route.path}>{route.name}</Link>
            {route.children && buildMenu(route.children)}
          </li>
        ))}
      </ul>
    );
  }
  return <nav>{buildMenu()}</nav>;
}
