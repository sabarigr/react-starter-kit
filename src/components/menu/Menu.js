import React from 'react';
import { Link } from 'react-router-dom';
import Routes from 'routes';
// import logo from 'assets/images/logo.png';
import styles from './Menu.scss';

export default function Menu() {
  const buildMenu = (data = Routes) => (
    <ul className={styles.menu}>
      {data.map(route => (
        <li className={styles.menuItem} key={route}>
          <Link to={route.path}>{route.name}</Link>
          {route.children && buildMenu(route.children)}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="header">
      <nav>
        {buildMenu()}
        {/* <div className={styles["login-part"]}>
          <i className="fas fa-user"></i> Logged in Andrews, Daniel (DAAD)
          <i className="fas fa-sort-down"></i>
          <ul>
            <li>
              <a href="my_account.html">My Account</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
          <img src={logo} className="logo" />
        </div> */}
      </nav>
    </div>
  );
}
