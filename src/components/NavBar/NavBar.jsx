import React from 'react';
import styles from './NavBar.module.css';
import {NavLink} from "react-router-dom";



const NavBar = () => {

  return (
    <nav className={styles.navBar}>
      <NavLink className={styles.menuList} to="/all">
        MENU
        <div className={styles.drop}>
          <div><NavLink to="/form">Monday</NavLink></div>
          <div><NavLink to="/enumerator">Tuesday</NavLink></div>
        </div>
      </NavLink>

    </nav>
  )
};

export default NavBar;