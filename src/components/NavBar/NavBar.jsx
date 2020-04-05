import React from 'react';
import styles from './NavBar.module.css';



const NavBar = () => {

  return  (
    <nav className={styles.navBar}>
      <div>
        <a href="/form">Monday</a>
      </div>
      <div>
        <a href="/all">Tuesday</a>
      </div>

    </nav>
  )
};

export default NavBar;